import React from 'react';

import '@styles/components/Product.scss';
import Bike from '@assets/images/bike.jpg';
import AddToCart from '@assets/icons/bt_add_to_cart.svg';

const Product = () => {
  return (
    <div className='product-card'>
      <img src={Bike} alt='Bike' className='product-img' />
      <div className='product-info'>
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={AddToCart} alt='Add to cart' />
        </figure>
      </div>
    </div>
  );
};

export default Product;
