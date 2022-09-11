import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, name, placeholder = '', type = 'text' }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={name} className='block mb-1 font-bold text-sm'>
        {label}
      </label>
      <input
        className='w-full text-sm bg-gray-200 h-8 rounded-md px-2'
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
