'use client';
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import SkeletonLoader from './SkeletonLoader';

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

export async function getStaticProps() {
  const fetchData = await client.fetch(`${process.env.NEXT_PUBLIC_FETCHING_URL}[0..3]`);
  return fetchData;
}


function Toppicks() {
  const [products, setProducts] = useState<Data[] | any>(String);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)

  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getStaticProps();
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
      .listen(`*[_type == "product"][0..3]`)
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
    <div className='toppicks bg-white '>

      <div className='toppicks-section-one '>
        <h1 className='toppicks-section-one-h font-medium'>Top Picks For You</h1>
        <p className='toppicks-section-one-p text-[#9F9F9F] font-medium '>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      </div>


      <div className='toppicks-section-two'>

        {products.map((product: Data) => (
          <div key={product.id} className='toppicks-section-two-item   justify-center justify-items-center items-center' >
            <Link href={`./product/${product.id}`}>
              <div className='shop-section-two-item-one  bg-white relative overflow-hidden'>
                <Image height={283} width={283} src={product.image} alt="img" />
                <div className="absolute h-full w-full flex items-end justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300  bg-black/20">
                  <button className="w-full h-10 bg-black  text-white pr-6">Add To Cart</button>
                </div>
              </div>
            </Link>
            <div className='toppicks-section-two-item-two  space-y-3'>
              <p className='toppicks-section-two-item-two-p  '>{product.name}</p>
              <p className='toppicks-section-two-item-two-pp font-medium '>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
        <div className='toppicks-section-three justify-items-center'>
          <p className='toppicks-section-three-p   font-medium pb-2 border-b-[1px] border-black '>View More</p>
        </div>








    </div>
  )
}

export default Toppicks;