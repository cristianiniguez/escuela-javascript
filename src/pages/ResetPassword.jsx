import React from 'react';
import '../styles/ResetPassword.scss';

const ResetPassword = () => {
  return (
    <main className='login'>
      <div className='container'>
        <div className='logo'>
          <img src='/assets/logos/logo_yard_sale.svg' alt='Logo' />
        </div>
        <h1 className='title'>Email has been sent</h1>
        <p className='subtitle'>
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className='email-image'>
          <img src='/assets/icons/email.svg' alt='Email Sent' />
        </div>
        <button className='primary-button login-button'>Login</button>
        <p className='resend'>
          <span>Didn't receive the email.</span> <a href='/'>Resend</a>
        </p>
      </div>
    </main>
  );
};

export default ResetPassword;
