import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import '@styles/components/ShoppingCartIcon.scss';

const ShoppingCartIcon = ({ className, point }) => {
  return (
    <div className={clsx('shopping-cart-icon', className)}>
      <div className='shopping-cart-icon-container'>
        <HiOutlineShoppingCart className='shopping-cart-icon-svg' size={32} />
        {point && <div className='shopping-cart-icon-point'>{point}</div>}
      </div>
    </div>
  );
};

ShoppingCartIcon.propTypes = {
  className: PropTypes.string,
  point: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default ShoppingCartIcon;
