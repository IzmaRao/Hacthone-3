import React from 'react'
import circles from '../../public/ci_grid-big-round.png';
import list from '../../public/bi_view-list.png';
function SkeletonLoader() {
  return (
    <div>


      <div className='shop-section-two  space-y-[15px] mx-auto '>

        <div className='shop-section-two-item  space-y-6' >
          <div className='shop-section-two-item-one  bg-white relative overflow-hidden'>
            <div className='h-[283px] w-[283px] bg-gray-200'></div>
            <div className="absolute h-full w-full flex items-end justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300  bg-black/20">
              <button className="w-full h-10 bg-black  text-white pr-6">Add To Cart</button>
            </div>
          </div>
          <div className='shop-section-two-item-two space-y-3'>
            <p className='shop-section-two-item-two-p '>Product Name</p>
            <p className='shop-section-two-item-two-pp font-medium '>Product Price</p>
          </div>
        </div>

        <div className='shop-section-two-item  space-y-6' >
          <div className='shop-section-two-item-one  bg-white relative overflow-hidden'>
            <div className='h-[283px] w-[283px] bg-gray-200'></div>
            <div className="absolute h-full w-full flex items-end justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300  bg-black/20">
              <button className="w-full h-10 bg-black  text-white pr-6">Add To Cart</button>
            </div>
          </div>
          <div className='shop-section-two-item-two space-y-3'>
            <p className='shop-section-two-item-two-p '>Product Name</p>
            <p className='shop-section-two-item-two-pp font-medium '>Product Price</p>
          </div>
        </div>

        <div className='shop-section-two-item  space-y-6' >
          <div className='shop-section-two-item-one  bg-white relative overflow-hidden'>
            <div className='h-[283px] w-[283px] bg-gray-200'></div>
            <div className="absolute h-full w-full flex items-end justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300  bg-black/20">
              <button className="w-full h-10 bg-black  text-white pr-6">Add To Cart</button>
            </div>
          </div>
          <div className='shop-section-two-item-two space-y-3'>
            <p className='shop-section-two-item-two-p '>Product Name</p>
            <p className='shop-section-two-item-two-pp font-medium '>Product Price</p>
          </div>
        </div>

        <div className='shop-section-two-item  space-y-6' >
          <div className='shop-section-two-item-one  bg-white relative overflow-hidden'>
            <div className='h-[283px] w-[283px] bg-gray-200'></div>
            <div className="absolute h-full w-full flex items-end justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300  bg-black/20">
              <button className="w-full h-10 bg-black  text-white pr-6">Add To Cart</button>
            </div>
          </div>
          <div className='shop-section-two-item-two space-y-3'>
            <p className='shop-section-two-item-two-p '>Product Name</p>
            <p className='shop-section-two-item-two-pp font-medium '>Product Price</p>
          </div>
        </div>
        
        
      </div>

    </div>
  )
}

export default SkeletonLoader;