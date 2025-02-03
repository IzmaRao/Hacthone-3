import Image from 'next/image';
import table1 from '../../public/Granite square side table 1.png';
import table2 from '../../public/Cloud sofa three seater + ottoman_3 1.png';
function Sidetables() {
  return (
    <div className="sidetbale bg-[#f4f4f4] mx-auto my-auto ">


            <div className='sidetbale-section-one'>
            <Image className='sidetbale-section-one-img' width={605} height={562} src={table1} alt="table 1"/>   
            <div className='sidetbale-section-one-content '>
                <h1 className='sidetbale-section-one-content-h font-medium'>Side table</h1>
                <p className='sidetbale-section-one-content-p  border-b-2 border-black'>View More</p>
            </div>
            </div>

            <div className='sidetbale-section-one '>
            <Image className='sidetbale-section-one-img' width={605} height={562} src={table2} alt="table 2"/>   
            <div className='sidetbale-section-one-content'>
                <h1 className='sidetbale-section-one-content-h font-medium'>Side table</h1>
                <p className='sidetbale-section-one-content-p border-b-2 border-black'>View More</p>
            </div>
            </div>


    </div>
  )
}

export default Sidetables;