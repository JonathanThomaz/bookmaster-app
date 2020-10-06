import React from 'react';
import Head from 'next/head';
import { BookOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import Grid from 'antd/lib/card/Grid';
import { books } from '../variables/books';
import Link from 'next/link';

const { Header, Footer, Content } = Layout;

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>BookMaster</title>
      </Head>
      <Layout>
        <Header
          style={{ fontSize: '20px', color: '#faad14', textAlign: 'center' }}
        >
          <span>Biblioteca</span>
        </Header>
        <Content>
          {books.map((book, index) => (
            <Grid style={{ fontSize: '15px', color: '#120338' }} key={index}>
              <p>
                <span>{book.id}</span>
                <BookOutlined style={{ fontSize: '18px', color: '#faad14' }} />
              </p>
              <p>
                <span>Nome do livro:</span>
                <span>{book.nome}</span>
              </p>
              <p>
                <span>Autor:</span>
                <span>{book.autor}</span>
              </p>
              <p>
                <span>Número de páginas:</span>
                <span>{book.paginas}</span>
              </p>
              <p>
                <span>Gêneros:</span>
                <span>{book.generos}</span>
              </p>
              <p>
                <span>Editoras:</span>
                <span>{book.editoras}</span>
              </p>
              <Link
                href={{
                  pathname: '/description',
                  query: { id: book.id }
                }}
              >
                <Button type="default">Ver Descrição</Button>
              </Link>
            </Grid>
          ))}
        </Content>
        <Footer>Desenvolvido por Jonathan Thomaz</Footer>
      </Layout>
    </>
  );
};

export default Home;
