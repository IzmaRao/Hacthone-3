'use client';
import Image, { StaticImageData } from 'next/image';
import sofa from '../../public/Asgaard sofa 1.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';
import { client } from '@/sanity/lib/client';
interface Data {
  name: string;
  price: number;
  description: string;
  tags: string[];
  width: number;
  height: number;
  image: StaticImageData;
  rating: number;
  stockQuantity: number;
  id: number
}


export async function getStaticProps(productId: number) {
  const fetchData = await client.fetch(`${process.env.NEXT_PUBLIC_SINGLE_PRODUCT_URL} && id == ${productId}]`)
  return fetchData;
}

function Asgardsofa() {
  const [products, setProducts] = useState<Data | any>(String);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getStaticProps(14);
        interface Product {
          id: string;
        }

        const uniqueData = data.filter((item: Product, index: number, self: Product[]) =>
          index === self.findIndex((t) => t.id === item.id)
        );

        setProducts(uniqueData);
      }
      catch (err: any) {
        setError(err.message)
      }
      finally {
        setLoading(false)
      }

    };

    fetchProduct();
    const intervalId = setInterval(fetchProduct, 1000);
    
    const subscription = client
      .listen(`${process.env.NEXT_PUBLIC_ASGARDS_URL}`)
      .subscribe((update) => {
        if (update.mutations) {
          fetchProduct(); // Re-fetch products on update
        }
      });

    return () => {
      subscription.unsubscribe();
      clearInterval(intervalId);
    };
    
    return () => clearInterval(intervalId);
  }, []);




  if (loading) {
    return <div className='loading'>
      <SkeletonLoader/> 
    </div>
  }

  if (error) {
    return <div>Error: {error}...</div>
  }
  return (
    <div className='asgaardo  bg-[#FFF9E5]'>
        <div className='asgaardo-sofa-img xl:-mt-14'>
            <Image width={883} height={500} src={sofa} alt='asgard sofa'/>
        </div>
        <div className='asgaardo-content 2xl:space-y-[33px] xl:mt-44 xl:!space-y-6 space-y-6'>
            <h2 className='asgaardo-content-h-two  font-medium'>New Arrivals</h2>
            <h1 className='asgaardo-content-h-one font-bold '>Asgaard Sofa</h1>
            {products.map((product: Data) => (
              <Link key={product.id} href={`./product/${product.id}`}>
              <button className='asgaardo-content-btn  border-2 border-black justify-items-center'>Order Now</button>
              </Link>
            ))}
        </div>
    </div>
  )
}

export default Asgardsofa