import Link from "next/link";
import { info } from "../../../info";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/CCU-Logo-White.png";

export default function Header() {
  const [mainHeaderHeight, setMainHeaderHeight] = useState();
  const mainHeader = useRef();

  useEffect(() => {
    setMainHeaderHeight(mainHeader.current.offsetHeight / 10);
  }, [mainHeader]);

  return (
    <>
      <header
        className={`flex items-center justify-center z-[99] hover:top-0`}
      >
        <div
          ref={mainHeader}
          className="fixed bg-brand-1 backdrop-blur-lg border-b-2 border-brand-2 w-screen shadow-sm top-0 h-[8rem] items-center flex z-[1]"
        >
          <div className="container flex justify-center items-center">
            <Link href="/" passhref>
              <a className="w-[20rem] pt-4 flex items-center">
                <Image src={logo} alt={info.companyName} />
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
