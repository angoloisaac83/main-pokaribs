import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6"; 
import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import logo from '../assets/Screenshot_20241114-102016_Gallery.jpg'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Column 1: Logo & Info */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-yellow-400"><img src={logo} alt="" className="w-[140px] object-contain" /></h2>
            <p className="mt-2 text-gray-400">Your favorite food delivered fast and fresh.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center text-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-yellow-400">Menu</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>
          <hr className='w-full h-[1px] bg-slate-500 hidden mobile:flex'/>
          {/* Column 2: Quick Links */}
          <div className="flex flex-col mobile:w-full w-[150px] items-center text-center mobile:text-center gap-2 mobile:items-center space-y-2">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400">Phone: +2348029902223</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400">Address: <br /> No.16 Nwanonye street off Asaba Benin express way by KIA motors, DLA road, Asaba Nigeria</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>
          <hr className='w-full h-[1px] bg-slate-500 hidden mobile:flex'/>
          {/* Column 3: Social Media */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="text-gray-300 text-2xl hover:text-yellow-400">
              <FaSquareFacebook />
              </Link>
              <Link to="https://instagram.com" className="text-gray-300 text-2xl hover:text-yellow-400">
              <AiFillInstagram />
              </Link>
              <Link to="https://twitter.com" className="text-gray-300 text-2xl hover:text-yellow-400">
              <BsTwitterX />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">&copy; 2024 Pokaribs Native Kitchen & Lounge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
