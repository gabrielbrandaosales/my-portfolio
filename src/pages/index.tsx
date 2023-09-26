import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import Intro from '@/components/Intro';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Brandão</title>
        <meta name="description" content="Desenvolvedor Fullstack Javascript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          marginLeft: '140px',
          marginRight: '140px',
          marginTop: '20px',
          display: 'grid',
          justifyContent: 'center',
        }}>
        <Header />
        <Intro />
      </main>
    </>
  );
}
