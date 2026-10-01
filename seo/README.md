# SEO Intelligence & Google Search Console Hub

This directory contains automated analytics, search engine performance reports, and AI Search (GEO / AEO) visibility audits for **Southern Edge Marketing**.

## Files in this Directory:
- **[`gsc_performance_and_ai_visibility_report.md`](./gsc_performance_and_ai_visibility_report.md)**: Full breakdown of ranking keywords, top ranking pages, clicks/views performance, growing search queries, and AI Search visibility state.

## How to Refresh Metrics:
To fetch latest live data from Google Search Console API and update all reports:
```bash
node scripts/fetch-gsc-data.js
node scratch/generate_seo_folder_report.js
```
