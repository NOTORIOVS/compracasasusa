import Head from 'next/head';
import { info } from '../../../info';
import Header from './header';
import Footer from './footer';

export default function Layout({children}) {
  const sub = {
    bgColor: 'bg-gray-100',
      logo: {
        href: '/',
        content: <h1 className="ft-2 !mb-0">Subheader</h1>,
      },
      children: <p className="!mb-0 -ft-1">Subheader Right Side</p>
  }

  return (
    <>
      <Head>
        <title>{info.companyName}</title>
        <meta name='description' content={info.description} />
      </Head>

      <Header
        sub={sub}
      />

      <main className='flex-grow'>
          {children}
      </main>

      <Footer />
    </>
  )
}