import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
// import Test from './components/test';
import Home from './pages/home';
import Cart from './components/cart';
import Register from './pages/register';
import Admin from './pages/admin'
import Buynow from './pages/buy';
import Login from './pages/login';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';
import Payment from './pages/payment';
import Category from './components/category'
import { CartProvider } from './context/cartcontext';
import './index.css';

const App = () => (
    <CartProvider>
    <Router>
        <div className="App">
            <Navbar /><br /><br /><br />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/test" element={<Test />} /> */}
                <Route path="/admon" element={<Admin />} />
                <Route path="/about" element={<About />} />
                <Route path="/buy" element={<Buynow />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Login />} />
                <Route path="/category" element={<Category />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
        </div>
    </Router>
    </CartProvider>
);

export default App;
