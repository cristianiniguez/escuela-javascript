import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, label, placeholder = '', type = 'text' }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={id} className='block mb-1 font-bold text-sm'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className='text-sm bg-gray-200 h-8 rounded-md px-2'
      />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
