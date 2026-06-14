import { createClient } from 'next-sanity';

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const fallbackProjectId = 'mamotorsplaceholder';
export const hasSanityConfig = Boolean(sanityProjectId && sanityProjectId !== fallbackProjectId);

export const sanityClient = createClient({
  projectId: sanityProjectId || fallbackProjectId,
  dataset: sanityDataset,
  apiVersion: '2025-01-01',
  useCdn: true
});
