import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// 3 Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//2 state proprities
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	//adding item
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};
	//removing item
	const removeItem = (item) => {
		setCart(item);
	};
	const cartValue ={
		cart: cart,
		addItem: addItem,
		removeItem: removeItem,
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
