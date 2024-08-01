import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import t1 from '../../public/assets/14.jpg';
import t2 from '../../public/assets/15.jpg';
import t3 from '../../public/assets/16.jpg';
import t4 from '../../public/assets/17.jpg';
import t8 from '../../public/landing/cc-landing-tex.jpg';
import why from '../../public/landing/cc-landing-05.jpeg';
import diagram360 from '../../public/landing/cc-landing-360.png';
import school from '../../public/landing/cc-landing-school.jpg';
import vacation from '../../public/landing/cc-landing-vacation.jpg';
import rental from '../../public/landing/cc-landing-rental.jpg';
import woodlandsmap from '../../public/landing/cc-landing-woodlandsmap.jpg';
import tex from '../../public/landing/cc-landing-tex.jpg';
import cal from '../../public/landing/cc-landing-cal.jpg';
import flo from '../../public/landing/cc-landing-flo.jpg';
import testimonials from '../../public/landing/cc-landing-testimonio.png';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    })
  })

  return (
    <>       {/* Banner */}
      <section
        className="relative h-[80vh] w-full flex flex-col justify-center items-center bg-[url('/landing/cc-landing-04.jpg')] bg-cover">
        <div className="w-full lg:w-1/2 text-center text-white z-10 p-8">
          <h1
            className="relative font-semibold ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_60%)]">
            Tener tu casa nueva en USA puede costarte solo el 30% de su valor
          </h1>
          <div className="flex flex-col justify-center items-center mt-12">
            <p className="ft-2 font-medium text-center mb-12">Agenda una sesión estratégica y <br/>pre-califica para tu crédito hipotecario sin costo</p>
            <Link href="#contact"><a onClick={() => setLastClick('hero')} className="button mb-4">Agenda una sesión estratégica</a></Link>
          </div>
        </div>
        <div className="absolute flex flex-col justify-center items-center text-white bottom-8 mt-8 md:mt-20 z-10">
          <p className="ft-1">Sigue leyendo</p>
          <div className="animate-bounce">
            <div className="ft-3 material-icons mx-auto">expand_more</div>
          </div>
        </div>
        <div className="w-full h-full absolute bg-black/30 -z-1"/>
      </section>

      <section className="reading-container mb-16">
        <div className="flex border-b border-brand-1 pb-4 mb-8">
          <span className="material-icons mr-2 -ft-2">timer</span>
          <p className="-ft-2" style={{marginBlockEnd: 0}}>Tiempo estimado: 4 min</p>
        </div>
        <p className="ft-2">
          Buscamos facilitarte el poder crecer tu patrimonio en USA, entre asesores de bienes raíces y expertos en
          materia corporativa y fiscal internacional.<br/><br/>
          Así, tú puedes enfocarte en cosas que requieren tu atención: <br/>tus negocios,<br/> tu familia<br/> y otros
          temas que importan más que
          intentar generar una estrategia de inversión.<br/><br/>
          Y probablemente, te termine costando más tiempo y dinero.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a onClick={() => setLastClick('story')} className="button mb-4">Contáctanos, da clic</a></Link>
          <p className="-ft-2 text-center">Agenda una sesión y pre-califica para tu crédito hipotecario sin costo</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="Por qué deberías considerar una casa en USA en lugar de otro depa en México"
        image={t8}
      />

      <section className="reading-container my-16">
        <p className=" ft-2">Aquí te comparto mi top 3 de motivos:</p>
        <h3 className="sans font-bold ft-2">Los precios!</h3>
        <p className="ft-2">En una comunidad con casa club, alberca, lagos, campos de golf y otras amenidades, me
          encontré casas que costaban un tercio en comparación de mi amada Guadalajara.</p>
        <h3 className="sans font-bold ft-2">Los créditos...</h3>
        <p className=" ft-2">
          No sabes como los bancos se llegan a pelear por ganarse
          clientes mexicanos en lugar de americanos.</p>
        <h3 className="sans font-bold ft-2">Y por último: los rendimientos,</h3>
        <p className=" ft-2">
          Entre plusvalía y rentas, cortas o largas, me
          di cuenta que con esta inversión podía generar casi 10 veces más que invirtiendo en bonos, CETES o en el
          S&P-500.</p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a onClick={() => setLastClick('benefits')} className="button mb-4">3 grandes motivos ¿no? Da clic</a></Link>
          <p className="-ft-2 text-center">Agenda una sesión y pre-califica para tu crédito hipotecario sin costo</p>
        </div>
      </section>
      {/* Quote */}
      <Blockbuster
        overhead="Por qué CCUSA?"
        title="Más que una simple inmobiliaria: somos tus asesores en inversiones inmobiliarias internacionales"
        image={why}
      />

      {/* Story */}
      <section className="reading-container my-16">
        <p className="ft-2">
          La mayoría de nuestros clientes siempre tiene la duda:
        </p>
        <p className="ft-2">
          <b>Cómo le hacemos y cuál es nuestro proceso</b>
        </p>
        <p className="ft-2">
          Como decía antes: no somos una simple inmobiliaria.<br/>
          Pues comprar una casa en USA no solo es elegir la casa, dar el enganche y listo.<br/>
          Tenemos un proceso de <nobr><b>8 pasos</b></nobr>:
        </p>
        <ol>
          <li className="ft-1">Hacemos un scouting de comunidades <b>5 estrellas</b></li>
          <li className="ft-1">Te pre-calificamos para tu <b>crédito hipotecario</b> en USA</li>
          <li className="ft-1">Te ayudamos a <b>seleccionar tu casa</b> según tu proyecto</li>
          <li className="ft-1">Creamos una <b>estructura legal internacional</b> que protege tu patrimonio</li>
          <li className="ft-1">Abrimos tus <b>cuentas de banco en USA</b></li>
          <li className="ft-1">Tienes una cita guiada en el <b>Design Center</b> para elegir fachada, acabados y tech
          </li>
          <li className="ft-1"><b>Certificamos la calidad</b> de la construcción con perito</li>
          <li className="ft-1">Te acompañamos a <b>firmar</b> ante empresa de título<br/></li>
        </ol>
        <p className="ft-2">
          Contamos con un equipo especializado en este proceso. Para literalmente
          entregarte una llave en mano.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a onClick={() => setLastClick('process')} className="button mb-4">¿Quieres saber más? Da clic</a></Link>
          <p className="-ft-2 text-center">Agenda una sesión y pre-califica para tu crédito hipotecario sin costo</p>
        </div>
      </section>
      <section className="w-full bg-brand-6">
        <div className="container">
          <Image src={diagram360}/>
        </div>
      </section>
      <Blockbuster
        overhead="Nuestro target"
        title='¿Eres un inversionista, buscas un "second home" o mudarte a USA? Entonces sí hacemos match.'
        image={cal}
      />

      <section className="my-16">
        <div className="w-screen mx-auto flex flex-col items-center justify-center">
          <p className="reading-container ft-2">
            Lo más seguro es que estés aquí por una gran oportunidad de
            inversión en una de las economías más estables del mundo y que
            te ayudemos a multiplicar tu dinero sin poner en riesgo el
            patrimonio de tu familia. Y sí, para eso estamos aquí, pero, y
            si también pudieras...
          </p>
          <div className="container grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-20 mx-auto">
            <div className="relative gap-4 flex flex-col h-[32rem]">
              <Image src={rental} className="object-cover flex-grow"/>
              <p className="text-center font-semibold">
                Poner tu casa en renta
              </p>
            </div>
            <div className="relative gap-4 flex flex-col h-[32rem]">
              <Image src={vacation} className="object-cover flex-grow"/>
              <p className="text-center font-semibold">
                Vacacionar
              </p>
            </div>
            <div className="relative gap-4 flex flex-col h-[32rem]">
              <Image src={school} className="object-cover flex-grow"/>
              <p className="text-center font-semibold">
                Inscribir a tus hijos en el sistema educativo de USA
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a onClick={() => setLastClick('target')} className="button mb-4">¡Motivos sobran! Da clic</a></Link>
          <p className="-ft-2 text-center">Agenda una sesión y pre-califica para tu crédito hipotecario sin costo</p>
        </div>
      </section>

      <Blockbuster
        overhead="Testimonios"
        title="La voz de los inversionistas que han catapultado su capital."
        image={testimonials}
      />

      <section className="md:my-16">
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8">
          {/* Reviews  */}
          <div className="">
            <div className="grid md:grid-cols-3 gird-cols-1 gap-5 text-white mx-auto mt-20">
              <div className="bg-brand-1 flex flex-col gap-10 px-12 py-20 rounded-xl">
                <p>
                  “CompraCasasUSA me acompañó en todo el trámite para comprar mi casa en Houston, resolvieron todas mis
                  dudas y después de un año, mi inversión creció.”
                </p>
                <div className="relative w-1/2 flex justify-between">
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                </div>
                <p className="text-right">— Alberto González</p>
              </div>
              {/* Gap-2 */}
              <div className="bg-brand-1 flex flex-col gap-10 px-12 py-20 rounded-xl">
                <p>
                  “Invertí en una propiedad en Houston hace un año y hasta hoy
                  mi crédito se sigue pagando solo, además ya estoy pensando en mejor llevarme a mis hijos
                  a estudiar a Estados Unidos. Con CompraCasasUSA aseguré mi
                  patrimonio y el de mi familia.”
                </p>
                <div className="relative w-1/2 flex justify-between">
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                </div>
                <p className="text-right">— Juan Carlos</p>
              </div>
              {/* Gap-3 */}
              <div className="bg-brand-1 flex flex-col gap-10 px-12 py-20 rounded-xl">
                <p>
                  “CompraCasasUSA me acompañó en todos los trámites para comprar mi
                  propiedad en Texas, hicieron una estructura legal y se encargaron de todos los trámites para que mi
                  patrimonio esté seguro.”
                </p>
                <div className="relative w-1/2 flex justify-between">
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                </div>
                <p className="text-right">— Jose Armesí</p>
              </div>
            </div>
          </div>
          <div className="h-32 bg-red-600 w-screen absolute -z-10 mt-34"/>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a onClick={() => setLastClick('testimonials')} className="button mb-4">Agenda una cita, da clic</a></Link>
          <p className="-ft-2 text-center">Agenda una sesión y pre-califica para tu crédito hipotecario sin costo</p>
        </div>
      </section>
      {/* Tramites */}
      {/*<Blockbuster*/}
      {/*  overhead="Gestión Inmobiliaria"*/}
      {/*  title="Lo mencioné antes pero voy a reforzar: de los trámites, nos encargamos nosotros"*/}
      {/*  image={flo}*/}
      {/*/>*/}
      {/*<section className="container my-16">*/}
      {/*  <p className="reading-container ft-2">*/}
      {/*    Te ofrecemos una experiencia integral, acompañándote desde la*/}
      {/*    búsqueda de la propiedad hasta la asesoría financiera y legal*/}
      {/*    que necesitas. <br/><br/>*/}
      {/*    Vas a recibir una orientación completa para que*/}
      {/*    puedas tomar decisiones basadas en la información y la*/}
      {/*    seguridad.<br/><br/>*/}
      {/*    Te ayudamos con:*/}
      {/*  </p>*/}
      {/*  <div className="flex flex-col items-center justify-center w-full">*/}
      {/*    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">*/}
      {/*      <div className="gap-4 flex flex-col">*/}
      {/*        <Image src={t1}/>*/}
      {/*        <p className="text-center font-semibold">*/}
      {/*          Apertura de cuentas bancarias en USA desde MX*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      <div className="gap-4 flex flex-col">*/}
      {/*        <Image src={t2}/>*/}
      {/*        <p className="text-center font-semibold">*/}
      {/*          Constitución de empresas para el trámite de tu crédito*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      <div className="gap-4 flex flex-col">*/}
      {/*        <Image src={t3}/>*/}
      {/*        <p className="text-center font-semibold">*/}
      {/*          Trámite de tu visa de inversionista*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      <div className="gap-4 flex flex-col">*/}
      {/*        <Image src={t4}/>*/}
      {/*        <p className="text-center font-semibold">*/}
      {/*          Trámite de tu crédito hipotecario*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="flex flex-col justify-center items-center mt-16">*/}
      {/*    <Link href="#contact"><a onClick={() => setLastClick('formalities')} className="button mb-4">Una asesoría llave en mano, clic</a></Link>*/}
      {/*    <p className="-ft-2 text-center">Agenda una sesión y pre-califica para tu crédito hipotecario sin costo</p>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <Blockbuster
        overhead="Propiedades"
        title="Contamos con propiedades en todo USA pero nos gusta enfocarnos donde hay mayor rentabilidad"
        image={woodlandsmap}
      />

      <section className="flex flex-col container md:gap-4 gap-10 my-16">

        <div className="flex flex-col md:flex-row-reverse items-stretch justify-stretch md:p-16">
          <div className="w-full md:w-1/2 md:p-14 mb-8 md:border-r-8 border-brand-2">
            <div className="flex md:flex-col">
              <p className="overhead mr-4">Texas</p>
              <h3 className="ft-6">The Woodlands</h3>
            </div>
            <div className="mt-auto">
              <p className="ft-2">Casas desde: $350mil usd</p>
              <p className="ft-2">Renta mensual aproximada: $2,500 a $2,700 usd</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 min-h-[32rem]">
            <Image src={tex} layout="fill" className="object-cover"/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-stretch md:p-16">
          <div className="w-full md:w-1/2 md:p-14 mb-8 md:border-l-8 border-brand-2">
            <div className="flex md:flex-col">
              <p className="overhead mr-4">Florida</p>
              <h3 className="ft-6">Miami</h3>
            </div>
            <div className="mt-auto">
              <p className="ft-2">Casas desde: $470mil usd</p>
              <p className="ft-2">Renta mensual aproximada: $3,300 a $3,700 usd</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 min-h-[32rem]">
            <Image src={flo} layout="fill" className="object-cover"/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-stretch justify-stretch md:p-16">
          <div className="w-full md:w-1/2 md:p-14 mb-8 md:border-r-8 border-brand-2">
            <div className="flex md:flex-col">
              <p className="overhead mr-4">California</p>
              <h3 className="ft-6">Temecula</h3>
            </div>
            <div className="mt-auto">
              <p className="ft-2">Casas desde: $461mil usd</p>
              <p className="ft-2">Renta mensual aproximada: $3,100 a $3,500 usd</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 min-h-[32rem]">
            <Image src={cal} layout="fill" className="object-cover"/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a onClick={() => setLastClick('properties')} className="button mb-4">¿Qué opinas? Da clic</a></Link>
          <p className="-ft-2 text-center">Agenda una sesión y pre-califica para tu crédito hipotecario sin costo</p>
        </div>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Obtén una sesión de estrategia inmobiliaria y una <nobr>pre-calificación</nobr> de tu crédito hipotecario sin costo
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Ya llegaste hasta acá, <br/>ya le dedicaste al menos 5 minutos de tu valioso tiempo a leer esta
                historia.<br/><br/>
                Ayúdanos con tus datos y a responder 5 preguntas para agendar tu sesión estratégica.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
