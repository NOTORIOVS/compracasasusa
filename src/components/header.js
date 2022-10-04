import Link from 'next/link';
import { info } from '../../info';

export default function Header({sub}) {

  const subHeader = ({ bgColor, logo, children }) => (
    <div className={`${bgColor} w-full shadow-md`}>
      <div className="container flex justify-between items-center py-2">
        <Link href={logo.href} passhref>
          <a>{logo.content}</a>
        </Link>
        {children}
      </div>
    </div>
  )

  return (
    <>
      <header className={`sticky ${ sub ? '-top-[7.1rem]' : 'top-0'} left-0 right-0 bg-white`}>
        <div className="relative top-0 shadow-md z-[1]">
          <div className='container flex justify-between items-center'>
            <Link href='/' passhref>
              <a className="w-24 py-4">
                <img src='/images/logo.svg' alt={info.companyName} />
              </a>
            </Link>
            <div className="ft-0">Main Header Right Side</div>
          </div>
        </div>
        {sub && subHeader(sub)}
      </header>
    </>
  )
}