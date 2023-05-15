import Head from 'next/head';
import React from 'react';
import Account from '../../components/Account/Account';

const Index = () => {

    return (
      <>
      {/* <Head>
        <html dir="ltr" />
        <title>Account</title>
        <meta property="og:title" dir="rtl" lang="ar" content="My page title" key="title" />
      </Head> */}
          {/* <Head>
             <html dir="rtl" />
             <meta property="og:title" dir="rtl" lang="ar" content="My page title" key="title" />
          </Head> */}
          <Account/>
        </>
    );
}

export default Index;
