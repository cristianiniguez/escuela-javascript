import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

import Layout from '@components/layout/Layout';
import Logo from '@assets/logos/logo_yard_sale.svg';

const EmailSent = () => {
  return (
    <Layout hideHeaderOnMobile>
      <section className='grow grid place-items-center'>
        <div className='max-w-xs'>
          <div className='w-36 mb-12 mx-auto text-center sm:hidden'>
            <img className='w-full' src={Logo} alt='Logo' />
          </div>
          <h1 className='title mb-3'>Email has been sent</h1>
          <p className='subtitle mb-8'>
            Please check your inbox for instructions on how to reset the password
          </p>
          <div className='bg-blue-100 w-32 h-32 rounded-full mb-6 mx-auto grid place-items-center'>
            <HiOutlineMail size={80} />
          </div>
          <button className='primary-button mt-3 mb-8'>Login</button>
          <p className='text-center text-sm text-gray-500'>
            <span>Didn&apos;t receive the email.</span>{' '}
            <a href='/' className='text-blue-900'>
              Resend
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default EmailSent;
