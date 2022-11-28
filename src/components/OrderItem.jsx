import React , {useContext} from 'react';
import Appcontext from '../context/AppContext';
import '../styles/OrderItem.scss';
import iconClose from '@icons/001-x-button.png';



const OrderItem = ({ product }) => {
	const {removeFromCart } = useContext(Appcontext);
	const handleRemove = product => {
		removeFromCart(product);
	}
		return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0] } alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconClose} alt="close" onClick= {()=> handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;
