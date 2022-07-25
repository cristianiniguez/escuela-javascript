import React from 'react';
import PropTypes from 'prop-types';

import Header from './Navbar';
import '@styles/components/layout/Layout.scss';

const Layout = ({ children, hideHeader = false }) => {
  return (
    <div className='layout'>
      {!hideHeader && <Header />}
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  hideHeader: PropTypes.bool,
};

export default Layout;
