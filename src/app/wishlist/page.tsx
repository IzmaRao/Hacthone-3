'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Navbar2 from '@/components/Navbar2';

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
  id: number;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  catogory: string;
}


const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
      // Retrieve the wishlist from local storage
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
          try {
              const parsedWishlist = JSON.parse(savedWishlist);
              console.log('Wishlist data:', parsedWishlist); // Log the parsed wishlist data
              setWishlist(parsedWishlist);
          } catch (error) {
              console.error('Error parsing wishlist data:', error);
          }
      }
  }, []);

    return (
        <div>
            <Navbar />
            <Navbar2 name="Wishlist" name1="Wishlist" />
            {wishlist.length === 0 ? (
                <p className='w-96 m-auto'>No items in wishlist.</p>
            ) : (
                <div className='shop-section-two space-y-[15px] mx-auto'>
                    {wishlist.map((product: Data) => (
                        <div key={product.id} className='shop-section-two-item'>
                        <Link href={`./product/${product.id}`}>
                          <div className='shop-section-two-item-one bg-white relative overflow-hidden'>
                            <Image height={283} width={283} src={product.image} alt="img" />
                            <div className="absolute h-full w-full flex items-end justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300 bg-black/20">
                              <button className="w-full h-10 bg-black text-white pr-6">Add To Cart</button>
                            </div>
                          </div>
                        </Link>
                        <div className='shop-section-two-item-two space-y-1'>
                          <p className='shop-section-two-item-two-p'>{product.name}</p>
                          <p className='shop-section-two-item-two-pp font-medium'>{product.price}</p>
                          <div className='text-sm'>{product.stockQuantity >= 1 ? <p>In Stock</p> : <p>Out of Stock</p>}</div>
                        </div>
                      </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;
