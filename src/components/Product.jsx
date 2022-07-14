import React from 'react';
import 'styles/components/Product.scss';

const Product = () => {
  return (
    <div className='product-card'>
      <img src='/assets/images/bike.jpg' alt='Bike' className='product-img' />
      <div className='product-info'>
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src='/assets/icons/bt_add_to_cart.svg' alt='Add to cart' />
        </figure>
      </div>
    </div>
  );
};

export default Product;
