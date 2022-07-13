import React from 'react';

import Layout from './Layout';
import Login from '../pages/Login';
import ResetPassword from '../pages/ResetPassword';
import '../styles/global.scss';

const App = () => {
  return (
    <Layout>
      <Login />
      <ResetPassword />
    </Layout>
  );
};

export default App;
