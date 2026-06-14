import { createClient } from 'next-sanity';

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const hasSanityConfig = Boolean(sanityProjectId && sanityProjectId !== 'replace-me');

export const sanityClient = createClient({
  projectId: sanityProjectId || 'replace-me',
  dataset: sanityDataset,
  apiVersion: '2025-01-01',
  useCdn: true
});
