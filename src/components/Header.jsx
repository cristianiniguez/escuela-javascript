import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <nav>
      <img src='/assets/icons/icon_menu.svg' alt='Menu' className='menu' />
      <div className='navbar-left'>
        <img src='/assets/logos/logo_yard_sale.svg' alt='Logo YardSale' className='logo' />
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
        <div className='navbar-shopping-cart'>
          <img src='/assets/icons/icon_shopping_cart.svg' alt='Shopping Cart' />
          <div>2</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
