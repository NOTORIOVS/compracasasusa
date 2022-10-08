import Link from 'next/link';
import { info } from '../../../info';
import { useEffect, useRef, useState } from 'react';
import { menu } from '../navigation/menu';

const nav = [
  {label: 'Home', href: '/'},
  {label: 'About', href: '/'},
  {
    label: 'Has Children',
    children: [
      {label: 'Child 1', href: '/test'},
      {label: 'Child 2', href: '/'},
      {label: 'Child 3', href: '/'},
    ],
  },
  {
    label: 'More Children',
    children: [
      {label: 'Child 1', href: '/'},
      {label: 'Child 2', href: '/'},
      {label: 'Child 3', href: '/'},
    ],
  },
];

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
        {menu({nav: children})}
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
            <div className="ft-0">
              {menu({nav, isMain: true})}
            </div>
          </div>
        </div>
        {sub && subHeader(sub)}
      </header>
    </>
  )
}