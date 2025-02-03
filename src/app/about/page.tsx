import React from 'react'
import Navbar from '@/components/Navbar';
import Navbar2 from '@/components/Navbar2';
import Productsafety from '@/components/Productsafety';
import Image from 'next/image';
import rec68 from '../../../public/Rectangle 68.png';
import { FaUserLarge } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import rec682 from '../../../public/Rectangle 68 (1).png';
import rec683 from '../../../public/Rectangle 68 (2).png';
import { CiSearch } from "react-icons/ci";
import rec69 from '../../../public/Rectangle 69.png';
import rec691 from '../../../public/Rectangle 69 (1).png';
import rec692 from '../../../public/Rectangle 69 (2).png';
import rec693 from '../../../public/Rectangle 69 (3).png';
import rec694 from '../../../public/Rectangle 69 (4).png';

function page() {
  return (
    <div>
      <Navbar />
      <Navbar2 name='Blog' name1='Blog' />


      <div className='blog'>

        <div className="blog-one   space-y-[50px]">

          <div className="blog-one-section-one    space-y-3 ">
            <div>
              <Image className="blog-one-section-one-img" src={rec68} alt='' />
            </div>
            <div className="blog-one-section-one-content  space-y-3">
              <div className="blog-one-section-one-content-iconss">
                <div className="blog-one-section-one-content-icon">
                  <FaUserLarge color='#9F9F9F' />
                  <p className='text-[#9F9F9F]'>Admin</p>
                </div>
                <div className="blog-one-section-one-content-icon">
                  <FaCalendar color='#9F9F9F' />
                  <p className='text-[#9F9F9F]'>14 Oct 2022</p>
                </div>
                <div className="blog-one-section-one-content-icon">
                  <FaTag color='#9F9F9F' />
                  <p className='text-[#9F9F9F]'>Wood</p>
                </div>
              </div>
              <h2 className="blog-one-section-one-content-h font-medium">Going all-in with millennial design</h2>
              <p className="blog-one-section-one-content-p text-[#9F9F9F] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <span className='blog-one-section-one-content-read  border-b-[1px] border-black w-[77] text-center pb-[6]'>Read more</span>
            </div>
          </div>


          <div className="blog-one-section-one space-y-3">
            <div>
              <Image className="blog-one-section-one-img" src={rec682} alt='' />
            </div>
            <div className="blog-one-section-one-content  space-y-3">
              <div className="blog-one-section-one-content-iconss">
                <div className="blog-one-section-one-content-icon">
                  <FaUserLarge color='#9F9F9F' />
                  <p className='text-[#9F9F9F]'>Admin</p>
                </div>
                <div className="blog-one-section-one-content-icon">
                  <FaCalendar color='#9F9F9F' />
                  <p className='text-[#9F9F9F]'>14 Oct 2022</p>
                </div>
                <div className="blog-one-section-one-content-icon">
                  <FaTag color='#9F9F9F' />
                  <span className='text-[#9F9F9F]'>Wood</span>
                </div>
              </div>
              <h2 className="blog-one-section-one-content-h font-medium">Going all-in with millennial design</h2>
              <p className="blog-one-section-one-content-p text-[#9F9F9F] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <p className='blog-one-section-one-content-read  border-b-[1px] border-black w-[77] text-center pb-[6]'>Read more</p>
            </div>
          </div>



          <div className="blog-one-section-one space-y-3">
            <div>
              <Image className="blog-one-section-one-img" src={rec683} alt='' />
            </div>
            <div className="blog-one-section-one-content  space-y-3">
              <div className="blog-one-section-one-content-iconss">
                <div className="blog-one-section-one-content-icon">
                  <FaUserLarge color='#9F9F9F' />
                  <p className='text-[#9F9F9F]'>Admin</p>
                </div>
                <div className="blog-one-section-one-content-icon">
                  <FaCalendar color='#9F9F9F' />
                  <p className='text-[#9F9F9F]'>14 Oct 2022</p>
                </div>
                <div className="blog-one-section-one-content-icon">
                  <FaTag color='#9F9F9F' />
                  <p className='text-[#9F9F9F]'>Wood</p>
                </div>
              </div>
              <h2 className="blog-one-section-one-content-h font-medium">Going all-in with millennial design</h2>
              <p className="blog-one-section-one-content-p text-[#9F9F9F] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <span className='blog-one-section-one-content-read  border-b-[1px] border-black w-[77] text-center pb-[6]'>Read more</span>
            </div>
          </div>


        </div>


        <div className='blog-two'>

          <div className='blog-two-section-one space-y-[43px]'>

            <div className='blog-two-section-one-input-div  rounded-md border-[1px] border-[#9f9f9f]'>
              <input className='blog-two-section-one-input' type="text" />
              <CiSearch size={24} />
            </div>
            <div className='blog-two-section-one-catogories    space-y-10'>
              <h3 className='blog-two-section-one-catogories-h  font-medium'>Catogories</h3>
              <div className='blog-two-section-one-catogories-p'>
                <div>Craft </div>
                <div>2</div>
              </div>
              <div className='blog-two-section-one-catogories-p'>
                <div>Design </div>
                <div>8</div>
              </div>
              <div className='blog-two-section-one-catogories-p'>
                <div>Handmade </div>
                <div>7</div>
              </div>
              <div className='blog-two-section-one-catogories-p'>
                <div>Interior </div>
                <div>1</div>
              </div>
              <div className='blog-two-section-one-catogories-p'>
                <div>Wood </div>
                <div>6</div>
              </div>

            </div>
          </div>

          <div className='blog-two-section-two space-y-[29px]'>
            <div  className='blog-two-section-two-content space-y-[39px]'>
              <h3 className='blog-two-section-two-h font-medium'>Recents</h3>

              <div className='blog-two-section-two-posts'>
                <Image className='blog-two-section-two-posts-img' src={rec69} alt='img' />
                <div className='blog-two-section-two-ps'>
                  <p className='blog-two-section-two-p'>Going all-in with millennial design</p>
                  <p className='blog-two-section-two-pp text-[#9f9f9f]'>03 Aug 2022</p>
                </div>
              </div>

              <div className='blog-two-section-two-posts'>
                <Image className='blog-two-section-two-posts-img' src={rec691} alt='img' />
                <div className='blog-two-section-two-ps'>
                  <p className='blog-two-section-two-p '>Exploring new ways of decorating</p>
                  <p className='blog-two-section-two-pp text-[#9f9f9f]'>03 Aug 2022</p>
                </div>
              </div>

              <div className='blog-two-section-two-posts'>
                <Image className='blog-two-section-two-posts-img' src={rec692} alt='img' />
                <div className='blog-two-section-two-ps'>
                  <p className='blog-two-section-two-p'>Handmade pieces that took time to make</p>
                  <p className='blog-two-section-two-pp text-[#9f9f9f]'>03 Aug 2022</p>
                </div>
              </div>

              <div className='blog-two-section-two-posts'>
                <Image className='blog-two-section-two-posts-img' src={rec693} alt='img' />
                <div className='blog-two-section-two-ps'>
                  <p className='blog-two-section-two-p'>Modern home in Milan</p>
                  <p className='blog-two-section-two-pp text-[#9f9f9f]'>03 Aug 2022</p>
                </div>
              </div>

              <div className='blog-two-section-two-posts'>
                <Image className='blog-two-section-two-posts-img' src={rec694} alt='img' />
                <div className='blog-two-section-two-ps'>
                  <p className='blog-two-section-two-p'>Colorful office redesign</p>
                  <p className='blog-two-section-two-pp text-[#9f9f9f]'>03 Aug 2022</p>
                </div>
              </div>
            </div>


          </div>


        </div>

      </div>
      <Productsafety />
    </div>
  )
}

export default page;