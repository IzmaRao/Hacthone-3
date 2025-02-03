import Image from 'next/image'
import rec13 from '../../public/Rectangle 13.png';
import rec14 from '../../public/Rectangle 14.png';
import rec15 from '../../public/Rectangle 15.png';
import uicalender from '../../public/uil_calender.png'
import { FaRegClock } from "react-icons/fa";
function Ourblogs() {
  return (
    <div className='ourblogs justify-items-center  bg-white'>

        <div className='ourblogs-section-one  space-y-[13px]'>
            <h2 className='ourblogs-section-one-h  font-medium'>Our Blogs</h2>
            <p className='ourblogs-section-one-p font-medium text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection</p>
        </div>



        <div className='ourblogs-section-two '>


        <div className='ourblogs-section-two-blog '>
            <div className='rounded blogimg'>
                <Image width={393} height={393} src={rec13} alt='rectangle 1'/>
            </div>
            <div className='ourblogs-section-two-blog-two space-y-[20px]'>
                <p className='ourblogs-section-two-blog-p'>Going all-in with millennial design</p>
                <span className='ourblogs-section-two-blog-span font-medium pb-2 border-b-2 border-black'>Read More</span>
                <div className='ourblogs-section-two-blog-div-pp space-x-[19px] '>
                    <p className='ourblogs-section-two-blog-pp space-x-[10px] font-[100]'><FaRegClock/> <span>5 min</span></p>
                    <p className='ourblogs-section-two-blog-pp space-x-[10px] font-[100]'><Image src={uicalender} alt='icon calender'/><span>12<sup>th</sup> oct 2022</span></p>
                </div>
            </div>
        </div>

        <div className='ourblogs-section-two-blog    '>
            <div className='rounded blogimg'>
                <Image width={393} height={393} src={rec14} alt='rectangle 1'/>
            </div>
            <div className='ourblogs-section-two-blog-two space-y-[20px]'>
            <p className='ourblogs-section-two-blog-p pb-3'>Going all-in with millennial design</p>
            <span className='ourblogs-section-two-blog-span font-medium pb-2 border-b-2 border-black'>Read More</span>
            <div className='ourblogs-section-two-blog-div-pp space-x-[19px] '>
            <p className='ourblogs-section-two-blog-pp space-x-[10px] font-[100]'><FaRegClock/> <span>5 min</span></p>
            <p className='ourblogs-section-two-blog-pp space-x-[10px] font-[100]'><Image src={uicalender} alt='icon calender'/><span>12<sup>th</sup> oct 2022</span></p>
            </div>
            </div>
        </div>

        <div className='ourblogs-section-two-blog  '>
            <div className='rounded blogimg'>
                <Image width={393} height={393} src={rec15} alt='rectangle 1'/>
            </div>
            <div className='ourblogs-section-two-blog-two space-y-[20px]'>
            <p className='ourblogs-section-two-blog-p pb-3'>Going all-in with millennial design</p>
            <span className='ourblogs-section-two-blog-span font-medium pb-2 border-b-2 border-black'>Read More</span>
            <div className='ourblogs-section-two-blog-div-pp space-x-[19px] '>
            <p className='ourblogs-section-two-blog-pp space-x-[10px] font-[100]'><FaRegClock/> <span>5 min</span></p>
            <p className='ourblogs-section-two-blog-pp space-x-[10px] font-[100]'><Image src={uicalender} alt='icon calender'/><span>12<sup>th</sup> oct 2022</span></p>
                </div>
            </div>
        </div>



        </div>

 
            <p className='ourblogs-allposts font-medium border-b-2 border-black'>View All Post</p>



    </div>
  )
}

export default Ourblogs;