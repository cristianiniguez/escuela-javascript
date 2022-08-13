import React, { useEffect, useState } from 'react';

import Product from '../Product';
import { getProducts } from '@services/index';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <section id='products'>
      <div className='grid gap-6 place-content-center grid-cols-fill-36 sm:grid-cols-fill-60'>
        {products.map((product) => (
          <Product key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
