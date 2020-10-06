import React from 'react';
import { AppProps } from 'next/app';
import '../styles/antd.less';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
