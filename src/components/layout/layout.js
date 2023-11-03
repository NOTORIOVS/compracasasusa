import Head from 'next/head';
import { info } from '../../../info';
import Header from './header';
import Footer from './footer';

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>{info.companyName}</title>
        <meta name="description" content={info.description}/>
      </Head>
      <Header/>

      <main className="flex-grow">{children}</main>

      <Footer/>
    </>
  );
}
