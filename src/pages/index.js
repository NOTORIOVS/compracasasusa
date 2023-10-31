import Form from '../components/form/form';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Image from 'next/image';
import ActionButton from '../components/ui/actionButton';
import ActionButton2 from '../components/ui/actionButton2';
import man from '../../public/assets/man.png';
import img1 from '../../public/assets/05.jpg';
import img2 from '../../public/assets/06.jpg';
import stars from '../../public/assets/04.jpg';
import img3 from '../../public/assets/07.jpg';
import img4 from '../../public/assets/08.jpg';
import img5 from '../../public/assets/09.jpg';
import t1 from '../../public/assets/14.jpg';
import t2 from '../../public/assets/15.jpg';
import t3 from '../../public/assets/16.jpg';
import t4 from '../../public/assets/17.jpg';
import t5 from '../../public/assets/18.jpg';
import t6 from '../../public/assets/19.jpg';
import t7 from '../../public/assets/20.jpg';
import t8 from '../../public/landing/cc-landing-04.jpg';
import diagram360 from '../../public/landing/cc-landing-360.png';
import woodlandsmap from '../../public/landing/cc-landing-woodlandsmap.jpg';
import tex from '../../public/landing/cc-landing-tex.jpg';
import cal from '../../public/landing/cc-landing-cal.jpg';
import flo from '../../public/landing/cc-landing-flo.jpg';
import testimonnials from '../../public/landing/cc-landing-testimonio.png';
import Footer from '../components/layout/footer';
import ClientLogos from '../components/client-logos';
import Blockbuster from '../components/blockbuster';

export default function Home() {
  return (
    <>       {/* Banner */}
      <section
        className="relative h-[80vh] w-full flex flex-col justify-center items-center bg-[url('/landing/cc-landing-tex.jpg')] bg-cover">
        <div className="w-full lg:w-1/2 text-center text-white z-10 p-8">
          <h1
            className="relative font-semibold ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_60%)]">
            Tener tu casa nueva en USA puede costarte solo el 30% de su valor
          </h1>
          <p className="ft-3">Y la liquidas con las rentas de tus inquilinos</p>
        </div>
        <div className="absolute flex flex-col justify-center items-center text-white bottom-8 mt-8 md:mt-20 z-10">
          <p className="ft-1">Sigue leyendo</p>
          <div className="animate-bounce">
            <div className="ft-3 material-icons mx-auto">expand_more</div>
          </div>
        </div>
        <div className="w-full h-full absolute bg-black/30 -z-1"/>
      </section>

      <section className="reading-container">
        <p className="ft-2">
          Te voy a contar como nació este proyecto: CompraCasasUSA,<br/>
          para estar en sintonía y nos vayas conociendo un poco.<br/>
        </p>
        <p className=" ft-2">Bueno, <br/>
          hace 5 años andaba de vacaciones en Houston,
          iba de shopping, como seguramente tú también lo haces 1 o 2 veces al año.
          Y mientras esperaba a mi esposa e hijos me puse a pensar:
          "Y si ya mejor compramos una casa acá?"<br/>
        </p>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="Por qué deberías considerar una casa en USA en lugar de otro depa en México"
        image={t8}
      />

      <section className="reading-container">
        <p className=" ft-2">Aquí te comparto mi top 3 de motivos:</p>
        <h3 className="sans font-bold ft-2">Los precios!</h3>
        <p>en una comunidad de mejor nivel que un Solares o Valle Real, me
          encontré casas que costaban un tercio en comparación de mi amada Guadalajara.</p>
        <h3 className="sans font-bold ft-2">Los créditos...</h3>
        <p className=" ft-2">
          no sabes como los bancos se llegan a pelear por ganarse
          clientes mexicanos en lugar de americanos.</p>
        <h3 className="sans font-bold ft-2">Y por último: los rendimientos,</h3>
        <p className=" ft-2">
          entre plusvalía y rentas, cortas o largas, me
          di cuenta que con esta inversión podía generar casi 10 veces más que invirtiendo en bonos, CETES o en el
          S&P-500</p>
      </section>
      {/* Quote */}
      <Blockbuster
        overhead="Por qué CCUSA?"
        title="Más que una simple inmobiliaria: somos tus asesores en inversiones inmobiliarias internacionales"
        image={diagram360}
      />

      {/* Story */}
      <section className="reading-container">
        <p className="ft-2">
          Basta de cuento, entremos en algo más profundo.<br/>
          Y es que la mayoría de nuestros clientes siempre tienen la duda:
        </p>
        <p className="ft-2">
          <b>Cómo le hacemos y cuál es nuestro proceso</b>
        </p>
        <p className="ft-2">
          Pues con el fin de hacerte fácil esta inversión para crecer tu patrimonio: tenemos un proceso de <b>8
          pasos</b><br/>
          Como decía antes: no somos una simple inmobiliaria.<br/>
          Pues comprar una casa en USA no solo es elegir la casa, dar el enganche y listo.<br/>
          Es una serie de pasos un poco más complejos:<br/><br/>
          1. Hacemos un scouting de comunidades 5 estrellas<br/>
          2. Te pre-calificamos para tu crédito hipotecario en USA<br/>
          3. Te ayudamos a seleccionar tu casa según tu proyecto<br/>
          4. Creamos una estructura legal internacional que protege tu patrimonio<br/>
          5. Abrimos tus cuentas de banco en USA<br/>
          6. Tienes una cita guiada en el Design Center para elegir fachada, acabados y tech<br/>
          7. Certificamos la calidad de la construcción con perito<br/>
          8. Te acompañamos a firmar ante empresa de título<br/><br/>
          Para tu buena suerte, nosotros contamos con un equipo especializado en todo este proceso. Para literalmente
          entregarte una llave en mano.
        </p>
      </section>

      <Blockbuster
        overhead="Nuestro target"
        title='Eres un inversionista, buscas un "second home" o mudarte a USA? Entonces si hacemos match.'
        image={cal}
      />

      <section>
        <div className="w-screen mx-auto flex flex-col items-center justify-center">
          <p className="reading-container ft-2">
            Lo más seguro es que estés aquí por una gran oportunidad de
            inversión en una de las economías más estables del mundo y que
            te ayudemos a multiplicar tu dinero sin poner en riesgo el
            patrimonio de tu familia. Y sí, para eso estamos aquí, pero, y
            si también pudieras
          </p>
          <div className="md:grid md:grid-cols-3 flex flex-col w-2/3 md:gap-8 gap-12 mt-20 mx-auto">
            <div className="gap-4 flex flex-col">
              <Image src={t5}/>
              <p className="text-center font-semibold">
                Rentar tu casa en Airbnb hasta 36 semanas del año
              </p>
            </div>
            <div className="gap-4 flex flex-col">
              <Image src={t6}/>
              <p className="text-center font-semibold">
                Vacacionar las otras 16 semanas
              </p>
            </div>
            <div className="gap-4 flex flex-col">
              <Image src={t7}/>
              <p className="text-center font-semibold">
                Inscribir a tus hijos en el sistema educativo de USA
              </p>
            </div>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Testimonios"
        title="La voz de los inversionistas que han catapultado su capital."
        image={testimonnials}
      />

      <section>
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8">
          <div className="md:hidden flex w-screen ">
            <Swiper
              className="text-white flex mt-20 "
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                {/* Gap-1 */}
                <div className="bg-brand-1 items-center flex flex-col justify-center gap-10 px-12 py-20">
                  <p className="text-center">
                    “CompraCasasUSA me acompañó en todo el trámite para comprar
                    mi propiedad en Florida, resolvieron todas mis dudas y
                    ahora mi inversión creció luego de un año.”
                  </p>
                  <p>-Alberto González</p>
                  <div className="w-2/4">
                    <Image src={stars}/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                {/* Gap-2 */}
                <div className="bg-brand-1  items-center flex flex-col justify-center gap-10 px-8 py-20">
                  <p className="text-center w-3/4 ">
                    “Invertí en una propiedad en Houston hace dos años y ahora
                    ya tengo el doble de mi inversión, además mis hijos pueden
                    ir a estudiar a las mejores escuelas de Estados Unidos,
                    solo por tener una propiedad allá. Con Compra Casas
                    aseguré mi patrimonio y el de mi familia.”
                  </p>
                  <p>-Juan Carlos</p>
                  <div className="w-2/4">
                    <Image src={stars}/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* Gap-3 */}
                <div className="bg-brand-1 items-center justify-center flex flex-col gap-10 px-12 py-20">
                  <p className="text-center">
                    “Compra Casas me acompañó en todo el trámite para comprar
                    mi propiedad en Florida, resolvieron todas mis dudas y
                    ahora mi inversión creció luego de un año.”
                  </p>
                  <p>-Jose Armesí</p>
                  <div className="w-2/4">
                    <Image src={stars}/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Reviews  */}
          <div className="">
            <div className="md:grid md:grid-cols-3 hidden gird-cols-1 gap-5 text-white mx-auto mt-20">
              {/* Gap-1 */}
              <div className="bg-brand-1 items-center flex flex-col justify-center gap-10 px-12 py-20">
                <p className="text-center">
                  “CompraCasasUSA me acompañó en todo el trámite para comprar mi
                  casa en Houston, resolvieron todas mis dudas y ahora mi
                  inversión creció luego de un año.”
                </p>
                <p>-Alberto González</p>
                <div className="w-2/4">
                  <Image src={stars}/>
                </div>
              </div>
              {/* Gap-2 */}
              <div className="bg-brand-1  items-center flex flex-col justify-center gap-10 px-8 py-20">
                <p className="text-center w-3/4 ">
                  “Invertí en una propiedad en Houston hace un año y hasta hoy
                  mi crédito se sigue pagando solo, además ya estoy pensando en mejor llevarme a mis hijos
                  a estudiar a Estados Unidos. Con CompraCasasUSA aseguré mi
                  patrimonio y el de mi familia.”
                </p>
                <p>-Juan Carlos</p>
                <div className="w-2/4">
                  <Image src={stars}/>
                </div>
              </div>
              {/* Gap-3 */}
              <div className="bg-brand-1 items-center justify-center flex flex-col gap-10 px-12 py-20">
                <p className="text-center">
                  “CompraCasasUSA me acompañó en todos los trámites para comprar mi
                  propiedad en Texas, hicieron una estructura legal y se encargaron de todos los trámites para que mi
                  patrimonio esté seguro.”
                </p>
                <p>-Jose Armesí</p>
                <div className="w-2/4">
                  <Image src={stars}/>
                </div>
              </div>
            </div>
          </div>
          <div className="h-32 bg-red-600 w-screen absolute -z-10 mt-34"/>
          <div className="flex flex-col items-center justify-center mt-40">
            <ActionButton2>
              Invierte fácil con nosotros, da click
            </ActionButton2>
          </div>
        </div>
      </section>
      {/* Tramites */}
      <Blockbuster
        overhead="Gestión Inmobiliaria"
        title="Lo mencioné antes pero voy a reforzar: De los trámites, nos encargamos nosotros"
        image={flo}
      />
      <section className="reading-container">
        <p className="ft-2">
          Te ofrecemos una experiencia integral, acompañándote desde la
          búsqueda de la propiedad hasta la asesoría financiera y legal
          que necesitas. Vas a recibir una orientación completa para que
          puedas tomar decisiones basadas en la información y la
          seguridad. Te ayudamos con:
        </p>
      </section>
      <section className="container mt-20">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="md:grid md:grid-cols-4 flex flex-col gap-12 md:gap-8">
            <div className="gap-4 flex flex-col">
              <Image src={t1}/>
              <p className="text-center font-semibold">
                Apertura de cuentas bancarias en USA desde MX
              </p>
            </div>
            <div className="gap-4 flex flex-col">
              <Image src={t2}/>
              <p className="text-center font-semibold">
                Constitución de empresas para el trámite de tu crédito
              </p>
            </div>
            <div className="gap-4 flex flex-col">
              <Image src={t3}/>
              <p className="text-center font-semibold">
                Trámite de tu visa de inversionista
              </p>
            </div>
            <div className="gap-4 flex flex-col">
              <Image src={t4}/>
              <p className="text-center font-semibold">
                Trámite de tu crédito hipotecario
              </p>
            </div>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Propiedades"
        title="Contamos con propiedades en todo USA pero nos gusta enfocarnos donde hay mayor rentabilidad"
        image={woodlandsmap}
      />

      <section className="flex flex-col container md:gap-4 gap-10">

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
              <p className="ft-2">Casas desde: $350mil usd</p>
              <p className="ft-2">Renta mensual aproximada: $2,500 a $2,700 usd</p>
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
              <p className="ft-2">Casas desde: $350mil usd</p>
              <p className="ft-2">Renta mensual aproximada: $2,500 a $2,700 usd</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 min-h-[32rem]">
            <Image src={cal} layout="fill" className="object-cover"/>
          </div>
        </div>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold">
              Agenda una cita para aclarar tus dudas y generar una pre-calificación de crédito hipotecario sin costo
            </h2>
            <div className="mt-20">
              <p>
                Ya llegaste hasta acá, ya le dedicaste al menos 5 minutos de tu valioso tiempo a leer esta
                historia.<br/><br/>
                Compártenos unos datos y enseguida agenda una cita para poder platicar más a profundidad.
              </p>

              <Form/>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
