import React from 'react';
import Head from 'next/head';
import { BookOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>BookMaster</title>
      </Head>
      <Layout>
        <Header></Header>
        <Content>
          <h1>Content</h1>
          <BookOutlined />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
