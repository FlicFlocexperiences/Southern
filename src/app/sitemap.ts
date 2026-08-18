import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { blogs as staticBlogs } from '@/data/blogs';
import { articles } from '@/data/articles';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.southernedgemarketing.com';

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

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
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

  const commonCities = [
    'abu-dhabi',
    'bengaluru',
    'chennai',
    'delhi',
    'gurgaon',
    'hyderabad',
    'kolkata',
    'lucknow',
    'mumbai',
    'noida',
    'pune',
    'sharjah',
    'surat'
  ];

  const brandingCities = ['abu-dhabi', 'bengaluru', 'chennai', 'delhi', 'gurgaon', 'hyderabad', 'kolkata', 'lucknow'];
  const seoCities = ['abu-dhabi', 'bengaluru', 'chennai', 'delhi', 'gurgaon', 'hyderabad', 'kolkata', 'lucknow'];

  const cityRoutes = [
    ...commonCities.map(city => `/services/app-development/${city}`),
    '/services/app-development/jaipur',
    '/services/app-development/dubai',
    ...commonCities.map(city => `/services/web-development/${city}`),
    '/services/web-development/jaipur',
    '/services/web-development/ahmedabad',
    '/services/web-development/dubai',
    ...commonCities.map(city => `/services/social-media-management/${city}`),
    '/services/social-media-management/dubai',
    ...brandingCities.map(city => `/services/branding/${city}`),
    '/services/branding/jaipur',
    '/services/branding/dubai',
    ...seoCities.map(city => `/services/seo/${city}`),
    '/services/seo/jaipur',
    '/services/seo/dubai',
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
