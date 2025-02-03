'use client';
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';
import icon1 from '../../public/mdi_account-alert-outline.png';
import icon2 from '../../public/akar-icons_search.png';
import icon3 from '../../public/akar-icons_heart.png';
import icon4 from '../../public/ant-design_shopping-cart-outlined.png';
import Link from 'next/link';
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='navbar '>
      <ul className='navbarlist '>
        <Link href="/"><li>Home</li></Link>
        <Link href="/shop/"><li>Shop</li></Link>
        <Link href="/about/"><li>About</li></Link>
        <Link href="/contact/"><li>Contact</li></Link>
      </ul>

      <div className="navbar-toggle">
        {menuOpen ? (
          <FaTimes size={24} className="cursor-pointer" onClick={handleOnClick} />
        ) : (
          <FaBars size={24} className="cursor-pointer" onClick={handleOnClick} />
        )}
      </div>

      {menuOpen && (
        <ul className="navbar-list-two">
          <Link href="/"><li>Home</li></Link>
          <Link href="/shop/"><li>Shop</li></Link>
          <Link href="/about/"><li>About</li></Link>
          <Link href="/contact/"><li>Contact</li></Link>
        </ul>
      )}


      <div className='navbaricons space-x-[45px]'>
        <div>

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        {/* <div>
                <Image src={icon2} alt='icon2'/>
            </div> */}
        <div>
          <Link href="/wishlist/"><Image src={icon3} alt='icon3' /></Link>
        </div>
        <div>
          <Link href="/cart/"><Image src={icon4} alt='icon4' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;