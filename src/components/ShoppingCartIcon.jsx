import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import PropTypes from 'prop-types';

const ShoppingCartIcon = ({ className, onClick = () => null, point }) => {
  return (
    <div className={className} onClick={onClick}>
      <div className='relative'>
        <HiOutlineShoppingCart size={32} />
        {point && (
          <div className='absolute top-0 right-0 w-4 h-4 bg-blue-900 text-white rounded-full grid place-items-center text-xs'>
            {point}
          </div>
        )}
      </div>
    </div>
  );
};

ShoppingCartIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  point: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ShoppingCartIcon;
