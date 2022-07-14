import React from 'react';

import '../styles/MyOrder.scss';

const Order = () => {
  return (
    <div className='order'>
      <div>
        <p>04.25.21</p>
        <p>6 articles</p>
      </div>
      <div>
        <p>$560.00</p>
      </div>
      <img src='/assets/icons/flechita.svg' alt='Flechita' />
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
