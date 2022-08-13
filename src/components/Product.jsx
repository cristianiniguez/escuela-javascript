import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ShoppingCartIcon from './ShoppingCartIcon';
import AppContext from '@context/AppContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(AppContext);

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
        <div className='rounded-full bg-blue-300 p-1' onClick={() => addToCart(product)}>
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
