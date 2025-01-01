import React, { useState } from 'react';
import { CartContext } from '../context/cartcontext';
import { removeItemCart, emptyCart } from '../context/cartaddandremove';
import { Link } from 'react-router-dom';
import { MdAddCircle } from "react-icons/md";
import { FaCircleMinus } from "react-icons/fa6";

const Cart = () => {
    const [data, setData] = useState({});
    const totalItems = JSON.parse(localStorage.getItem('cartItem')) || []; // Provide fallback to empty array

    return (
        <div className="cart flex flex-col items-center justify-center w-full h-fit py-5 px-5">
          <head>
            <title>Pokaribs - Cart</title>
          </head>
            <h2 className="text-2xl text-center py-5">Your Cart</h2>
            <br />
            <p>Total Items: {totalItems.length}</p>
            <br />
            <section className="grid px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {totalItems.map((item, index) => {
                    const [quantity, setQuantity] = useState(1); // Independent quantity for each item
                    const addq = () => {
                        setQuantity(prevQuantity => prevQuantity + 1);
                    };
                    const minus = () => {
                        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
                    };
                    const price = Number((item?.price || '0').toString().replace(/,/g, '')) * quantity;

                    return (
                        <div key={index} className="bg-white flex w-[300px] flex-col items-center justify-center rounded-lg shadow-2xl p-4 text-center">
                            <img className="rounded-md w-full h-[200px] object-cover" src={item.image || 'placeholder.png'} alt={item.name || 'Product'} />
                            <h3 className="text-xl font-semibold mb-2 pt-3">{item.name || 'Unnamed Product'}</h3>
                            <p className="text-lg font-bold text-yellow-600 mb-4">₦{price.toLocaleString()}</p>
                            <span className="pt-4 flex gap-2 items-center w-fit h-fit justify-center">
                                Quantity:
                                <span className="flex text-[20px] items-center justify-center w-fit h-fit gap-2">
                                    <FaCircleMinus onClick={minus} className="cursor-pointer" />
                                    {quantity}
                                    <MdAddCircle onClick={addq} className="cursor-pointer" />
                                </span>
                            </span>
                            <br />
                            <div className="flex w-full h-fit px-3 py-2 justify-between items-center">
                                <button
                                    className="bg-black capitalize flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                                    onClick={() => removeItemCart(item.id, item.name, item.price)}
                                >
                                    Delete Item
                                </button>
                                <button
                                    onClick={() => setData({ name: item.name, image: item.image, description: item.description || '', price })}
                                    className="bg-black capitalize flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                                >
                                    <Link to="/buy" state={{ data }}>Check Out</Link>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </section>
            <br /><br /><br />
            <button
                onClick={emptyCart}
                disabled={totalItems.length < 1}
                className={`bg-black capitalize flex items-center text-[13px] justify-center gap-2 text-white px-4 py-2 rounded transition-colors ${
                    totalItems.length < 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
                }`}
            >
                Empty Cart
            </button>
        </div>
    );
};

export default Cart;
