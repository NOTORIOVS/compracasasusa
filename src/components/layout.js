import Head from 'next/head';
import Link from 'next/link';
import { info } from '../../info';
import { useEffect, useState } from 'react';

export default function Layout({children}) {
  const [whiteHeader, setWhiteHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const position = window.pageYOffset;
      setWhiteHeader(position >= 720)
    })
  }, [])

  return (
    <>
      <Head>
        <title>{info.companyName}</title>
        <meta name='description' content={info.description} />
      </Head>
      <header className={`fixed top-0 left-0 right-0 z-40 ${whiteHeader && 'bg-white/80 shadow-md'}`}>
        <div className='container flex justify-between items-center'>
          <Link href='/' passhref>
            <a className={`${whiteHeader ? 'w-24 py-4' : 'w-40 py-8'}`}>
              <img src='/images/logo.svg' alt={info.companyName} />
            </a>
          </Link>
          <a
            href={`//wa.me/${info.whatsapp}`}
            target='_blank'
            className='hidden text-brand-5 !font-medium md:flex after:content-["→"] after:ml-4'
            rel="noreferrer"
            onClick={() => fbq('track', 'Contact')}
          >
            Envíanos un Whatsapp
          </a>
        </div>
      </header>

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