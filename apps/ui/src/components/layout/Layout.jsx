import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';

const Layout = ({ children, hideHeaderOnMobile = false }) => {
  return (
    <div className='bg-blue-50 min-h-screen flex flex-col items-stretch'>
      <Navbar hideOnMobile={hideHeaderOnMobile} />
      <main className='grow py-8 flex flex-col'>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  hideHeaderOnMobile: PropTypes.bool,
};

export default Layout;
