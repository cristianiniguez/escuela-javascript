import React from 'react';

import Bike from '@assets/images/bike.jpg';
import ShoppingCartIcon from './ShoppingCartIcon';

const Product = () => {
  return (
    <div className='product-card'>
      <img src={Bike} alt='Bike' className='w-full aspect-square object-cover rounded-2xl' />
      <div className='mt-4 flex justify-between items-center'>
        <div>
          <p className='font-bold mb-1'>$120,00</p>
          <p className='text-sm text-gray-500'>Bike</p>
        </div>
        <div className='rounded-full bg-blue-300 p-1'>
          <ShoppingCartIcon className='text-white' point='+' />
        </div>
      </div>
    </div>
  );
};

export default Product;
