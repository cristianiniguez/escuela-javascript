import React, { useContext } from 'react';

import AppContext from '@context/AppContext';
import Order from '../Order';

const Orders = () => {
  const { state } = useContext(AppContext);

  return (
    <div className='w-80 panel p-4 absolute top-full right-0 rounded-lg'>
      <h1 className='title mb-4'>Shopping cart</h1>
      <div className='flex flex-col gap-6'>
        {state.cart.map((product, i) => (
          <Order key={`order-item-${i}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
