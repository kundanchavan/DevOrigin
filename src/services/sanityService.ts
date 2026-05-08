import { client, isSanityConfigured, urlFor } from '../lib/sanity';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

export const productQueries = {
  allProducts: '*[_type == "product"] | order(_createdAt desc)',
  productById: (id: string) => `*[_type == "product" && _id == "${id}"][0]`,
  siteSettings: '*[_type == "siteSettings"][0]',
  features: '*[_type == "feature"] | order(orderRank asc)',
  galleryItems: '*[_type == "galleryItem"] | order(orderRank asc)',
};

export async function getSiteData() {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch(`{
      "settings": ${productQueries.siteSettings},
      "features": ${productQueries.features},
      "gallery": ${productQueries.galleryItems}
    }`);
  } catch (error) {
    console.error("Sanity Site Data Fetch Error:", error);
    return null;
  }
}

export async function getProducts(): Promise<Product[]> {
  if (!isSanityConfigured) {
    console.warn('Sanity Project ID not configured. Falling back to local products.');
    return PRODUCTS;
  }

  try {
    const products = await client.fetch(productQueries.allProducts);
    if (!products || products.length === 0) return PRODUCTS;
    
    return products.map((p: any) => ({
      id: p._id,
      name: p.name,
      category: p.category,
      price: p.price,
      description: p.description,
      features: p.features || [],
      image: p.image?.asset?._ref ? urlFor(p.image).url() : p.imageUrl || '',
      tag: p.tag,
      label: p.label,
      tagline: p.tagline,
      isNewLaunch: p.isNewLaunch,
      bgColor: p.bgColor,
      specs: p.specs || { stages: 0, precision: '-', flowRate: '-' },
    }));
  } catch (error: any) {
    console.error('Sanity Fetch Error:', error);
    
    if (error.message?.includes('Network Error') || error.message?.includes('Attempt to reach')) {
      console.error('HINT: This is likely a CORS issue. In Sanity.io Manage dashboard, go to API -> CORS Origins and add:');
      console.info(window.location.origin);
    }
    
    return PRODUCTS;
  }
}

export async function uploadImage(file: File) {
  if (!isSanityConfigured) throw new Error('Sanity not configured');
  if (!import.meta.env.VITE_SANITY_WRITE_TOKEN) throw new Error('Write token missing');

  try {
    const asset = await client.assets.upload('image', file, {
      filename: file.name,
    });
    return asset;
  } catch (error) {
    console.error('Sanity Upload Error:', error);
    throw error;
  }
}

export async function createProduct(product: Partial<Product>) {
  if (!import.meta.env.VITE_SANITY_WRITE_TOKEN) {
    throw new Error('VITE_SANITY_WRITE_TOKEN is missing. Please add it to the Settings menu.');
  }
  
  const doc = {
    _type: 'product',
    name: product.name,
    category: product.category,
    price: product.price,
    description: product.description,
    features: product.features,
    tag: product.tag,
    label: product.label,
    tagline: product.tagline,
    isNewLaunch: product.isNewLaunch,
    bgColor: product.bgColor,
    specs: product.specs,
    imageUrl: product.image?.startsWith('data:') ? undefined : product.image, // Don't store large base64 in string field
  } as any;

  // Handle Sanity image asset if provided as a ref or data URI was uploaded
  if (product.imageAssetId) {
    doc.image = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: product.imageAssetId
      }
    };
  }
  
  return client.create(doc);
}

export async function updateProduct(id: string, product: Partial<Product>) {
  if (!import.meta.env.VITE_SANITY_WRITE_TOKEN) {
    throw new Error('VITE_SANITY_WRITE_TOKEN is missing. Please add it to the Settings menu.');
  }

  const patch = {
    name: product.name,
    category: product.category,
    price: product.price,
    description: product.description,
    features: product.features,
    tag: product.tag,
    label: product.label,
    tagline: product.tagline,
    isNewLaunch: product.isNewLaunch,
    bgColor: product.bgColor,
    specs: product.specs,
    imageUrl: product.image?.startsWith('data:') ? undefined : product.image,
  } as any;

  if (product.imageAssetId) {
    patch.image = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: product.imageAssetId
      }
    };
  }

  return client
    .patch(id)
    .set(patch)
    .commit();
}

export async function deleteProduct(id: string) {
  if (!import.meta.env.VITE_SANITY_WRITE_TOKEN) {
    throw new Error('VITE_SANITY_WRITE_TOKEN is missing. Please add it to the Settings menu.');
  }
  
  const isMockId = id.startsWith('p') && id.length <= 3;
  if (isMockId) {
    console.warn('Cannot delete mock product from Sanity. Skipping.');
    return Promise.resolve();
  }
  
  return client.delete(id);
}
