import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './context/Product';
import { CartContext } from './context/Cart';

// 3 Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//2 state proprities
function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  //adding item
  const addItem = (item) => {
    // add the given item to the cart
    setCart([...cart, item]);
  };
  //removing item
  const removeItem = (item) => {
    setCart(item);
  };
  const cartValue = {
    cart: cart,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <div className='App'>
      <Navigation cart={cart} />

      {/* Routes */}
      <ProductContext.Provider value={products}>
        <CartContext.Provider value={cartValue}>
          <Route exact path='/'>
            <Products />
          </Route>

          <Route path='/cart'>
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
