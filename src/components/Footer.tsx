import React from 'react'

function Footer() {
  return (
    <div className='footer  '>
        <div className='footer-section mx-auto space-y-[48px]'>


       <div className='footer-section-one font-medium '>
        <div className='footer-section-one-one   font-normal text-[#9F9F9F] '>
            <p>400 University Drive Suite 200 Coral </p>
            <p>Gables,</p>
            <p>FL 33134 USA</p>
        </div>

        <div className='footer-section-one-two '>


        <ul className='footer-section-one-ul-one space-y-[55px]'>
            <li className=' text-[#9F9F9F]'>Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ul className='footer-section-one-ul-two space-y-[55px]'>
            <li className=' text-[#9F9F9F]'>Help</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
        </ul>
        <div className='footer-section-one-ul space-y-[53px]'>
            <ul><li className=' text-[#9F9F9F]'>Newletter</li></ul>
            <div className='footer-section-one-ul-input-div  '>
            <input className='footer-section-one-ul-input font-normal text-[#9F9F9F] border-b-[1.50px] pb-1 border-[#000]' placeholder='Enter Your Email Address' type="text" />
            <button className='border-b-[1.50px] pb-1 border-[#000]'>SUBSCRIBE</button>
            </div>
        </div>
        </div>
        </div>

    <div className='pt-8'>
        <p className='text-[#9F9F9F] pt-[35px] border-t-[1px] border-[#D9D9D9]'>2022 Meubel House. All rights reserved</p>
    </div>
    </div>
    </div>
  )
}

export default Footer;