import Head from 'next/head';
import { Layout } from 'antd';
import React from 'react';
import { NextPageContext } from 'next';
import { books } from '../variables/books';

const { Header, Footer, Content } = Layout;

interface Props {
  userAgent?: string;
}

export default class Description extends React.Component<Props> {
  static async getInitialProps({ query: { id } }: NextPageContext) {
    const idBook: string | string[] = id;
    return { idBook };
  }

  render() {
    const { idBook } = this.props;
    return (
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
          <Content> idBook</Content>
          <Footer>Desenvolvido por Jonathan Thomaz</Footer>
        </Layout>
      </>
    );
  }
}
