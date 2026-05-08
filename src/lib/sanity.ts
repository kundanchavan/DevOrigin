/// <reference types="vite/client" />
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = 'production';

export const isSanityConfigured = !!projectId && projectId !== 'placeholder';

if (isSanityConfigured) {
  console.log(`[Sanity] Initializing with Project: ${projectId}, Dataset: ${dataset}`);
}

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: dataset,
  useCdn: false, // Setting to false temporarily to bypass potential CDN propagation issues
  apiVersion: '2024-03-01', // Updated to a newer stable version
  token: import.meta.env.VITE_SANITY_WRITE_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
