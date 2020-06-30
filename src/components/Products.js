import React, { useContext } from 'react';
import { ProductContext } from '../context/Product';
import { CartContext } from '../context/Cart';

// Components
import Product from './Product';

const Products = () => {
  const prodData = useContext(ProductContext);
  const cartData = useContext(CartContext);
  console.log(cartData);

  return (
    <div>
      {prodData.map((product) => (
        <Product
          key={product.id}
          product={product}
          addItem={cartData.addItem}
        />
      ))}
    </div>
  );
};

export default Products;
