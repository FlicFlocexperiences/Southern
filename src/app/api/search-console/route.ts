import { NextRequest, NextResponse } from 'next/server';
import {
  getFullSearchAnalyticsReport,
  getTopKeywordsByImpressions,
  getTopPagesByClicksAndViews,
  getTopRankingPages,
  getTopGrowingQueries,
  listAvailableSites,
} from '@/lib/google-search-console';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'report';
    const siteUrl =
      searchParams.get('siteUrl') ||
      process.env.GSC_SITE_URL ||
      'sc-domain:southernedgemarketing.com';
    const startDate = searchParams.get('startDate') || undefined;
    const endDate = searchParams.get('endDate') || undefined;
    const limit = searchParams.get('limit')
      ? parseInt(searchParams.get('limit')!, 10)
      : 25;

    if (type === 'sites') {
      const sites = await listAvailableSites();
      return NextResponse.json({ success: true, sites });
    }

    if (type === 'keywords') {
      const data = await getTopKeywordsByImpressions(siteUrl, {
        startDate,
        endDate,
        limit,
      });
      return NextResponse.json({ success: true, siteUrl, data });
    }

    if (type === 'pages_clicks') {
      const data = await getTopPagesByClicksAndViews(siteUrl, {
        startDate,
        endDate,
        limit,
        sortBy: 'clicks',
      });
      return NextResponse.json({ success: true, siteUrl, data });
    }

    if (type === 'pages_impressions') {
      const data = await getTopPagesByClicksAndViews(siteUrl, {
        startDate,
        endDate,
        limit,
        sortBy: 'impressions',
      });
      return NextResponse.json({ success: true, siteUrl, data });
    }

    if (type === 'ranking_pages') {
      const data = await getTopRankingPages(siteUrl, {
        startDate,
        endDate,
        limit,
      });
      return NextResponse.json({ success: true, siteUrl, data });
    }

    if (type === 'growing_queries') {
      const data = await getTopGrowingQueries(siteUrl, {
        limit,
      });
      return NextResponse.json({ success: true, siteUrl, data });
    }

    // Default full report
    const fullReport = await getFullSearchAnalyticsReport(siteUrl, { limit });
    return NextResponse.json({ success: true, report: fullReport });
  } catch (error: any) {
    console.error('Google Search Console API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch Google Search Console data',
        details: error.response?.data || null,
      },
      { status: 500 }
    );
  }
}
