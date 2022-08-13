import { useEffect, useState } from 'react';

import { getProducts } from '@services/index';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return products;
};

export default useGetProducts;
