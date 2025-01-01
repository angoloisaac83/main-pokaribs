import React, { useState } from 'react';
// import { auth, db } from '../firebase'; // Update with the correct path to your Firebase config file
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { setDoc, doc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/download.png'
import imgs from '../assets/pexels-donaldtong94-189296.jpg';

const Register = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [username, setUsername] = useState('');
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     setError(null); // Reset error state
    //     if (!username || !email || !password) {
    //         setError("All fields are required");
    //         return;
    //     }
    //     setLoading(true); // Show loading state
    //     try {
    //         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //         // Save user data to Firestore
    //         await setDoc(doc(db, 'users', userCredential.user.uid), {
    //             username,
    //             email
    //         });
    //         navigate('/login'); // Redirect to login after registration
    //     } catch (error) {
    //         setError(error.message); // Display Firebase error message
    //         console.error('Error signing up:', error);
    //     } finally {
    //         setLoading(false); // Hide loading state
    //     }
    // };

    return (
        <div className="min-h-screen flex mobile:text-white items-center  justify-between w-full">
        <head>
          <title>Pokaribs-Registration Page</title>
        </head>
        <img className="w-[50%] h-screen mobile:w-full object-cover" src={imgs} alt="" />
        <div className="bg-slate-300 mobile:absolute mobile:w-full mobile:bg-[rgba(0,0,0,0.34)] p-8 h-screen flex flex-col items-center justify-center shadow-md w-[50%]">
            <h2 className="text-3xl gap-3 flex items-center justify-center font-extrabold mb-6 text-center text-gray-800">Register <span className='text-yellow-500'><img className='w-[120px]' src={logo} alt="" /></span></h2>
            <form className='w-[75%]'>
                <input
                    type="text"
                    placeholder="Username"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    className="w-full mobile:bg-[rgba(0,0,0,0.34)] mobile:placeholder:text-white p-3 mb-4 border rounded-sm focus:outline-none focus:border-green-500"
                />
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
                <span className='py-[10px] flex h-fit w-fit items-start text-start justify-center gap-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="input">I have read and agreed to the <a className="underline text-blue-500">Terms, Condition</a> and <a className="underline text-blue-500">Policies.</a></label>
                </span>
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-sm font-semibold hover:text-yellow-600 transition-colors"
                >
                    Register
                </button>
            </form>
            <p className="mt-4 text-sm text-center">
                Aleady have an account? <Link to="/login" className="text-yellow-600 hover:underline">Login</Link>
            </p>
        </div>
    </div>
    );
};

export default Register;
// import React, { useState } from 'react';
// // import { auth, db } from '../firebase';
// // import { createUserWithEmailAndPassword } from 'firebase/auth';
// // import { doc, setDoc } from 'firebase/firestore';
// // import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [username, setUsername] = useState('');
//   // const [error, setError] = useState('');
//   // const navigate = useNavigate();

//   // const handleRegister = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//   //     const user = userCredential.user;

//   //     // Save user data in Firestore
//   //     await setDoc(doc(db, 'users', user.uid), {
//   //       username,
//   //       email,
//   //       createdAt: new Date(),
//   //     });
//   //     alert('sucess')
//   //     navigate('/login'); // Redirect to Login page
//   //   } catch (err) {
//   //     setError(err.message);
//   //   }
//   // };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <form className="p-6 bg-white rounded shadow-md w-80">
//         <h1 className="text-2xl font-bold mb-4">Register</h1>
//         {/* {error && <p className="text-red-500 mb-3">{error}</p>} */}
//         <input
//           type="text"
//           placeholder="Username"
//           // value={username}
//           // onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-2 mb-3 border rounded"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           // value={email}
//           // onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 mb-3 border rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           // value={password}
//           // onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-3 border rounded"
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;
