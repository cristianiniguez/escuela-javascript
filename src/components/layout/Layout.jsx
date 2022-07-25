import React from 'react';
import PropTypes from 'prop-types';

import Header from './Navbar';

const Layout = ({ children, hideHeader = false }) => {
  return (
    <div className='bg-blue-50 min-h-screen flex flex-col items-stretch'>
      {!hideHeader && <Header />}
      <main className='grow py-8'>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  hideHeader: PropTypes.bool,
};

export default Layout;
