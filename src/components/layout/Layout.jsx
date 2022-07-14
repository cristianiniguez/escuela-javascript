import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

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
