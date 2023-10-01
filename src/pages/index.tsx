import Head from 'next/head';
import { Inter, Fira_Sans } from '@next/font/google';
import Header from '@/components/Layout/Header';
import Introduction from '@/components/Introduction';
import Experience from '@/components/Experience';
import Footer from '@/components/Layout/Footer';
import Main from '@/components/Layout/Main';
import ScrollToTopButton from '@/components/Buttons/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });
const fira = Fira_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel Brandão</title>
        <meta name="description" content="Desenvolvedor Fullstack Javascript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main>
        <Introduction />
        <Experience />
        <ScrollToTopButton />
      </Main>
      <Footer />
    </div>
  );
}
