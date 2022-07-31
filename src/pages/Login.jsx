import React from 'react';

import Layout from '@components/layout/Layout';
import Logo from '@assets/logos/logo_yard_sale.svg';
import TextInput from '@components/forms/TextInput';

const Login = () => {
  return (
    <Layout hideHeaderOnMobile>
      <section className='grow grid justify-items-center items-stretch sm:items-center'>
        <div className='max-w-xs grid grid-rows-full-auto'>
          <div className='flex flex-col justify-center py-4'>
            <div className='w-36 mb-12 mx-auto text-center sm:hidden'>
              <img className='w-full' src={Logo} alt='Logo' />
            </div>
            <form>
              <TextInput
                id='email'
                label='Email address'
                placeholder='platzi@example.com'
                type='email'
              />
              <TextInput id='password' label='Password' placeholder='*********' type='password' />
              <div className='form-group'>
                <input
                  type='submit'
                  defaultValue='Log in'
                  className='button button-primary login-button'
                />
              </div>
              <p className='text-sm text-center text-blue-500'>
                <a href='/'>Forgot my password</a>
              </p>
            </form>
          </div>
          <div className='flex flex-col justify-center'>
            <button type='button' className='button button-secondary'>
              Sign up
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
