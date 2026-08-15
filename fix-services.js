const fs = require('fs');
const path = require('path');

const services = [
  'seo',
  'app-development',
  'web-development',
  'social-media-management',
  'branding'
];

const template = (slug, componentName) => `import { getServiceBySlug } from "@/data/services";
import { ServiceContent } from "@/components/ServiceContent";
import { LocationsGrid } from "@/components/LocationsGrid";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug("${slug}");
  if (!service) return {};
  return {
    alternates: { canonical: \`/services/${slug}\` },
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.description1,
  };
}

export default function ${componentName}Page() {
  const service = getServiceBySlug("${slug}");

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="w-full pb-12">
        <ServiceContent service={service} />
      </main>
      <LocationsGrid serviceSlug="${slug}" />
    </>
  );
}
`;

const getComponentName = (slug) => {
  return slug.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') + 'Service';
};

services.forEach(slug => {
  const dir = path.join(__dirname, 'src', 'app', 'services', slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'page.tsx');
  const componentName = getComponentName(slug);
  fs.writeFileSync(filePath, template(slug, componentName));
  console.log(`Created ${filePath}`);
});
