import React from 'react';

import Layout from '@components/layout/Layout';
import '@styles/SignUp.scss';

const SignUp = () => {
  return (
    <Layout hideHeaderOnMobile>
      <section className='sign-up'>
        <div className='sign-up-container'>
          <h1 className='title'>My account</h1>
          <form className='form'>
            <div>
              <div className='form-group'>
                <label htmlFor='name' className='label'>
                  Name
                </label>
                <input type='text' id='name' placeholder='Cristian' className='input' />
              </div>
              <div className='form-group'>
                <label htmlFor='email' className='label'>
                  Email address
                </label>
                <input type='email' id='email' placeholder='platzi@example.com' className='input' />
              </div>
              <div className='form-group'>
                <label htmlFor='password' className='label'>
                  Password
                </label>
                <input type='password' id='password' placeholder='*********' className='input' />
              </div>
            </div>
            <div className='form-group'>
              <input type='submit' defaultValue='Create' className='primary-button login-button' />
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
