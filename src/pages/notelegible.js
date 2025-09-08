import Image from 'next/image';
import { info } from '../../info';
import t8 from '../../public/landing/cc-landing-04.jpg';
import tex from '../../public/landing/cc-landing-tex.jpg';
import cal from '../../public/landing/cc-landing-cal.jpg';
import flo from '../../public/landing/cc-landing-flo.jpg';
import testimonials from '../../public/landing/cc-landing-testimonio.png';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center pt-20 px-0">
      <div className="container md:w-1/2 flex flex-col items-center">
        <h2 className="ft-8 text-center">
          Gracias por tu interés en nuestras casas en USA.
        </h2>
        <p className="text-center ft-4 mt-8">Según tus respuestas, notamos que actualmente no cuentas con el apartado o enganche necesario para continuar el proceso.</p>
        <p className="text-center ft-4 mt-20">Si crees que hubo un error o deseas platicar tu situación más a detalle</p>
        <a
          className="button !bg-brand-5 ft-4 flex justify-center items-center mt-8"
          href={`https://wa.me/${info.whatsapp.value}`}
          target="_blank"
        >
          <span className="material-icons">arrow_forward</span> Mándanos un WhatsApp <span
          className="text-white material-icons">arrow_back</span>
        </a>
      </div>
      <div className="relative mt-40 grid grid-cols-3 md:grid-cols-6">
        <div className="relative h-[20rem]"><Image src={t8} className="object-cover" layout="fill"/></div>
        <div className="relative h-[20rem]"><Image src={tex} className="object-cover" layout="fill"/></div>
        <div className="relative h-[20rem]"><Image src={cal} className="object-cover" layout="fill"/></div>
        <div className="relative h-[20rem]"><Image src={flo} className="object-cover" layout="fill"/></div>
        <div className="relative h-[20rem]"><Image src={testimonials} className="object-cover" layout="fill"/></div>
        <div className="relative h-[20rem]"><Image src={t8} className="object-cover" layout="fill"/></div>
      </div>
    </section>
  );
}
