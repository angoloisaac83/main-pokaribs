import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [category, setCategory] = useState('Cocktails');
  const [newDrink, setNewDrink] = useState({ name: '', ingredients: '', price: '' });
  const [updatedDrink, setUpdatedDrink] = useState({ name: '', ingredients: '', price: '' });
  const [selectedDrinkName, setSelectedDrinkName] = useState('');

  // Password prompt on page load
  useEffect(() => {
    const correctPassword = 'poks'; // Replace with your desired password

    // Prompt the user for password when the page loads
    const password = prompt('Please enter the password to access the page:');

    if (password !== correctPassword) {
      alert('Incorrect password. You will be redirected!');
      window.location.href = '/'; // Redirect to another page (e.g., homepage) if the password is incorrect
    }
  }, []);

  // Fetch drinks based on category
  useEffect(() => {
    axios.get(`http://https://back-3rm2.onrender.com/api/drinks?category=${category}`)
      .then((res) => setDrinks(res.data))
      .catch((err) => console.error('Error fetching drinks:', err));
  }, [category]);

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Add a new drink to the selected category
  const handleAddDrink = () => {
    const drinkData = {
      category,
      drink: newDrink,
    };
    
    axios.post('http://https://back-3rm2.onrender.com/api/drinks', drinkData)
      .then((res) => {
        setDrinks([...drinks, res.data]);
        setNewDrink({ name: '', ingredients: '', price: '' });
      })
      .catch((err) => console.error('Error adding drink:', err));
  };

  // Handle updating a drink
  const handleUpdateDrink = () => {
    if (selectedDrinkName) {
      axios.put(`http://https://back-3rm2.onrender.com/api/drinks/${category}/${selectedDrinkName}`, updatedDrink)
        .then((res) => {
          const updatedDrinks = drinks.map((drink) =>
            drink.name === selectedDrinkName ? res.data : drink
          );
          setDrinks(updatedDrinks);
          setUpdatedDrink({ name: '', ingredients: '', price: '' });
          setSelectedDrinkName('');
        })
        .catch((err) => console.error('Error updating drink:', err));
    }
  };

  // Handle deleting a drink
  const handleDeleteDrink = (name) => {
    axios.delete(`http://https://back-3rm2.onrender.com/api/drinks/${category}/${name}`)
      .then(() => {
        const filteredDrinks = drinks.filter((drink) => drink.name !== name);
        setDrinks(filteredDrinks);
      })
      .catch((err) => console.error('Error deleting drink:', err));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Drink Menu</h1>

      {/* Category Selection */}
      <div className="mb-4 text-center">
        <label htmlFor="category" className="text-lg font-semibold">Select Category:</label>
        <select
          id="category"
          onChange={handleCategoryChange}
          value={category}
          className="ml-2 p-2 rounded bg-gray-100 border border-gray-300"
        >
          <option value="Cocktails">Cocktails</option>
          <option value="Shooters">Shooters</option>
          <option value="NonAlcoholic">Non-Alcoholic</option>
        </select>
      </div>

      {/* Display Drinks */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">{category}</h2>
        <ul className="space-y-4">
          {drinks.map((drink) => (
            <li key={drink.name} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <div>
                <strong className="text-xl">{drink.name}</strong>
                <p className="text-sm text-gray-500">{drink.ingredients}</p>
                <p className="text-sm font-semibold">${drink.price}</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    setSelectedDrinkName(drink.name);
                    setUpdatedDrink(drink);
                  }}
                  className="mr-2 text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteDrink(drink.name)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Drink Form */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Add New Drink</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={newDrink.name}
            onChange={(e) => setNewDrink({ ...newDrink, name: e.target.value })}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Ingredients"
            value={newDrink.ingredients}
            onChange={(e) => setNewDrink({ ...newDrink, ingredients: e.target.value })}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Price"
            value={newDrink.price}
            onChange={(e) => setNewDrink({ ...newDrink, price: e.target.value })}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddDrink}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Drink
          </button>
        </div>
      </div>

      {/* Edit Existing Drink Form */}
      {selectedDrinkName && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Update Drink</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={updatedDrink.name}
              onChange={(e) => setUpdatedDrink({ ...updatedDrink, name: e.target.value })}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Ingredients"
              value={updatedDrink.ingredients}
              onChange={(e) => setUpdatedDrink({ ...updatedDrink, ingredients: e.target.value })}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Price"
              value={updatedDrink.price}
              onChange={(e) => setUpdatedDrink({ ...updatedDrink, price: e.target.value })}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleUpdateDrink}
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Update Drink
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drinks;
