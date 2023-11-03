import Image from 'next/image';
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
          Acabas de dar el primer paso hacia la inversión más exclusiva de <nobr>real estate en USA.</nobr>
        </h2>
        <p className="text-center ft-6 mt-20">Si no se abrió nuestro calendario para agendar tu sesión estratégica</p>
        <a
          className="button !bg-brand-2 ft-4 flex justify-center items-center mt-6"
          href="https://compracasasusa.pipedrive.com/scheduler/Gk5k7xFK/asesoria-inmobiliaria-internacional"
          target="_blank"
        >
          <span className="material-icons">arrow_forward</span>Da click aquí<span
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
