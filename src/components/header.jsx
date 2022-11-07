import React , { useState } from 'react';
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingcart from '@icons/icon_shopping_cart.svg';

import Menu from '@components/Menu';

const Header = () => {
	const [toggle,setToggle] = useState(false);
	const handleToggle = () => {
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
						<a href="/">Diademas Slim</a>
					</li>
					<li>
						<a href="/">Diademas Oficiales</a>
					</li>
					<li>
						<a href="/">Accesorios</a>
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
					<li className="navbar-shopping-cart">
						<img src={shoppingcart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
		</nav>
	);
}

export default Header;
