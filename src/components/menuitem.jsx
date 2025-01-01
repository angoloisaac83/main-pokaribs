import React, { useContext } from 'react';
import { CartContext } from '../context/cartcontext';
import { FaShoppingCart } from 'react-icons/fa';
import {addToCart} from '../context/cartaddandremove'
import { Link } from 'react-router-dom';

const MenuItem = ({ id, name, price, image, description }) => {
    // const { addToCart } = useCont/ext(CartContext);
    let data = {'id':id, 'name':name,'image':image, 'description':description, 'price':price} ;

    const handleAddToCart = () => {
        console.log("Adding to cart:", { id, name, price });
        addToCart(id,image, name, price);
    };
    return (
        <div className="bg-white rounded-lg shadow-2xl p-4 text-center">
            <img className="rounded-md w-full h-[200px] object-cover" src={image} alt={name} />
            <h3 className="text-xl font-semibold mb-2 pt-3">{name}</h3>
            <p className="text-gray-600 overflow-y-scroll h-[85px] mb-2"><b>Description:</b> {description}</p>
            <p className="text-lg font-bold text-yellow-600 mb-4">₦{price}</p>
            <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
                <button
                    onClick={handleAddToCart}
                    className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <FaShoppingCart className="mr-1" />
                    Add to Cart
                </button>
                <button
                    className="bg-black flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    <Link to='/buy' state={{data}}>Buy Now</Link>
                </button>
            </div>
        </div>
    );
};

export default MenuItem;
