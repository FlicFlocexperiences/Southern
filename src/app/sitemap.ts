import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { blogs as staticBlogs } from '@/data/blogs';
import { articles } from '@/data/articles';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://southernedgemarketing.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/blogs',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
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
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Fetch Firestore blogs + combine with static blogs (deduplicated by slug)
  const allBlogSlugs = new Set<string>();
  staticBlogs.forEach((b) => allBlogSlugs.add(b.slug));

  try {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    querySnapshot.docs.forEach((doc) => {
      const data = doc.data();
      const slug = data.slug || doc.id;
      if (slug) allBlogSlugs.add(slug);
    });
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  const blogRoutes = Array.from(allBlogSlugs).map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/explore-more/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const allCities = [
    'abu-dhabi',
    'ahmedabad',
    'bengaluru',
    'birmingham',
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
    'montreal',
    'mumbai',
    'new-york',
    'noida',
    'pune',
    'san-francisco',
    'sharjah',
    'surat',
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
    lastModified: new Date(),
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
