import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { blogs as staticBlogs } from '@/data/blogs';
import { articles } from '@/data/articles';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Real "last changed" dates instead of the build time, so Google trusts lastmod.
// Bump SITE_CONTENT_UPDATED when service/static page content changes.
const SITE_CONTENT_UPDATED = new Date('2026-11-09');
const REDIRECTED_BLOG_SLUGS = new Set([
  'on-page-seo-vs-off-page-seo',
  'top-social-media-marketing-agency-delhi',
]);
const parseDate = (value: unknown): Date | undefined => {
  if (!value) return undefined;
  if (typeof value === 'object' && value !== null && 'toDate' in value && typeof (value as { toDate: unknown }).toDate === 'function') {
    return (value as { toDate: () => Date }).toDate();
  }
  const d = new Date(String(value));
  return isNaN(d.getTime()) || d.getFullYear() < 2020 || d > new Date() ? undefined : d;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.southernedgemarketing.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/blogs',
    '/authors/ameet-nangia',
    '/contact',
    '/privacy',
    '/terms',
    '/refund',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Fetch Firestore projects + combine with static projects (deduplicated by slug)
  const allProjectSlugs = new Set<string>();
  projects.forEach((p) => allProjectSlugs.add(p.slug));

  try {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    querySnapshot.docs.forEach((doc) => {
      const data = doc.data();
      const slug = data.slug || doc.id;
      if (slug) allProjectSlugs.add(slug);
    });
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error);
  }

  const projectRoutes = Array.from(allProjectSlugs).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Fetch Firestore blogs + combine with static blogs (deduplicated by slug)
  const allBlogSlugs = new Set<string>();
  const blogDates = new Map<string, Date>();
  staticBlogs.forEach((b) => {
    allBlogSlugs.add(b.slug);
    const d = parseDate(b.publishedAt);
    if (d) blogDates.set(b.slug, d);
  });

  try {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    querySnapshot.docs.forEach((doc) => {
      const data = doc.data();
      const slug = data.slug || doc.id;
      if (slug) {
        allBlogSlugs.add(slug);
        const d = parseDate(data.updatedAt) || parseDate(data.date) || parseDate(data.publishedAt);
        if (d) blogDates.set(slug, d);
      }
    });
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  const blogRoutes = Array.from(allBlogSlugs).filter((slug) => !REDIRECTED_BLOG_SLUGS.has(slug)).map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: blogDates.get(slug) || SITE_CONTENT_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/explore-more/${article.slug}`,
    lastModified: parseDate(article.publishedAt) || SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const allCities = [
    'abu-dhabi',
    'ahmedabad',
    'bengaluru',
    'birmingham',
    'brisbane',
    'california',
    'chandigarh',
    'chennai',
    'delhi',
    'dubai',
    'gurgaon',
    'hyderabad',
    'jaipur',
    'kolkata',
    'london',
    'los-angeles',
    'lucknow',
    'manchester',
    'melbourne',
    'montreal',
    'mumbai',
    'new-york',
    'noida',
    'pune',
    'san-francisco',
    'sharjah',
    'surat',
    'sydney',
    'toronto',
    'vancouver',
  ];

  const cityRoutes = [
    ...allCities.map(city => `/services/app-development/${city}`),
    ...allCities.map(city => `/services/web-development/${city}`),
    ...allCities.map(city => `/services/social-media-management/${city}`),
    ...allCities.filter(city => city !== 'chandigarh').map(city => `/services/branding/${city}`),
    ...allCities.map(city => `/services/seo/${city}`),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...blogRoutes,
    ...articleRoutes,
    ...cityRoutes,
  ];
}
