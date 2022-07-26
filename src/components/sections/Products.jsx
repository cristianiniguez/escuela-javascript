import React from 'react';
import Product from '../Product';

const Products = () => {
  return (
    <section id='products'>
      <div className='grid gap-6 place-content-center grid-cols-fill-36 sm:grid-cols-fill-60'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Products;
