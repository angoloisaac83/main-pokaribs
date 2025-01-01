import React, { useContext } from 'react';
import { CartContext } from '../context/cartcontext';

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <p className="text-yellow-600">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
