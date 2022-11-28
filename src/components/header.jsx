import React , { useState , useContext } from 'react';
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingcart from '@icons/icon_shopping_cart.svg';

import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder'

import AppContext from '../context/AppContext';


const Header = () => {
	const [toggle,setToggle] = useState(false);
	const [toggle2,setToggle2] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle  = () => {
		setToggle(!toggle);
	}
	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">Todas</a>
					</li>
					<li>
						<a href="/">Diademas Gamer</a>
					</li>
					
					<li>
						<a href="/">Otros</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						JulianAndrade@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={() => setToggle2(!toggle2)}>
						<img src={shoppingcart} alt="shopping cart"  />
						{state.cart.length > 0 ? <div>{state.cart.length} </div> : null }
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggle2 && <MyOrder />}
		</nav>
	);
}

export default Header;
