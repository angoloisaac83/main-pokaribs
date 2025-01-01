import React, {useState,useEffect} from 'react';
import MenuItem from '../components/menuitem';
import { Link } from 'react-router-dom';
import { CartProvider } from '../context/cartcontext';
import { Drinks } from "../data";
// import videoSource from '../../public/IMG_9271.MP4'
const Home = () => {
    const [meals, setMeals] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState(Drinks["All_Day_Breakfast"]);
    const [loading, setLoading] = useState(false);
  
    // useEffect(() => {
    //     // API endpoint to fetch all food categories
    //     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    //       .then((response) => response.json())
    //       .then((data) => {
    //         // Check the data structure and set categories state
    //         setCategories(data.categories || []); // Default to an empty array if no categories
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching data:', error);
    //         setLoading(false);
    //       });
    //   }, []);
    
    return (
        <CartProvider>
          <head>
            <title>Pokaribs-Home</title>
          </head>
            
            <header className='w-full h-screen relative flex items-center justify-center text-white'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 w-full h-screen min-h-full object-cover z-[-1]'
      >
        <source src={"../../public/IMG_9271.MP4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className='w-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.34)] h-full gap-7 text-center'>
        <h1 className='text-[45px] mobile:text-[35px] font-bold mobile:px-3'>
          Pokaribs Native Kitchen & Lounge
        </h1>
        <p className='w-[45%] mobile:w-[95%] mobile:text-[18px] pb-[20px] text-xl font-medium'>
          Pokaribs Native Kitchen & Lounge is a culinary gem that invites tourists to indulge in the rich flavors of Nigeria.
        </p>
        <button className='bg-black text-white hover:text-yellow-500 px-[15px] py-[7px] text-[19px] rounded-md'>
          <Link to="/menu" className="no-underline text-white hover:text-yellow-500">
            Start Ordering
          </Link>
        </button>
      </div>
    </header>
        <div className="container mx-auto w-full h-fit p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {loading ? (
                    <p>Loading categories...</p>
                ) : (
                    categories.length > 0 ? (
                        categories.map((category) => (
                            <MenuItem
                                key={category.idCategory}
                                id={category.idCategory}
                                name={category.name}
                                price={category.price} 
                                image={category.image}
                                description={category.ingredients}
                            />
                        ))
                    ) : (
                        <p>No categories found.</p>
                    )
                )}
            </div>
        </div>
        </CartProvider>
    );
};

export default Home;
