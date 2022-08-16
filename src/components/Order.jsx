import React from 'react';
import Bike from '../assets/images/bike.jpg';

const Order = () => {
  return (
    <div className='flex gap-4 items-center'>
      <figure>
        <img className='w-16 h-16 object-cover rounded-2xl' src={Bike} alt='Bike' />
      </figure>
      <p className='grow text-gray-500'>Bike</p>
      <p className='font-bold'>$30.00</p>
    </div>
  );
};

export default Order;
