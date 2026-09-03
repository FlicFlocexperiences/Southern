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

  // Fetch Firestore projects as the single authoritative source of truth
  const allProjectSlugs = new Set<string>();

  try {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    if (!querySnapshot.empty) {
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        const slug = data.slug || doc.id;
        if (slug) allProjectSlugs.add(slug);
      });
    } else {
      projects.forEach((p) => allProjectSlugs.add(p.slug));
    }
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error);
    projects.forEach((p) => allProjectSlugs.add(p.slug));
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
