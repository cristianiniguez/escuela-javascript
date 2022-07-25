import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

import Layout from '@components/layout/Layout';
import Logo from '@assets/logos/logo_yard_sale.svg';
import '@styles/EmailSent.scss';

const EmailSent = () => {
  return (
    <Layout hideHeader>
      <section className='email-sent'>
        <div className='email-sent-container'>
          <div className='email-sent-logo'>
            <img src={Logo} alt='Logo' />
          </div>
          <h1 className='title'>Email has been sent</h1>
          <p className='subtitle'>
            Please check your inbox for instructions on how to reset the password
          </p>
          <div className='email-sent-image'>
            <HiOutlineMail size={80} />
          </div>
          <button className='primary-button email-sent-login-button'>Login</button>
          <p className='email-sent-resend'>
            <span>Didn&apos;t receive the email.</span> <a href='/'>Resend</a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default EmailSent;
