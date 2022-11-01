import React, { useState } from 'react';
import '../styles/ProductItem.scss';

import addtocart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
	const [cart, setCart] = useState('');
	const handleClick = () => {
		setCart('Agregado')
	}
	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
			<div className="product-info">
				<div>
					<p>$120,000</p>
					<p>Diadema Gamer</p>
				</div>
				<figure className="figure-click" onClick={handleClick}>
					<img src={addtocart} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;
