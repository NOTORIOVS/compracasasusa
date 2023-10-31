import Link from "next/link";
import { info } from "../../../info";
import { useEffect, useRef, useState } from "react";
import WhatsButton from "../ui/whatsButton";
import Image from "next/image";
import logo from "../../../public/CCU-Logo-White.png";
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
        className={`flex items-center justify-center z-[99] hover:top-0

        `}
      >
        <div
          ref={mainHeader}
          className="fixed bg-brand-1 backdrop-blur-lg border-b-2 border-brand-2 w-screen shadow-sm top-0 h-[8rem] items-center flex z-[1]"
        >
          <div className="container flex justify-between items-center">
            <Link href="/" passhref>
              <a className="w-[20rem] pt-4 flex items-center">
                <Image src={logo} alt={info.companyName} />
              </a>
            </Link>
            <div className="flex items-center space-x-8 ft-0">
              <a
                href={`//wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`}
                target="_blank"
                className="flex"
              >
                <WhatsButton>Mándanos un WhatsApp</WhatsButton>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
