import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

import Layout from '@components/layout/Layout';

const Order = () => {
  return (
    <div className='mb-3 flex items-center gap-4'>
      <div>
        <p className='font-bold'>04.25.21</p>
        <p className='text-sm text-gray-500'>6 articles</p>
      </div>
      <div className='grow'>
        <p className='text-end'>$560.00</p>
      </div>
      <HiChevronRight className='text-gray-500' />
    </div>
  );
};

const MyOrder = () => {
  return (
    <Layout>
      <section className='grow grid sm:justify-center px-8'>
        <div className='sm:w-80 flex flex-col justify-center'>
          <h1 className='title'>My orders</h1>
          <div>
            <Order />
            <Order />
            <Order />
            <Order />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MyOrder;
