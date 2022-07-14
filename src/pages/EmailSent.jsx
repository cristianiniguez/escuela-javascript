import React from 'react';

import Layout from 'components/layout/Layout';
import 'styles/EmailSent.scss';

const EmailSent = () => {
  return (
    <Layout hideHeader>
      <section className='email-sent'>
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
            <span>Didn&apos;t receive the email.</span> <a href='/'>Resend</a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default EmailSent;
