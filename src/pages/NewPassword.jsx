import React from 'react';

import Layout from '@components/layout/Layout';
import Logo from '@assets/logos/logo_yard_sale.svg';
import '@styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <Layout hideHeaderOnMobile>
      <section className='new-password'>
        <div className='container'>
          <div className='new-password-logo'>
            <img src={Logo} alt='Logo' />
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
      </section>
    </Layout>
  );
};

export default NewPassword;
