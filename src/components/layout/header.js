import Link from "next/link";
import { info } from "../../../info";
import { useEffect, useRef, useState } from "react";
import WhatsButton from "../ui/whatsButton";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
// import igLogo from "../../../public/assets/IG-Logo.svg";

export default function Header() {
  const [mainHeaderHeight, setMainHeaderHeight] = useState();
  const mainHeader = useRef();

  useEffect(() => {
    setMainHeaderHeight(mainHeader.current.offsetHeight / 10);
  }, [mainHeader]);

  return (
    <>
      <header
        className={` flex items-center justify-center bg-white z-[99] hover:top-0

        `}
      >
        <div
          ref={mainHeader}
          className="fixed bg-white backdrop-blur-lg border-b w-screen shadow-sm top-0 h-[8rem] items-center flex z-[1]"
        >
          <div className="container flex justify-between items-center">
            <Link href="/" passhref>
              <a className="w-40 py-4">
                <Image src={logo} fill={true} alt={info.companyName} />
              </a>
            </Link>
            <div className="flex items-center space-x-8 ft-0">
              <a
                href={`//wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`}
                target="_blank"
                className="flex"
              >
                <WhatsButton>Mándame un WhatsApp</WhatsButton>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
