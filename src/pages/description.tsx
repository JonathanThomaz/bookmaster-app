import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { Layout } from 'antd';
import Grid from 'antd/lib/card/Grid';

const { Header, Footer, Content } = Layout;

interface Props {
  descriptionBook?: string | string[];
}

const Description: NextPage<Props> = ({ descriptionBook }) => (
  <>
    <Head>
      <title>BookMaster</title>
    </Head>
    <Layout>
      <Header
        style={{ fontSize: '20px', color: '#faad14', textAlign: 'center' }}
      >
        <span>Descrição do livro</span>
      </Header>
      <Content>
        <Grid style={{ width: '100%' }}> {descriptionBook} </Grid>
      </Content>
      <Footer>Desenvolvido por Jonathan Thomaz</Footer>
    </Layout>
  </>
);

Description.getInitialProps = async ({ query: { description } }) => {
  const descriptionBook = description;
  return { descriptionBook };
};

export default Description;
