import React from 'react';
import PropTypes from 'prop-types';

const NavbarLink = ({ label, href }) => {
  return (
    <a className='p-2 border border-transparent hover:border-blue-900 rounded-lg' href={href}>
      {label}
    </a>
  );
};

NavbarLink.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
};

export default NavbarLink;
