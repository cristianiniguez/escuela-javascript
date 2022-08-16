import React, { useContext } from 'react';
import { HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';

import AppContext from '@context/AppContext';

const ShoppingCartItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className='flex gap-4 items-center'>
      <figure>
        <img
          className='w-16 h-16 object-cover rounded-2xl'
          src={product.images[0]}
          alt={product.name}
        />
      </figure>
      <p className='grow text-gray-500'>{product.title}</p>
      <p className='font-bold'>${product.price}</p>
      <HiX
        size={24}
        className='cursor-pointer text-gray-400'
        onClick={() => removeFromCart(product)}
      />
    </div>
  );
};

ShoppingCartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

const ShoppingCart = () => {
  const { state } = useContext(AppContext);

  const getTotal = () => state.cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className='w-80 panel p-4 absolute top-full right-0 rounded-lg'>
      <h1 className='title mb-4'>Shopping cart</h1>
      {state.cart.length > 0 ? (
        <>
          <div className='flex flex-col gap-6 mb-4'>
            {state.cart.map((product, i) => (
              <ShoppingCartItem key={`shopping-cart-item-${i}`} product={product} />
            ))}
          </div>
          <div className='bg-blue-100 rounded-lg p-4 flex items-center gap-4 mb-4'>
            <p className='font-bold'>Total</p>
            <p className='grow text-end'>${getTotal()}</p>
          </div>
          <button className='button button-primary w-full'>Checkout</button>
        </>
      ) : (
        <p className='text-gray-500 text-center'>No Products in the cart</p>
      )}
    </div>
  );
};

export default ShoppingCart;
