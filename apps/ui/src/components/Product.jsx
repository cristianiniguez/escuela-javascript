import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ShoppingCartIcon from './ShoppingCartIcon';
import AppContext from '@context/AppContext';
import { HiCheck, HiPlus } from 'react-icons/hi';

const Product = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const isOnCart = state.cart.some((item) => item.id === product.id);
  const Point = isOnCart ? HiCheck : HiPlus;

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
        <div
          className={clsx(
            'rounded-full bg-blue-300 p-1',
            isOnCart ? 'bg-gray-300' : 'bg-blue-300',
            { 'cursor-pointer': !isOnCart },
          )}
          onClick={() => !isOnCart && addToCart(product)}
        >
          <ShoppingCartIcon className='text-white' point={<Point size={12} />} />
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
