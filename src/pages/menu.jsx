import React, {useState,useEffect} from 'react';
import MenuItem from '../components/menuitem';
import { Link } from 'react-router-dom';
import { CartProvider } from '../context/cartcontext';
import { Drinks } from "../data";
// import Test from '../context/text'
const Menu = () => {
    const [meals, setMeals] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState(Drinks["All_Day_Breakfast"]);
    const [loading, setLoading] = useState(false);
    return (
        <CartProvider>
        <head>
          <title>Pokaribs-Menu Page </title>
        </head>
        <div className="container mx-auto w-full h-fit p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
            <br /><br />
            <h2 className='text-2xl font-bold text-center pb-8"'>All_Day_Breakfast</h2><br /><br />
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
                                image={category.strCategoryThumb}
                                description={category.description}
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

export default Menu;
