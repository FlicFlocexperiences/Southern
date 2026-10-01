const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Helper to load env vars from .env and .env.local if not already loaded
function loadEnv() {
  const envFiles = ['.env.local', '.env'];
  for (const file of envFiles) {
    const fullPath = path.resolve(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const key = trimmed.substring(0, eqIdx).trim();
          let val = trimmed.substring(eqIdx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      }
    }
  }
}

loadEnv();

function getCredentials() {
  let clientEmail =
    process.env.GSC_CLIENT_EMAIL ||
    process.env.FIREBASE_CLIENT_EMAIL ||
    process.env.GOOGLE_CLIENT_EMAIL;

  let privateKey =
    process.env.GSC_PRIVATE_KEY ||
    process.env.FIREBASE_PRIVATE_KEY ||
    process.env.GOOGLE_PRIVATE_KEY;

  if (privateKey) {
    privateKey = privateKey.replace(/\\n/g, '\n');
  }

  const keyFilePath =
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    process.env.GSC_KEY_FILE;

  if (keyFilePath && fs.existsSync(keyFilePath)) {
    return { keyFilePath };
  }

  if (clientEmail && privateKey) {
    return { clientEmail, privateKey };
  }

  return null;
}

function getGSCAuth() {
  const creds = getCredentials();
  if (!creds) {
    throw new Error(
      'Missing Google Service Account Credentials!\n' +
      'Please ensure you have configured in your .env file:\n' +
      '  GSC_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com\n' +
      '  GSC_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----"\n' +
      'or provide GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account.json\n'
    );
  }

  if (creds.keyFilePath) {
    return new google.auth.GoogleAuth({
      keyFile: creds.keyFilePath,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });
  }

  return new google.auth.JWT({
    email: creds.clientEmail,
    key: creds.privateKey,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
}

function getDefaultDateRanges() {
  const now = new Date();
  const endCurrent = new Date(now);
  endCurrent.setDate(endCurrent.getDate() - 3); // GSC 3-day data delay

  const startCurrent = new Date(endCurrent);
  startCurrent.setDate(startCurrent.getDate() - 27); // 28-day window

  const endPrevious = new Date(startCurrent);
  endPrevious.setDate(endPrevious.getDate() - 1);

  const startPrevious = new Date(endPrevious);
  startPrevious.setDate(startPrevious.getDate() - 27);

  const fmt = (d) => d.toISOString().split('T')[0];

  return {
    current: { startDate: fmt(startCurrent), endDate: fmt(endCurrent) },
    previous: { startDate: fmt(startPrevious), endDate: fmt(endPrevious) },
  };
}

async function run() {
  console.log('='.repeat(80));
  console.log(' GOOGLE SEARCH CONSOLE API DATA EXTRACTION & ANALYSIS');
  console.log('='.repeat(80));

  const creds = getCredentials();
  if (!creds) {
    console.error('\n❌ ERROR: Google Service Account Credentials not found in .env.');
    console.error('To connect Google Search Console:');
    console.error('1. Go to Google Cloud Console (or Firebase Console -> Project Settings -> Service Accounts)');
    console.error('2. Generate a Service Account Private Key (JSON)');
    console.error('3. Add the Service Account Client Email to Google Search Console (Settings -> Users and permissions)');
    console.error('4. Add GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY to your .env file.\n');
    process.exit(1);
  }

  const auth = getGSCAuth();
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  console.log('\n🔐 Authenticating with Google Search Console API...');
  
  // 1. List sites to check permissions and available properties
  let sites = [];
  try {
    const sitesRes = await searchconsole.sites.list();
    sites = sitesRes.data.siteEntry || [];
    console.log(`✅ Authentication successful! Found ${sites.length} accessible site property(ies):`);
    sites.forEach((s) => console.log(`   - ${s.siteUrl} (permission: ${s.permissionLevel})`));
  } catch (err) {
    console.warn('⚠️ Could not list sites automatically:', err.message);
  }

  // Determine site URL to query
  let siteUrl = process.env.GSC_SITE_URL;
  if (!siteUrl) {
    if (sites.length > 0) {
      siteUrl = sites[0].siteUrl;
    } else {
      siteUrl = 'https://www.southernedgemarketing.com/';
    }
  }

  console.log(`\n🎯 Querying property: ${siteUrl}`);
  const dateRanges = getDefaultDateRanges();
  console.log(`📅 Current Period:  ${dateRanges.current.startDate} to ${dateRanges.current.endDate}`);
  console.log(`📅 Previous Period: ${dateRanges.previous.startDate} to ${dateRanges.previous.endDate}`);

  // Fetch Queries for current period
  console.log('\n⏳ Fetching current and previous period search analytics data...');
  const [currentQueriesRes, prevQueriesRes, pagesRes] = await Promise.all([
    searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: dateRanges.current.startDate,
        endDate: dateRanges.current.endDate,
        dimensions: ['query'],
        rowLimit: 500,
      },
    }).catch(err => ({ data: { rows: [] }, error: err })),

    searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: dateRanges.previous.startDate,
        endDate: dateRanges.previous.endDate,
        dimensions: ['query'],
        rowLimit: 500,
      },
    }).catch(err => ({ data: { rows: [] }, error: err })),

    searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: dateRanges.current.startDate,
        endDate: dateRanges.current.endDate,
        dimensions: ['page'],
        rowLimit: 500,
      },
    }).catch(err => ({ data: { rows: [] }, error: err })),
  ]);

  if (currentQueriesRes.error) {
    console.error('\n❌ Query Error for queries:', currentQueriesRes.error.message);
    if (currentQueriesRes.error.errors) {
      console.error(JSON.stringify(currentQueriesRes.error.errors, null, 2));
    }
  }

  const curQueries = currentQueriesRes.data?.rows || [];
  const prevQueries = prevQueriesRes.data?.rows || [];
  const pages = pagesRes.data?.rows || [];

  console.log(`\n📊 Data fetched: ${curQueries.length} search queries, ${pages.length} pages found.`);

  // 1. TOP KEYWORDS BY NUMBER OF IMPRESSIONS
  console.log('\n' + '='.repeat(80));
  console.log(' 1. TOP KEYWORDS BY NUMBER OF IMPRESSIONS');
  console.log('='.repeat(80));
  const topByImpressions = [...curQueries]
    .sort((a, b) => (b.impressions || 0) - (a.impressions || 0))
    .slice(0, 20);

  if (topByImpressions.length === 0) {
    console.log('No query data available for this date range.');
  } else {
    console.log(
      'Rank | Keyword / Query'.padEnd(45) +
      '| Impressions | Clicks | CTR    | Avg Pos'
    );
    console.log('-'.repeat(80));
    topByImpressions.forEach((row, i) => {
      const q = (row.keys[0] || '').substring(0, 38).padEnd(40);
      const imp = String(row.impressions || 0).padStart(11);
      const clk = String(row.clicks || 0).padStart(6);
      const ctr = ((row.ctr || 0) * 100).toFixed(2) + '%';
      const pos = (row.position || 0).toFixed(1);
      console.log(`${String(i + 1).padStart(4)} | ${q} | ${imp} | ${clk} | ${ctr.padStart(6)} | ${pos.padStart(7)}`);
    });
  }

  // 2. TOP PAGES BY CLICKS & VIEWS (IMPRESSIONS)
  console.log('\n' + '='.repeat(80));
  console.log(' 2. TOP PAGES BY CLICKS & VIEWS (IMPRESSIONS)');
  console.log('='.repeat(80));
  const topPagesByClicks = [...pages]
    .sort((a, b) => (b.clicks || 0) - (a.clicks || 0) || (b.impressions || 0) - (a.impressions || 0))
    .slice(0, 20);

  if (topPagesByClicks.length === 0) {
    console.log('No page data available for this date range.');
  } else {
    console.log(
      'Rank | Page URL'.padEnd(50) +
      '| Clicks | Impressions (Views) | CTR    | Avg Pos'
    );
    console.log('-'.repeat(95));
    topPagesByClicks.forEach((row, i) => {
      let pagePath = row.keys[0] || '';
      try {
        const u = new URL(pagePath);
        pagePath = u.pathname;
      } catch (e) {}
      const p = pagePath.substring(0, 43).padEnd(45);
      const clk = String(row.clicks || 0).padStart(6);
      const imp = String(row.impressions || 0).padStart(19);
      const ctr = ((row.ctr || 0) * 100).toFixed(2) + '%';
      const pos = (row.position || 0).toFixed(1);
      console.log(`${String(i + 1).padStart(4)} | ${p} | ${clk} | ${imp} | ${ctr.padStart(6)} | ${pos.padStart(7)}`);
    });
  }

  // 3. TOP RANKING PAGES (BEST AVERAGE POSITION)
  console.log('\n' + '='.repeat(80));
  console.log(' 3. TOP RANKING PAGES (BY AVERAGE POSITION, MIN 5 IMPRESSIONS)');
  console.log('='.repeat(80));
  const topRankingPages = [...pages]
    .filter(r => (r.impressions || 0) >= 5)
    .sort((a, b) => (a.position || 0) - (b.position || 0))
    .slice(0, 20);

  if (topRankingPages.length === 0) {
    console.log('No ranking pages matching minimum impressions threshold.');
  } else {
    console.log(
      'Rank | Page URL'.padEnd(50) +
      '| Avg Pos | Impressions | Clicks | CTR'
    );
    console.log('-'.repeat(85));
    topRankingPages.forEach((row, i) => {
      let pagePath = row.keys[0] || '';
      try {
        const u = new URL(pagePath);
        pagePath = u.pathname;
      } catch (e) {}
      const p = pagePath.substring(0, 43).padEnd(45);
      const pos = (row.position || 0).toFixed(1).padStart(7);
      const imp = String(row.impressions || 0).padStart(11);
      const clk = String(row.clicks || 0).padStart(6);
      const ctr = ((row.ctr || 0) * 100).toFixed(2) + '%';
      console.log(`${String(i + 1).padStart(4)} | ${p} | ${pos} | ${imp} | ${clk} | ${ctr.padStart(5)}`);
    });
  }

  // 4. TOP QUERIES THAT ARE GROWING (PERIOD OVER PERIOD COMPARISON)
  console.log('\n' + '='.repeat(80));
  console.log(' 4. TOP GROWING QUERIES (PERIOD-OVER-PERIOD COMPARISON)');
  console.log('='.repeat(80));

  const prevMap = new Map();
  for (const r of prevQueries) {
    const q = r.keys[0];
    if (q) prevMap.set(q, r);
  }

  const growthList = [];
  for (const r of curQueries) {
    const q = r.keys[0];
    if (!q) continue;
    const prev = prevMap.get(q);
    const prevImp = prev ? prev.impressions || 0 : 0;
    const prevClk = prev ? prev.clicks || 0 : 0;
    const prevPos = prev ? prev.position || 0 : (r.position || 0);

    const impGrowth = (r.impressions || 0) - prevImp;
    const clkGrowth = (r.clicks || 0) - prevClk;
    const posDiff = prev ? (prevPos - (r.position || 0)) : 0; // positive means rank got better (closer to 1)

    if (impGrowth > 0 || clkGrowth > 0) {
      growthList.push({
        query: q,
        curImp: r.impressions || 0,
        prevImp,
        impGrowth,
        impGrowthPct: prevImp > 0 ? (((impGrowth) / prevImp) * 100).toFixed(1) + '%' : '+100% (New)',
        curClk: r.clicks || 0,
        prevClk,
        clkGrowth,
        curPos: (r.position || 0).toFixed(1),
        posDiff: posDiff.toFixed(1),
      });
    }
  }

  growthList.sort((a, b) => b.impGrowth - a.impGrowth);
  const topGrowing = growthList.slice(0, 20);

  if (topGrowing.length === 0) {
    console.log('No growing queries identified between the two periods.');
  } else {
    console.log(
      'Rank | Growing Query'.padEnd(45) +
      '| Imp Growth  | Now vs Prior | Clicks (+/-) | Pos (Delta)'
    );
    console.log('-'.repeat(95));
    topGrowing.forEach((item, i) => {
      const q = item.query.substring(0, 38).padEnd(40);
      const growth = (`+${item.impGrowth} (${item.impGrowthPct})`).padStart(12);
      const impRatio = (`${item.curImp} vs ${item.prevImp}`).padStart(12);
      const clk = (`${item.curClk} (${item.clkGrowth >= 0 ? '+' : ''}${item.clkGrowth})`).padStart(12);
      const pos = (`${item.curPos} (${item.posDiff >= 0 ? '+' : ''}${item.posDiff})`).padStart(11);
      console.log(`${String(i + 1).padStart(4)} | ${q} | ${growth} | ${impRatio} | ${clk} | ${pos}`);
    });
  }

  // Save report to JSON file
  const reportOutput = {
    generatedAt: new Date().toISOString(),
    siteUrl,
    dateRanges,
    summary: {
      totalQueries: curQueries.length,
      totalPages: pages.length,
      growingQueriesCount: growthList.length,
    },
    topKeywordsByImpressions: topByImpressions,
    topPagesByClicks: topPagesByClicks,
    topRankingPages: topRankingPages,
    topGrowingQueries: topGrowing,
  };

  const outputPath = path.resolve(process.cwd(), 'gsc_analytics_report.json');
  fs.writeFileSync(outputPath, JSON.stringify(reportOutput, null, 2), 'utf8');
  console.log('\n' + '='.repeat(80));
  console.log(`💾 Full report saved to: ${outputPath}`);
  console.log('='.repeat(80) + '\n');
}

run().catch((err) => {
  console.error('\n❌ Execution Failed:', err);
  process.exit(1);
});
