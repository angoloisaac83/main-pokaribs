const addToCart = (id, image, name, price) => {
    // Retrieve cart data from localStorage or initialize as empty array
    let data = JSON.parse(localStorage.getItem('cartItem')) || [];
  
    // Add new item to the cart
    data.push({ id,image, name, price });
  
    // Update localStorage
    localStorage.setItem('cartItem', JSON.stringify(data));
  
    console.log(data);
    // alert("Item added to cart");
  };
  
  const emptyCart = () => {
    // Clear the cart by setting an empty array
    localStorage.setItem('cartItem', JSON.stringify([]));
  
    console.log("Cart emptied");
    alert("Cart Emptied");
  };
  
  const removeItemCart = (id) => {
    // Retrieve cart data
    let data = JSON.parse(localStorage.getItem('cartItem')) || [];
  
    // Filter out the item to be removed
    data = data.filter((item) => item.id !== id);
  
    // Update localStorage
    localStorage.setItem('cartItem', JSON.stringify(data));
  
    console.log(data);
    alert("Item removed from cart");
  };
  
  export { addToCart, emptyCart, removeItemCart };
  
