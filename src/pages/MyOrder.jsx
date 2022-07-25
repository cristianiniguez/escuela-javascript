import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

import '@styles/MyOrder.scss';

const Order = () => {
  return (
    <div className='order'>
      <div>
        <p className='order-date'>04.25.21</p>
        <p className='order-qty'>6 articles</p>
      </div>
      <div>
        <p className='order-amount'>$560.00</p>
      </div>
      <HiChevronRight className='order-arrow' />
    </div>
  );
};

const MyOrder = () => {
  return (
    <section className='my-order'>
      <div className='container'>
        <h1 className='title'>My orders</h1>
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </section>
  );
};

export default MyOrder;
