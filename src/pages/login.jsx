import React, { useState } from 'react';
// import { auth } from '../firebase'; // Replace with your Firebase config path
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/download.png'
import imgs from '../assets/pexels-donaldtong94-189296.jpg';
const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await signInWithEmailAndPassword(auth, email, password);
    //         navigate('/'); // Navigate to homepage on successful login
    //     } catch (error) {
    //         console.error('Error logging in:', error.message);
    //     }
    // };

    return (
        <div className="min-h-screen flex mobile:text-white items-center  justify-between w-full">
        <head>
          <title>Pokaribs-Login Page</title>
        </head>
            <img className="w-[50%] h-screen mobile:w-full object-cover" src={imgs} alt="" />
            <div className="bg-slate-300 mobile:absolute mobile:w-full mobile:bg-[rgba(0,0,0,0.34)] p-8 h-screen flex flex-col items-center justify-center shadow-md w-[50%]">
                <h2 className="text-3xl gap-3 flex items-center justify-center font-extrabold mb-6 text-center text-gray-800">Login to <span className='text-yellow-500'><img className='w-[120px]' src={logo} alt="" /></span></h2>
                <form >
                    <input
                        type="email"
                        placeholder="Email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        className="w-full mobile:bg-[rgba(0,0,0,0.34)] mobile:placeholder:text-white p-3 mb-4 border rounded-sm focus:outline-none focus:border-green-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        className="w-full mobile:bg-[rgba(0,0,0,0.34)] mobile:placeholder:text-white p-3 mb-4 border rounded-sm focus:outline-none focus:border-green-500"
                    />
                        <span className='py-[5px] flex h-fit w-fit items-center justify-center gap-2'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="input">Remeber me</label>
                        </span>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-sm font-semibold hover:bg-green-600 transition-colors"
                    >
                        Log In
                    </button>
                </form>
                <p className="mt-4 text-sm text-center">
                    Don't have an account? <Link to="/register" className="text-yellow-600 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
