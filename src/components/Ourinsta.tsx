import Image from 'next/image';
import bgimg from '../../public/Rectangle 17.png'
function Ourinsta() {
  return (
    <div className='ourinsta '>
        <div className='ourinsta-img'>
            <Image src={bgimg} alt=''/>
        </div>
        <div className='ourinsta-content space-y-[18px] '>
            <h2 className='ourinsta-content-h font-bold'>Our Instagram</h2>
            <p className='ourinsta-content-p'>Follow our store on Instagram</p>
            <button className='ourinsta-content-btn shadow-x rounded-[50px] bg-[#FAF4F4]'>Follow Us</button>
        </div>        
    </div>
  )
}

export default Ourinsta;