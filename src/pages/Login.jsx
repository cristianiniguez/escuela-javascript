import React from 'react';

const Login = () => {
  return (
    <main className='login'>
      <div className='container'>
        <div className='container-center'>
          <div className='logo'>
            <img src='/assets/logos/logo_yard_sale.svg' alt='Logo' />
          </div>
          <form className='form'>
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
            <div className='form-group'>
              <input type='submit' defaultValue='Log in' className='primary-button login-button' />
            </div>
            <p>
              <a href='/'>Forgot my password</a>
            </p>
          </form>
        </div>
        <div className='container-end'>
          <button className='secondary-button signup-button'>Sign up</button>
        </div>
      </div>
    </main>
  );
};

export default Login;
