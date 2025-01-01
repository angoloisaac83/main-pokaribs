// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/cartcontext';
import { TbMenuDeep } from "react-icons/tb";
import logo from '../assets/download.png'
const Navbar = () => {
    const [totalItems,setTotalItems] = useState()
    const { cartItems } = useContext(CartContext);
    setInterval(() => {
        cartNum()
    }, 100);
    function cartNum(){
        setTotalItems(JSON.parse(localStorage.getItem('cartItem')).length);
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <nav className="bg-black z-[100] shadow-xl fixed top-0 left-0 w-full h-fit text-white p-2">
            <div className="container flex justify-between items-center">
                <h2 className="text-3xl font-bold text-yellow-400"><Link to="/"><img src={logo} className='w-[150px] object-contain h-[60px]' alt="" /></Link></h2>
                <ul className="flex mobile:hidden space-x-6 items-center">
                    <li><Link to="/" className="hover:text-yellow-500 hover:before:w-[100px] hover:before:h-[2px] hover:before:bg-white">Home</Link></li>
                    <li><Link to="/category" className="hover:text-yellow-500 hover:underline">Menu</Link></li>
                    <li><Link to="/contact" className="hover:text-yellow-500 hover:underline">Contact</Link></li>
                    <li><Link to="/about" className="hover:text-yellow-500 hover:underline">About Us</Link>
                    </li>
                    </ul>
                    <span className="flex mobile:hidden gap-3 items-center justify-center w-fit h-fit p-3">
                                      <li>
                        <Link to="/cart" className="bg-yellow-500 px-4 py-2 rounded-sm flex items-center">
                            <FaShoppingCart className="mr-1 text-white " />
                            Cart ({totalItems})
                        </Link>
                    </li>
                    </span>
                    <TbMenuDeep onClick={toggleMenu} className='text-3xl font-bold hidden mobile:flex' />
                    <div
                        className={`flex text-xl flex-col text-start px-3 py-5 w-[70%] h-screen fixed top-0 left-0 bg-white shadow-xl text-black items-start justify-between transition-transform duration-300 ${
                            isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                        >                        <ul className="flex flex-col gap-5 text-left space-x-6 items-start justify-start">
                            <li><Link to="/" className="hover:text-yellow-500 hover:underline">Home</Link></li>
                            <li><Link to="/category" className="hover:text-yellow-500 hover:underline">Menu</Link></li>
                            <li><Link to="/contact" className="hover:text-yellow-500 hover:underline">Contact</Link></li>
                            <li><Link to="/about" className="hover:text-yellow-500 hover:underline">About Us</Link></li>
                        </ul>
                        <span className="flex flex-col gap-3 items-center justify-center w-fit h-fit p-3">
                                        <li>
                            <Link to="/cart" className="hover:text-yellow-500 flex items-center">
                                <FaShoppingCart className="mr-1 text-yellow-500" />
                                Cart ({totalItems})
                            </Link>
                        </li>   <br />
                        </span>
                    </div>
            </div>
        </nav>
    );
};

export default Navbar;
