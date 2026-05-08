/// <reference types="vite/client" />

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export const isSanityConfigured =
  !!projectId &&
  !!dataset &&
  projectId !== 'placeholder';

if (isSanityConfigured) {
  console.log(
    `[Sanity] Initializing with Project: ${projectId}, Dataset: ${dataset}`
  );
}

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: dataset || 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
  token: import.meta.env.VITE_SANITY_WRITE_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}