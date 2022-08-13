import React from 'react';
import PropTypes from 'prop-types';

import ShoppingCartIcon from './ShoppingCartIcon';

const Product = ({ product }) => {
  return (
    <div>
      <img
        src={product.images[0]}
        alt={product.title}
        className='w-full aspect-square object-cover rounded-2xl'
      />
      <div className='mt-4 flex justify-between items-center'>
        <div>
          <p className='font-bold mb-1'>${product.price}</p>
          <p className='text-sm text-gray-500'>{product.title}</p>
        </div>
        <div className='rounded-full bg-blue-300 p-1' onClick={() => null}>
          <ShoppingCartIcon className='text-white' point='+' />
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
