import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/CCU-Logo-White.png';

export default function Header() {
  return (

    <header
      className={`sticky top-0 bg-brand-1 backdrop-blur-lg border-b-4 border-brand-2 w-screen shadow-sm h-[8rem] flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex items-center z-[1]">
        <div className="container flex justify-center items-center">
          <Link href="/" passhref>
            <a className="w-[20rem] pt-4 flex items-center">
              <Image src={logo} alt={info.companyName}/>
            </a>
          </Link>
        </div>
      </div>
    </header>

  );
}
