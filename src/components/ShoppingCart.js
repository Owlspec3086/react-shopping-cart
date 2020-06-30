import React, { useContext } from 'react';
import { CartContext } from '../context/Cart';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = (props) => {
  const cartData = useContext(CartContext);
  console.log(cartData);

  const getCartTotal = () => {
    return cartData.cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className='shopping-cart'>
      {cartData.cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <div className='shopping-cart__checkout'>
        <p>Total: ${getCartTotal()} </p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
