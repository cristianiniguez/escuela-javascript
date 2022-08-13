import React, { useRef } from 'react';

import Layout from '@components/layout/Layout';
import Logo from '@assets/logos/logo_yard_sale.svg';
import TextInput from '@components/forms/TextInput';

const Login = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <Layout hideHeaderOnMobile>
      <section className='grow grid sm:place-items-center px-8'>
        <div className='sm:w-80 grid grid-rows-full-auto sm:grid-rows-auto-auto'>
          <div className='flex flex-col justify-center py-4'>
            <div className='w-36 mb-12 mx-auto text-center sm:hidden'>
              <img className='w-full' src={Logo} alt='Logo' />
            </div>
            <form ref={form} onSubmit={handleSubmit}>
              <TextInput
                label='Email address'
                name='email'
                placeholder='platzi@example.com'
                type='email'
              />
              <TextInput label='Password' name='password' placeholder='*********' type='password' />
              <div className='form-group'>
                <button className='button button-primary login-button w-full mb-4' type='submit'>
                  Log in
                </button>
              </div>
              <p className='text-sm text-center text-blue-500'>
                <a href='/'>Forgot my password</a>
              </p>
            </form>
          </div>
          <div className='flex flex-col justify-center'>
            <button type='button' className='button button-secondary w-full'>
              Sign up
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
