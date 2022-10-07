import Link from 'next/link';
import { info } from '../../../info';
import { useEffect, useRef, useState } from 'react';

export default function Header({sub}) {
  const [mainHeaderHeight, setMainHeaderHeight] = useState();
  const mainHeader = useRef();

  useEffect(() => {
    setMainHeaderHeight(mainHeader.current.offsetHeight / 10);
  }, [mainHeader])

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
      <header
        className={`sticky left-0 right-0 bg-white z-[99] hover:top-0
          ${sub ? `-top-[${mainHeaderHeight}rem]` : 'top-0'}
        `}
      >
        <div
          ref={mainHeader}
          className="relative top-0 shadow-md z-[1]"
        >
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