import React from 'react';

import Layout from '@components/layout/Layout';
import TextInput from '@components/forms/TextInput';

const SignUp = () => {
  return (
    <Layout>
      <section className='grow grid sm:justify-center px-8'>
        <div className='sm:w-80 flex flex-col justify-center'>
          <form className='grow flex flex-col justify-center'>
            <h1 className='title'>My account</h1>
            <div className='grow sm:grow-0'>
              <TextInput name='name' label='Name' placeholder='Your Name' />
              <TextInput
                name='email'
                label='Email Address'
                placeholder='Your Email Address'
                type='email'
              />
              <TextInput name='password' label='Password' placeholder='*****' type='password' />
            </div>
            <div className='form-group'>
              <input
                type='submit'
                defaultValue='Create'
                className='w-full button button-primary login-button'
              />
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
