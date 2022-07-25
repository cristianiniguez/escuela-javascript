import React from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

import Logo from '@assets/logos/logo_yard_sale.svg';
import '@styles/components/layout/Navbar.scss';
import ShoppingCartIcon from '@components/ShoppingCartIcon';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <HiOutlineMenuAlt1 className='navbar-menu' size={32} />
      <div className='navbar-left'>
        <img src={Logo} alt='Logo YardSale' className='navbar-logo' />
        <ul>
          <li>
            <a href='/'>All</a>
          </li>
          <li>
            <a href='/'>Clothes</a>
          </li>
          <li>
            <a href='/'>Electronics</a>
          </li>
          <li>
            <a href='/'>Furnitures</a>
          </li>
          <li>
            <a href='/'>Toys</a>
          </li>
          <li>
            <a href='/'>Others</a>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <p className='navbar-email'>platzi@example.com</p>
        <ShoppingCartIcon point={2} />
      </div>
    </nav>
  );
};

export default Navbar;
