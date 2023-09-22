import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

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
      <main>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={80}
          priority
        />
      </main>
    </>
  );
}
