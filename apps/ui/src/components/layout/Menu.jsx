import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const MenuItem = ({ className, label }) => {
  return (
    <li className={clsx('text-end font-bold', className)}>
      <a href='/'>{label}</a>
    </li>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const Menu = () => {
  return (
    <div className='w-32 panel rounded-lg absolute top-full right-0'>
      <ul className='p-4 flex flex-col gap-2'>
        <MenuItem label='My orders' />
        <MenuItem label='My account' />
        <hr />
        <MenuItem label='Sign Out' />
      </ul>
    </div>
  );
};

export default Menu;
