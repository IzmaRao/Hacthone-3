'use client';

import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import circles from '../../public/ci_grid-big-round.png';
import list from '../../public/bi_view-list.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Productsafety from './Productsafety';
import { useState, useEffect } from 'react';
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
  id: number;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  catogory: string;
}

async function getStaticProps() {
  const fetchData = await client.fetch(`${process.env.NEXT_PUBLIC_FETCHING_URL}`)
  return fetchData;
}


function Shop() {
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 16;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStaticProps();
        const uniqueData = data.filter((item: Data, index: number, self: Data[]) =>
          index === self.findIndex((t) => t.id === item.id)
        );

        setProducts(uniqueData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    const intervalId = setInterval(fetchData, 1000);
    const subscription = client
      .listen('*[_type == "product"]')
      .subscribe((update) => {
        if (update.mutations) {
          fetchData(); // Re-fetch products on update
        }
      });

    return () => {
      subscription.unsubscribe();
      clearInterval(intervalId);
    };
  }, []);

  const handlePageChange = (pageNumber: number) => { setCurrentPage(pageNumber); };

  if (loading) {
    return (
      <div className='loading'>
        <div className='relative'>
          <Navbar />
          <Navbar2 name1="Shop" name="Shop" />
        </div>
        <div className='shop-section-one bg-[#f4f4f4]'>
          <div className='shop-section-one-div-one'>
            <HiOutlineAdjustmentsHorizontal />
            <p>Filter</p>
            <Image width={21.33} height={16.33} src={circles} alt="" />
            <Image width={21} height={19.5} src={list} alt="" />
            <p>|</p>
            <p>Showing 1-16 of 32 results</p>
          </div>
          <div className='shop-section-one-div-two'>
            <label className='shop-section-one-div-two-input space-x-[17px]'>
              <p className='shop-section-one-div-two-input-p'>Show</p>
              <input className='shop-section-one-div-two-inputt w-[55] h-[55] text-center' type="text" placeholder='16' />
            </label>
            <label className='shop-section-one-div-two-input-two space-x-[17px]'>
              <p className='shop-section-one-div-two-input-p'>Sort by</p>
              <input className='shop-section-one-div-two-input-two-p' type="text" placeholder='Default' />
            </label>
          </div>
        </div>
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}...</div>;
  }

  const categories = ["All", ...new Set(products.map((product: Data) => product.catogory))];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product: Data) => product.catogory === selectedCategory);

  const searchedProducts = filteredProducts.filter((product: Data) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <div className='relative'>
        <Navbar />
        <Navbar2 name1="Shop" name="Shop" />
      </div>

      <div className='shop-section-one bg-[#f4f4f4]'>
        <div className='shop-section-one-div-one'>
          <HiOutlineAdjustmentsHorizontal />
          <p>Filter</p>
          <Image width={21.33} height={16.33} src={circles} alt="" />
          <Image width={21} height={19.5} src={list} alt="" />
          <p>|</p>
          <p>Showing 1-16 of 32 results</p>
        </div>
        <div className='shop-section-one-div-two'>
          <label className='shop-section-one-div-two-input space-x-[17px]'>
            <p className='shop-section-one-div-two-input-p'>Show</p>
            <input className='shop-section-one-div-two-inputt w-[55] h-[55] text-center' type="text" placeholder='16' />
          </label>
          <label className='shop-section-one-div-two-input-two space-x-[17px]'>
            <p className='shop-section-one-div-two-input-p'>Sort by</p>
            <input
              className='shop-section-one-div-two-input-two-p'
              type="text"
              placeholder='Default'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className='shop-section-category m-auto w-[170px] space-x-3 items-center flex justify-between'>
        <p className='text-lg font-semibold'>Catogories</p>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          {categories.map((category, index) => (
            <option className=' w-[62px] h-[25px] rounded border-black border-[1px]' key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className='shop-section-two space-y-[15px] mx-auto'>
        {currentProducts.map((product: Data) => (
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

      <div className='shop-section-three space-x-[38px] font-light'>
        {[...Array(Math.ceil(searchedProducts.length / productsPerPage)).keys()].map((number) => (
          <div key={number} className={`shop-section-three-one rounded-[10px] ${currentPage === number + 1 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'}`} onClick={() => handlePageChange(number + 1)} >
            <p>{number + 1}</p>
          </div>))}
        <div className='shop-section-three-next rounded-[10px] bg-[#FFF9E5]' onClick={() => handlePageChange(currentPage + 1)} >
          <p>Next</p>
        </div>
      </div>

      <Productsafety />
    </div>
  );
}

export default Shop;
