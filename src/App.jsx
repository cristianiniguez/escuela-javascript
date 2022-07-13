import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import '../styles/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Layout>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route element={<NotFound />} />
        </Layout>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
