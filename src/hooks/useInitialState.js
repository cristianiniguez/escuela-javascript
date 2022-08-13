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

  return { state, addToCart };
};

export default useInitialState;
