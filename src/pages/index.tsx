import React from 'react';
import Head from 'next/head';
import { BookOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import Grid from 'antd/lib/card/Grid';
import ButtonGroup from 'antd/lib/button/button-group';

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
          <Grid>
            <BookOutlined style={{ fontSize: '16px', color: '#faad14' }} />
            <p>
              <span>Nome do livro:</span>
              <span>Aqui vai o nome do livro</span>
            </p>
            <p>
              <span>Autor:</span>
              <span>Aqui vai o autor</span>
            </p>
            <p>
              <span>Número de páginas:</span>
              <span>Aqui vai o numero de paginas</span>
            </p>
            <p>
              <span>Gêneros:</span>
              <span>Aqui vai os generos</span>
            </p>
            <p>
              <span>Editoras:</span>
              <span>Aqui vai as editoras</span>
            </p>
            <Button type="default" >Ver Descrição</Button>
          </Grid>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
