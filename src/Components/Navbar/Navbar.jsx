import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo_no_bg_crop.png'

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-2 py-2 md:px-20">

      {/* Logo */}
      <span className="text-xl font-bold tracking-wide">
        <img className='w-65 h-18' src={logo} alt="SS Ino Tech Logo" />
      </span>
      
      {/* Navigation Links */}
      <ul className={`${menu ? "block" : "hidden"} md:flex gap-6 font-semibold`}>
        <a href='#Home'><li className="text-[#52BF04] hover:text-blue-500">Home</li></a>
        <a href='#About'><li className="text-[#52BF04] hover:text-blue-500">Our Business</li></a>
        <a href='#Dealership'><li className="text-[#52BF04] hover:text-blue-500">Products</li></a>
        <a href='#Sustainability'><li className="text-[#52BF04] hover:text-blue-500">Sustainability</li></a>
        <a href='#ContactUs'><li className="text-[#52BF04] hover:text-blue-500">Contact Us</li></a>
      </ul>

      
      {/* Social Media Icons & Shop Button */}

      <div className="flex items-center gap-4">
        <a href="#"><FaFacebookF className="text-blue-400 text-lg hover:text-blue-500" /></a>
        <a href="#"><FaInstagram className="text-blue-400 text-lg hover:text-blue-500" /></a>
        <a href="#"><FaWhatsapp className="text-blue-400 text-lg hover:text-blue-500" /></a>
        <a href="#"><FaYoutube className="text-blue-400 text-lg hover:text-blue-500" /></a>
      </div>
      
      {/* Mobile Menu Toggle */}
      {showMenu ? (
        <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 text-white' onClick={() => {
          openMenu(!menu);
          setShowMenu(!showMenu);
        }}/>
      ) : (
        <RiCloseLine size={30} className='md:hidden absolute right-10 top-6 text-white' onClick={() => {
          openMenu(!menu);
          setShowMenu(!showMenu);
        }}/>
      )}
    </nav>
  );
};

export default Navbar;


