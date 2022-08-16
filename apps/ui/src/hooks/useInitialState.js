import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product) => {
    setState((state) => ({
      ...state,
      cart: [...state.cart, product],
    }));
  };

  const removeFromCart = (product) => {
    setState((state) => ({
      ...state,
      cart: state.cart.filter((item) => item.id !== product.id),
    }));
  };

  return { state, addToCart, removeFromCart };
};

export default useInitialState;
