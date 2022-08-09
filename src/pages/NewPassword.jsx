import React from 'react';

import Layout from '@components/layout/Layout';
import TextInput from '@components/forms/TextInput';
import Logo from '@assets/logos/logo_yard_sale.svg';

const NewPassword = () => {
  return (
    <Layout hideHeaderOnMobile>
      <section className='grow grid place-items-center'>
        <div className='max-w-xs'>
          <div className='w-36 mb-12 mx-auto text-center sm:hidden'>
            <img className='w-full' src={Logo} alt='Logo' />
          </div>
          <h1 className='title mb-3'>Create a new password</h1>
          <p className='subtitle mb-8'>Enter a new password for your account</p>
          <form className='form'>
            <TextInput id='password' label='Password' placeholder='*****' type='password' />
            <TextInput
              id='confirm-password'
              label='Re-enter password'
              placeholder='*****'
              type='password'
            />
            <input
              type='submit'
              defaultValue='Confirm'
              className='button button-primary login-button'
            />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default NewPassword;
