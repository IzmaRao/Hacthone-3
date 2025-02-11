import { createClient } from '@sanity/client';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  apiVersion: '2025-01-14',
});

async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await fetch(`http://localhost:3000/api/product/`);
    const product = await response.json(); z

    console.log('Products fetched:', product);

    for (const products of product) {
      console.log(`Processing product: ${products.name}`);
      const sanityProduct = {
        _type: 'product',
        name: products.name,
        description: products.description,
        price: products.price,
        tags: products.tags,
        width: products.width,
        height: products.height,
        image: products.image,
        rating: products.rating,
        stockQuantity: products.stockQuantity,
        id: products.id,
        discountPercentage: products.discountPercentage,
        isFeaturedProduct: products.isFeaturedProduct,
        catogory: products.catogory,
      };
      console.log('Uploading product to Sanity:', sanityProduct.name);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result.id}`);
    }
    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

importData();
