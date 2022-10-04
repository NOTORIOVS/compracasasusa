import Head from 'next/head';
import { info } from '../../info';
import Header from './header';

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


      <div className='flex md:hidden fixed bottom-0 right-0 left-0 p-8 z-40 bg-brand-3'>
        <a
          href={`//wa.me/${info.whatsapp}`}
          target='_blank'
          className='!font-medium text-white after:content-["→"] after:ml-4'
          rel="noreferrer"
          onClick={() => fbq('track', 'Contact')}
        >
          Inscríbete ya
        </a>
      </div>

      <main className='flex-grow'>
          {children}
      </main>

      <footer className='mb-24 md:mb-0 border-t border-gray-200'>
        <div className='container flex p-8 itex-center justify-between'>
          <div className="flex flex-col">
            <a href="https://www.talaveramodels.com/avisodeprivacidad/" target="_blank" className="link !mt-0" rel="noreferrer">
              Aviso de privacidad
            </a>
          </div>
          <div className="my-auto">
            <p className='ft-0 m-0'>{`${info.address.address}, ${info.address.col} C.P. ${info.address.cp}, ${info.address.city}, ${info.address.state}`}</p>
          </div>
        </div>
        <div className='bg-brand-1'>
          <div className='container p-8'>
            <p className='text-center text-white smallest m-0'>{info.companyName} © 2022</p>
          </div>
        </div>
      </footer>
    </>
  )
}