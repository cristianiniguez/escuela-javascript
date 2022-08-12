import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

import Logo from '@assets/logos/logo_yard_sale.svg';
import ShoppingCartIcon from '@components/ShoppingCartIcon';
import NavbarLink from './NavbarLink';
import Menu from './Menu';

const Navbar = ({ hideOnMobile }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <nav
      className={clsx(
        hideOnMobile ? 'hidden' : 'flex',
        'h-16 px-4 shadow-sm sm:flex justify-between items-center',
      )}
    >
      <HiOutlineMenuAlt1 className='sm:hidden' size={32} />
      <div className='flex items-center gap-3 h-full'>
        <img src={Logo} alt='Logo YardSale' className='h-1/2' />
        <ul className='hidden sm:flex items-center gap-2'>
          <li>
            <NavbarLink href='/' label='All' />
          </li>
          <li>
            <NavbarLink href='/' label='Clothes' />
          </li>
          <li>
            <NavbarLink href='/' label='Electronics' />
          </li>
          <li>
            <NavbarLink href='/' label='Furniture' />
          </li>
          <li>
            <NavbarLink href='/' label='Toys' />
          </li>
          <li>
            <NavbarLink href='/' label='Others' />
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-3'>
        <div
          className={clsx('relative cursor-pointer p-2 rounded-md hover:bg-slate-200', {
            'bg-slate-200': toggle,
          })}
          onClick={handleToggle}
        >
          <p className='text-gray-500 text-sm hidden sm:block'>platzi@example.com</p>
          {toggle && <Menu />}
        </div>
        <ShoppingCartIcon point={2} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  hideOnMobile: PropTypes.bool,
};

export default Navbar;
