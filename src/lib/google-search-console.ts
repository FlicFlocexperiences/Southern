import { google } from 'googleapis';

export interface GSCAuthOptions {
  clientEmail?: string;
  privateKey?: string;
  keyFilePath?: string;
}

export interface DateRange {
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
}

export interface GSCQueryRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GrowingQueryItem {
  query: string;
  currentClicks: number;
  previousClicks: number;
  clicksGrowth: number;
  clicksGrowthPercent: number;
  currentImpressions: number;
  previousImpressions: number;
  impressionsGrowth: number;
  impressionsGrowthPercent: number;
  currentPosition: number;
  previousPosition: number;
  positionImprovement: number;
}

export interface PagePerformanceItem {
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface KeywordPerformanceItem {
  keyword: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
}

/**
 * Returns authenticated Google Search Console API client
 */
export function getSearchConsoleClient(customAuth?: GSCAuthOptions) {
  const clientEmail =
    customAuth?.clientEmail ||
    process.env.GSC_CLIENT_EMAIL ||
    process.env.FIREBASE_CLIENT_EMAIL ||
    process.env.GOOGLE_CLIENT_EMAIL;

  let privateKey =
    customAuth?.privateKey ||
    process.env.GSC_PRIVATE_KEY ||
    process.env.FIREBASE_PRIVATE_KEY ||
    process.env.GOOGLE_PRIVATE_KEY;

  if (privateKey) {
    // Clean up escaped newlines
    privateKey = privateKey.replace(/\\n/g, '\n');
  }

  const keyFilePath =
    customAuth?.keyFilePath ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    process.env.GSC_KEY_FILE;

  let auth;
  if (clientEmail && privateKey) {
    auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });
  } else if (keyFilePath) {
    auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });
  } else {
    throw new Error(
      'Missing Google Search Console service account credentials. Please configure GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY in .env or provide GOOGLE_APPLICATION_CREDENTIALS.'
    );
  }

  return google.searchconsole({
    version: 'v1',
    auth,
  });
}

/**
 * Helper to get default date ranges (last 28 days vs previous 28 days)
 */
export function getDefaultDateRanges() {
  const now = new Date();
  
  // GSC data typically has a 2-3 day lag
  const endCurrent = new Date(now);
  endCurrent.setDate(endCurrent.getDate() - 3);

  const startCurrent = new Date(endCurrent);
  startCurrent.setDate(startCurrent.getDate() - 27); // 28 days period

  const endPrevious = new Date(startCurrent);
  endPrevious.setDate(endPrevious.getDate() - 1);

  const startPrevious = new Date(endPrevious);
  startPrevious.setDate(startPrevious.getDate() - 27); // 28 days prior

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  return {
    current: {
      startDate: formatDate(startCurrent),
      endDate: formatDate(endCurrent),
    },
    previous: {
      startDate: formatDate(startPrevious),
      endDate: formatDate(endPrevious),
    },
  };
}

/**
 * Lists all sites/properties available to the service account
 */
export async function listAvailableSites(customAuth?: GSCAuthOptions) {
  const searchconsole = getSearchConsoleClient(customAuth);
  const response = await searchconsole.sites.list();
  return response.data.siteEntry || [];
}

/**
 * Query search analytics
 */
export async function querySearchAnalytics(
  siteUrl: string,
  requestBody: {
    startDate: string;
    endDate: string;
    dimensions?: ('query' | 'page' | 'country' | 'device' | 'searchAppearance')[];
    rowLimit?: number;
    startRow?: number;
    dimensionFilterGroups?: any[];
    aggregationType?: 'auto' | 'byPage' | 'byProperty';
  },
  customAuth?: GSCAuthOptions
) {
  const searchconsole = getSearchConsoleClient(customAuth);

  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: requestBody.startDate,
      endDate: requestBody.endDate,
      dimensions: requestBody.dimensions || ['query'],
      rowLimit: requestBody.rowLimit || 250,
      startRow: requestBody.startRow || 0,
      dimensionFilterGroups: requestBody.dimensionFilterGroups,
      aggregationType: requestBody.aggregationType || 'auto',
    },
  });

  return (res.data.rows || []) as GSCQueryRow[];
}

/**
 * 1. Top Keywords sorted by Impressions
 */
export async function getTopKeywordsByImpressions(
  siteUrl: string,
  options?: {
    startDate?: string;
    endDate?: string;
    limit?: number;
  },
  customAuth?: GSCAuthOptions
): Promise<KeywordPerformanceItem[]> {
  const defaultDates = getDefaultDateRanges().current;
  const startDate = options?.startDate || defaultDates.startDate;
  const endDate = options?.endDate || defaultDates.endDate;
  const limit = options?.limit || 50;

  const rows = await querySearchAnalytics(
    siteUrl,
    {
      startDate,
      endDate,
      dimensions: ['query'],
      rowLimit: limit * 2,
    },
    customAuth
  );

  return rows
    .map((r) => ({
      keyword: r.keys[0] || '',
      impressions: r.impressions || 0,
      clicks: r.clicks || 0,
      ctr: Number(((r.ctr || 0) * 100).toFixed(2)),
      position: Number((r.position || 0).toFixed(1)),
    }))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, limit);
}

/**
 * 2. Top Pages by Clicks and Views (Impressions)
 */
export async function getTopPagesByClicksAndViews(
  siteUrl: string,
  options?: {
    startDate?: string;
    endDate?: string;
    limit?: number;
    sortBy?: 'clicks' | 'impressions';
  },
  customAuth?: GSCAuthOptions
): Promise<PagePerformanceItem[]> {
  const defaultDates = getDefaultDateRanges().current;
  const startDate = options?.startDate || defaultDates.startDate;
  const endDate = options?.endDate || defaultDates.endDate;
  const limit = options?.limit || 50;
  const sortBy = options?.sortBy || 'clicks';

  const rows = await querySearchAnalytics(
    siteUrl,
    {
      startDate,
      endDate,
      dimensions: ['page'],
      rowLimit: limit * 2,
    },
    customAuth
  );

  const mapped = rows.map((r) => ({
    page: r.keys[0] || '',
    clicks: r.clicks || 0,
    impressions: r.impressions || 0,
    ctr: Number(((r.ctr || 0) * 100).toFixed(2)),
    position: Number((r.position || 0).toFixed(1)),
  }));

  if (sortBy === 'impressions') {
    mapped.sort((a, b) => b.impressions - a.impressions);
  } else {
    mapped.sort((a, b) => b.clicks - a.clicks);
  }

  return mapped.slice(0, limit);
}

/**
 * 3. Top Pages that are Ranking (Best Average Position)
 */
export async function getTopRankingPages(
  siteUrl: string,
  options?: {
    startDate?: string;
    endDate?: string;
    limit?: number;
    minImpressions?: number;
  },
  customAuth?: GSCAuthOptions
): Promise<PagePerformanceItem[]> {
  const defaultDates = getDefaultDateRanges().current;
  const startDate = options?.startDate || defaultDates.startDate;
  const endDate = options?.endDate || defaultDates.endDate;
  const limit = options?.limit || 50;
  const minImpressions = options?.minImpressions || 5;

  const rows = await querySearchAnalytics(
    siteUrl,
    {
      startDate,
      endDate,
      dimensions: ['page'],
      rowLimit: 250,
    },
    customAuth
  );

  return rows
    .filter((r) => (r.impressions || 0) >= minImpressions)
    .map((r) => ({
      page: r.keys[0] || '',
      clicks: r.clicks || 0,
      impressions: r.impressions || 0,
      ctr: Number(((r.ctr || 0) * 100).toFixed(2)),
      position: Number((r.position || 0).toFixed(1)),
    }))
    .sort((a, b) => a.position - b.position)
    .slice(0, limit);
}

/**
 * 4. Top Queries that are Growing (Comparing Recent vs Previous Period)
 */
export async function getTopGrowingQueries(
  siteUrl: string,
  options?: {
    currentPeriod?: DateRange;
    previousPeriod?: DateRange;
    limit?: number;
    sortBy?: 'impressions' | 'clicks';
  },
  customAuth?: GSCAuthOptions
): Promise<GrowingQueryItem[]> {
  const defaultRanges = getDefaultDateRanges();
  const current = options?.currentPeriod || defaultRanges.current;
  const previous = options?.previousPeriod || defaultRanges.previous;
  const limit = options?.limit || 50;
  const sortBy = options?.sortBy || 'impressions';

  // Fetch current period queries
  const currentRows = await querySearchAnalytics(
    siteUrl,
    {
      startDate: current.startDate,
      endDate: current.endDate,
      dimensions: ['query'],
      rowLimit: 500,
    },
    customAuth
  );

  // Fetch previous period queries
  const previousRows = await querySearchAnalytics(
    siteUrl,
    {
      startDate: previous.startDate,
      endDate: previous.endDate,
      dimensions: ['query'],
      rowLimit: 500,
    },
    customAuth
  );

  const prevMap = new Map<
    string,
    { clicks: number; impressions: number; ctr: number; position: number }
  >();
  for (const row of previousRows) {
    const q = row.keys[0] || '';
    if (q) {
      prevMap.set(q, {
        clicks: row.clicks || 0,
        impressions: row.impressions || 0,
        ctr: row.ctr || 0,
        position: row.position || 0,
      });
    }
  }

  const growthList: GrowingQueryItem[] = [];

  for (const row of currentRows) {
    const query = row.keys[0] || '';
    if (!query) continue;

    const curClicks = row.clicks || 0;
    const curImpressions = row.impressions || 0;
    const curPos = row.position || 0;

    const prev = prevMap.get(query);
    const prevClicks = prev ? prev.clicks : 0;
    const prevImpressions = prev ? prev.impressions : 0;
    const prevPos = prev ? prev.position : curPos;

    const clicksGrowth = curClicks - prevClicks;
    const clicksGrowthPercent =
      prevClicks > 0
        ? Number((((curClicks - prevClicks) / prevClicks) * 100).toFixed(1))
        : curClicks > 0
        ? 100
        : 0;

    const impressionsGrowth = curImpressions - prevImpressions;
    const impressionsGrowthPercent =
      prevImpressions > 0
        ? Number(
            (((curImpressions - prevImpressions) / prevImpressions) * 100).toFixed(1)
          )
        : curImpressions > 0
        ? 100
        : 0;

    const positionImprovement = prev ? Number((prevPos - curPos).toFixed(1)) : 0;

    // We consider it growing if either impressions growth > 0 or clicks growth > 0
    if (impressionsGrowth > 0 || clicksGrowth > 0) {
      growthList.push({
        query,
        currentClicks: curClicks,
        previousClicks: prevClicks,
        clicksGrowth,
        clicksGrowthPercent,
        currentImpressions: curImpressions,
        previousImpressions: prevImpressions,
        impressionsGrowth,
        impressionsGrowthPercent,
        currentPosition: Number(curPos.toFixed(1)),
        previousPosition: Number(prevPos.toFixed(1)),
        positionImprovement,
      });
    }
  }

  if (sortBy === 'clicks') {
    growthList.sort((a, b) => b.clicksGrowth - a.clicksGrowth);
  } else {
    growthList.sort((a, b) => b.impressionsGrowth - a.impressionsGrowth);
  }

  return growthList.slice(0, limit);
}

/**
 * 5. Complete Search Console Audit & Analytics Report
 */
export async function getFullSearchAnalyticsReport(
  siteUrl: string,
  options?: {
    currentPeriod?: DateRange;
    previousPeriod?: DateRange;
    limit?: number;
  },
  customAuth?: GSCAuthOptions
) {
  const defaultRanges = getDefaultDateRanges();
  const current = options?.currentPeriod || defaultRanges.current;
  const previous = options?.previousPeriod || defaultRanges.previous;
  const limit = options?.limit || 25;

  const [
    topKeywordsByImpressions,
    topPagesByClicks,
    topPagesByImpressions,
    topRankingPages,
    growingQueriesByImpressions,
    growingQueriesByClicks,
  ] = await Promise.all([
    getTopKeywordsByImpressions(siteUrl, { startDate: current.startDate, endDate: current.endDate, limit }, customAuth),
    getTopPagesByClicksAndViews(siteUrl, { startDate: current.startDate, endDate: current.endDate, limit, sortBy: 'clicks' }, customAuth),
    getTopPagesByClicksAndViews(siteUrl, { startDate: current.startDate, endDate: current.endDate, limit, sortBy: 'impressions' }, customAuth),
    getTopRankingPages(siteUrl, { startDate: current.startDate, endDate: current.endDate, limit }, customAuth),
    getTopGrowingQueries(siteUrl, { currentPeriod: current, previousPeriod: previous, limit, sortBy: 'impressions' }, customAuth),
    getTopGrowingQueries(siteUrl, { currentPeriod: current, previousPeriod: previous, limit, sortBy: 'clicks' }, customAuth),
  ]);

  return {
    siteUrl,
    dateRange: {
      current,
      previous,
    },
    topKeywordsByImpressions,
    topPagesByClicks,
    topPagesByImpressions,
    topRankingPages,
    growingQueries: {
      byImpressionsGrowth: growingQueriesByImpressions,
      byClicksGrowth: growingQueriesByClicks,
    },
  };
}
