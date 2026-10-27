// Single source of truth for blog authorship.
// Posts saved without an author, or with the old generic team label,
// are credited to the founder so AI search and Google see a named expert.

const SITE_URL = "https://www.southernedgemarketing.com";

export const DEFAULT_AUTHOR = "Ameet Nangia";
export const DEFAULT_AUTHOR_URL = "/authors/ameet-nangia";

const GENERIC_AUTHORS = new Set(["", "southern marketing team", "content marketing team", "seo team", "team ama"]);

export function resolveAuthor(author?: string | null): string {
  const name = (author ?? "").trim();
  return GENERIC_AUTHORS.has(name.toLowerCase()) ? DEFAULT_AUTHOR : name;
}

export function authorSchema(name: string) {
  if (name === DEFAULT_AUTHOR) {
    return {
      "@type": "Person",
      "@id": `${SITE_URL}${DEFAULT_AUTHOR_URL}#person`,
      name: DEFAULT_AUTHOR,
      url: `${SITE_URL}${DEFAULT_AUTHOR_URL}`,
    };
  }
  return { "@type": "Person", name };
}
