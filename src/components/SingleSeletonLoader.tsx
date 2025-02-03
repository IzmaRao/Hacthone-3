'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Image, { StaticImageData } from 'next/image';
import { FaGreaterThan } from "react-icons/fa6";
import stars from '../../public/Group 88.png';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import soffa1 from '../../public/Cloud sofa three seater + ottoman_2 1.png';
import soffa2 from '../../public/Cloud sofa three seater + ottoman_1 1.png';
import Relatedproducts from './Relatedproducts';
import img1 from '../../public/Outdoor sofa set 2.png';
import img2 from '../../public/Outdoor sofa set_2 1.png';
import img3 from '../../public/Stuart sofa 1.png';
import img4 from '../../public/Maya sofa three seater (1) 1.png';


const SingleSeletonLoader = () => {

    return (
        <div>
            <Navbar />
                <div id="overley">
                    <div className='detailpage  space-x-[25px] custom-tiny:text-sm custom-mini:text-[12px]'><span className='text-[#9f9f9f]'>Home</span> <span><FaGreaterThan size={13} /></span> <span className='text-[#9f9f9f]'>Shop</span> <span><FaGreaterThan size={13} /></span> <span>{'|'}</span> <span>product name</span></div>

                    <div className='detailpage-section-one  xl:flex lg:flex md:block custom-xs:block custom-xxs:block custom-tiny:block custom-mini:block'>

                        <div className='detail-product-images 2xl:flex lg:flex md:flex custom-xs:flex custom-xxs:flex custom-tiny:flex custom-mini:flex space-x-4'>
                            <div className='detailpage-section-one-detailimages    space-y-[32px]'>
                                <div className='detailpage-section-one-detailimages-one w-[72] h-[80]  bg-[#FFF9E5]'>
                                    <Image width={83} height={55} src={img1} alt="" />
                                </div>
                                <div className='detailpage-section-one-detailimages-two w-[72] h-[80]  bg-[#FFF9E5]'>
                                    <Image width={99} height={66} src={img2} alt="" />
                                </div>
                                <div className='detailpage-section-one-detailimages-three w-[72] h-[80]  bg-[#FFF9E5]'>
                                    <Image width={77} height={115} src={img3} alt="" />
                                </div>
                                <div className='detailpage-section-one-detailimages-four w-[72] h-[80]  bg-[#FFF9E5]'>
                                    <Image width={74} height={44} src={img4} alt="" />
                                </div>
                            </div>
                            <div className='detailpage-section-one-imgbig bg-[#FFF9E5]'>
                            </div>
                        </div>

                        <div className='detailpage-section-one-pro-content space-y-[18px] custom-mini:space-x-3'>
                            <h1 className='detailpage-section-one-pro-content-h   custom-xs:text-[24px] custom-tiny:text-xl custom-mini:text-[20px]'>product name</h1>
                            <p className='detailpage-section-one-pro-content-price  custom-xs:text-sm custom-tiny:text-sm custom-mini:text-base font-medium text-[#9f9f9f]'>Rs. product price</p>
                            <div className='detailpage-section-one-pro-content-review custom-mini:space-x-2 custom-mini:text-[12px]' >
                                <Image src={stars} alt='' />
                                <p className='text-[#9f9f9f]'>|</p>
                                <p>% Customer Review</p>
                            </div>
                            <p className='detailpage-section-one-pro-content-description  lg:w-[360] md:w-[360] md:text-sm custom-mini:text-[12px] custom-mini:w-[280] custom-tiny:text-[13px]  font-normal'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

                            <div className='detailpage-section-one-pro-content-sizes space-y-[16px]'>
                                <p className='text-sm text-[#9f9f9f] custom-mini:text-[12px]'>Size</p>
                                <div className='flex gap-[16px]'>
                                    <button className='w-[30px] h-[30px] rounded-[5px] bg-[#FBEBB5] text-[13px] text-center'>L</button>
                                    <button className='w-[30px] h-[30px] rounded-[5px] bg-[#f4f4f4] text-[13px] text-center'>XL</button>
                                    <button className='w-[30px] h-[30px] rounded-[5px] bg-[#f4f4f4] text-[13px] text-center'>SS</button>
                                </div>
                            </div>

                            <div className='detailpage-section-one-pro-content-colors space-y-[16px]'>
                                <p className='text-sm text-[#9f9f9f] custom-mini:text-[12px]'>Color</p>
                                <div className='flex gap-[16px]'>
                                    <button className='w-[30px] h-[30px] rounded-full bg-[#816DFA] text-[13px] text-center'></button>
                                    <button className='w-[30px] h-[30px] rounded-full bg-[#000000] text-[13px] text-center'></button>
                                    <button className='w-[30px] h-[30px] rounded-full bg-[#CDBA7B] text-[13px] text-center'></button>
                                </div>
                            </div>

                            <div className='detailpage-section-one-pro-content-cart border-b-[1px] border-[#D9D9D9] custom-mini:text-[12px]'>

                                <div className='detailpage-section-one-pro-content-cart-one px-3 custom-tiny:justify-between font-medium border-[#9f9f9f] border-[1px] rounded-[15px]'>
                                    <button>+</button>
                                    <p>0</p>
                                    <button>-</button>
                                </div>


                                <button className='detailpage-section-one-pro-content-cart-two border-[#9f9f9f] border-[1px] rounded-[15px]'>
                                    <div> Add To Cart</div>
                                </button>
                            </div>

                            <div className='custom-mini:text-[13px]'>
                                <table>
                                    <tbody>
                                        <tr className='text-[#9f9f9f] space-y-3'>
                                            <td className='pr-3'>SKU</td>
                                            <td>:</td>
                                            <td className='pl-3'>SS001</td>
                                        </tr>
                                        <tr className='text-[#9f9f9f] space-y-3'>
                                            <td className='pr-3'>Catogory </td>
                                            <td>:</td>
                                            <td className='pl-3'>Sofas</td>
                                        </tr>
                                        <tr className='text-[#9f9f9f] space-y-3'>
                                            <td className='pr-3'>Tags</td>
                                            <td>:</td>
                                            <td className='pl-3'>Sofa, Chair, Home, Shop</td>
                                        </tr>
                                        <tr className='space-y-3'>
                                            <td className='text-[#9f9f9f] pr-3 pt-2'>Share</td>
                                            <td className='text-[#9f9f9f] pt-2'>:</td>
                                            <td className='flex space-x-5  pl-1 '><FaFacebook /><FaLinkedin /><AiFillTwitterCircle /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>



                    <div className='detailpage-section-one-product-deatails space-y-12'>
                        <div className='detailpage-section-one-pro-content-deatails-list space-x-[13px] 2xl:space-x-[43px]  custom-tiny:space-x-[12px] custom-mini:space-x-1 '>
                            <p className='2xl:text-2xl xl:text-xl lg:text-xl md:text-lg custom-xs:text-base custom-xxs:text-base custom-tiny:text-[14px] custom-mini:text-[13px] text-black'>Description</p>
                            <p className='2xl:text-2xl xl:text-xl lg:text-xl md:text-lg custom-xs:text-base custom-xxs:text-base custom-tiny:text-[14px] custom-mini:text-[13px] text-[#9f9f9f]'>Additional Information</p>
                            <p className='2xl:text-2xl xl:text-xl lg:text-xl md:text-lg custom-xs:text-base custom-xxs:text-base custom-tiny:text-[14px] custom-mini:text-[13px] text-[#9f9f9f]'>Reviews[5]</p>
                        </div>
                        <div className='detailpage-section-one-pro-content-deatails-paras xl:w-[1100px] lg:w-[900px] md:w-[690px] custom-xxs:w-[400px] custom-tiny:w-[320] custom-mini:w-[300]  custom-mini:text-[12px] text-[#9f9f9f]'>
                            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road</p>
                            <br />
                            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                        </div>
                        <div className='detailpage-section-one-pro-content-deatails-bigimgs 2xl:flex xl:flex xl:space-x-4 lg:flex 2xl:space-x-[29px]'>
                            <div className='detailpage-section-one-pro-content-deatails-bigimgs-one bg-[#FFF9E5]'>
                                <Image src={soffa1} alt='soffa1' />
                            </div>
                            <div className='detailpage-section-one-pro-content-deatails-bigimgs-one bg-[#FFF9E5]'>
                                <Image width={605} height={348} src={soffa2} alt='soffa2' />
                            </div>
                        </div>
                    </div>


                    <div>
                        <Relatedproducts />
                    </div>

                </div>
        </div>
    )
}

export default SingleSeletonLoader;