import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Login';
import ResetPassword from '@pages/ResetPassword';
import EmailSent from '@pages/EmailSent';
import NewPassword from '@pages/NewPassword';
import Account from '@pages/Account';
import SignUp from '@pages/SignUp';
import Checkout from '@pages/Checkout';
import MyOrder from '@pages/MyOrder';
import NotFound from '@pages/NotFound';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/email-sent' element={<EmailSent />} />
          <Route path='/new-password' element={<NewPassword />} />
          <Route path='/account' element={<Account />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/my-order' element={<MyOrder />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
