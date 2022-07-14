import React from 'react';

import Layout from 'components/layout/Layout';
import 'styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <Layout hideHeader>
      <main className='new-password'>
        <div className='container'>
          <div className='logo'>
            <img src='/assets/logos/logo_yard_sale.svg' alt='Logo' />
          </div>
          <h1 className='title'>Create a new password</h1>
          <p className='subtitle'>Enter a new password for your account</p>
          <form className='form'>
            <div className='form-group'>
              <label htmlFor='password' className='label'>
                Password
              </label>
              <input type='password' id='password' placeholder='*********' className='input' />
            </div>
            <div className='form-group'>
              <label htmlFor='new-password' className='label'>
                Re-enter password
              </label>
              <input type='password' id='new-password' placeholder='*********' className='input' />
            </div>
            <div className='form-group'>
              <input type='submit' defaultValue='Confirm' className='primary-button login-button' />
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default NewPassword;
