import React from 'react';

import Product from '../Product';
import useGetProducts from '@hooks/useGetProducts';

const Products = () => {
  const products = useGetProducts();

  return (
    <section id='products'>
      <div className='grid gap-6 place-content-center grid-cols-fill-36 sm:grid-cols-fill-60'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
