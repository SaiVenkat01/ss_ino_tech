import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/logo_no_bg_crop.png'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="Footer" className='flex justify-around text-black p-10 md:p-12 items-center'>
      <div>
      <span className="text-xl font-bold tracking-wide">
              <img className='w-100 h-30' src={logo} alt="SS Ino Tech Logo" />
            </span>
      </div>
        <nav>
        <ul>
        <a href='#Home'><li className="text-[#52BF04] hover:text-blue-500 text-2xl">Home</li></a>
        <a href='#About'><li className="text-[#52BF04] hover:text-blue-500 text-2xl">Products</li></a>
        <a href='#Dealership'><li className="text-[#52BF04] hover:text-blue-500 text-2xl">Sustainability</li></a>
      </ul>
        </nav>
        <nav>
        <ul>
        <a href='#Home'><li className="text-[#52BF04] hover:text-blue-500 text-2xl">Return Policy</li></a>
        <a href='#About'><li className="text-[#52BF04] hover:text-blue-500 text-2xl">Privacy & Policy</li></a>
        <a href='#Dealership'><li className="text-[#52BF04] hover:text-blue-500 text-2xl">Terms & Conditions</li></a>
      </ul>
      </nav>
        <div className="flex items-center gap-4">
                <a href="#"><FaFacebookF className="text-blue-400 text-2xl hover:text-blue-500" /></a>
                <a href="#"><FaInstagram className="text-blue-400 text-2xl hover:text-blue-500" /></a>
                <a href="#"><FaWhatsapp className="text-blue-400 text-2xl hover:text-blue-500" /></a>
                <a href="#"><FaYoutube className="text-blue-400 text-2xl hover:text-blue-500" /></a>
              </div>
    </div>
  )
}

export default Footer