import Form from "../components/form/form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import ActionButton from "../components/ui/actionButton";
import ActionButton2 from "../components/ui/actionButton2";
import banner from "../../public/assets/00.jpg";
import man from "../../public/assets/man.png";
import flo from "../../public/assets/01.jpg";
import tex from "../../public/assets/02.jpg";
import cal from "../../public/assets/03.jpg";
import img1 from "../../public/assets/05.jpg";
import img2 from "../../public/assets/06.jpg";
import stars from "../../public/assets/04.jpg";
import img3 from "../../public/assets/07.jpg";
import img4 from "../../public/assets/08.jpg";
import img5 from "../../public/assets/09.jpg";
import t1 from "../../public/assets/14.jpg";
import t2 from "../../public/assets/15.jpg";
import t3 from "../../public/assets/16.jpg";
import t4 from "../../public/assets/17.jpg";
import t5 from "../../public/assets/18.jpg";
import t6 from "../../public/assets/19.jpg";
import t7 from "../../public/assets/20.jpg";
import Footer from "../components/layout/footer";
import ClientLogos from "../components/client-logos";

export default function Home() {
  return (
    <div>
      <main className="mt-[8rem] relative">
        {/* Banner */}
        <section>
          <div className="flex relative w-[100%] h-[62rem] ">
            <Image src={banner} layout="fill" objectFit="cover" />
          </div>
          <div className="absolute top-[20rem] z-10 text-white md:pl-[10rem] pl-[5rem] md:w-[40%]">
            <h1 className="font-semibold">La forma fácil de invertir en USA</h1>
            <div className="md:mt-0 mt-5 ">
              <ActionButton>Contactanos YA!</ActionButton>
            </div>
          </div>
        </section>
        {/* About  */}
        <seciton>
          <div className="flex md:flex md:flex-row flex-col-reverse  max-w-[100rem] w-screen items-center justify-between relative mx-auto mt-10 mb-20">
            <div className="md:w-2/3 w-4/5">
              <p>
                Primero me voy a presentar, Soy Carlos Fernandez de Castro, soy
                Agente de Bienes Raíces Internacional y ya llevo un rato, más de
                30 años dedicándome a desarrollar proyectos inmobiliarios y
                ayudando a mis clientes a invertir en inmuebles de alta
                rentabilidad.
              </p>
            </div>
            <div className="w-2/3">
              <Image src={man} />
            </div>
          </div>
        </seciton>
        {/* Quote */}
        <seciton>
          <div className="flex flex-col w-screen md:mb-0 mx-auto relative">
            <div
              className="bg-brand-1 h-32 md:flex flex-grow absolute left-0 right-0 hidden -z-1"
              style={{ top: "calc(50% - 4rem)" }}
            />
            <div className="flex flex-col mx-auto items-center justify-center z-10">
              <div className="bg-white mx-auto items-center justify-center md:w-9/12  p-20">
                <div className="border p-14">
                  <h2 className="font-extralight italic md:px-[15rem] text-center">
                    Hace 5 años me encontré con un proyecto en Texas que tomé
                    como inversión personal y me fue de maravilla
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </seciton>
        {/* Story */}
        <section>
          <div className="flex flex-col w-screen max-w-[100rem] mx-auto mt-20">
            <div className="w-2/3 flex items-center justify-center mx-auto mb-20">
              <p>
                Entonces, comencé este proyecto de Compra Casas USA. Ahora somos
                un grupo de expertos en la inversión de bienes raíces, con el
                propósito de darte las herramientas necesarias para que el
                proceso de adquisición de una propiedad en USA sea más fácil.
                Cada año hacemos un *scouting* en USA para poder asesorarte con
                las mejores oportunidades de inversión en los estados con la
                mayor plusvalía, crecimiento y rentabilidad que hoy, en 2023
                son:
              </p>
            </div>
            <div className="md:flex md:flex-row flex flex-col container md:gap-4 gap-10 font-semibold">
              <div className="flex flex-col items-center justify-center">
                <h4>Florida</h4>
                <Image src={flo} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Texas</h4>
                <Image src={tex} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>California</h4>
                <Image src={cal} />
              </div>
            </div>
          </div>
        </section>
        {/* Experiencia */}
        <section>
          <div className="flex flex-col w-screen items-center justify-center mx-auto mt-44">
            <div>
              <h3 className="text-center md:text-left font-semibold md:mt-0 mt-20">
                Llevamos más de 10 desarrollos que han generado
              </h3>
            </div>
            <div className="md:flex md:flex-row flex flex-col mx-auto max-w-5xl md:items-start font-semibold items-center justify-center flex-grow md:gap-40 gap-20 md:mt-16 mt-10">
              <div className="w-2/3 flex flex-col items-center justify-center  gap-5">
                <Image src={img1} />
                <p>Plusvalía 12-24%</p>
              </div>
              <div className="w-2/3 flex flex-col items-center justify-center gap-5">
                <Image src={img2} />
                <p className="text-center">
                  Rentabilidad en dólares desde el 15%
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-20 juistify-center mx-auto">
              <ActionButton2>
                Invierte fácil con nosotros, da click
              </ActionButton2>
            </div>
          </div>
        </section>
        {/* Reviews */}
        <section>
          <div className="mt-52 flex flex-col items-center justify-center md:mx-52 mx-8 md:mt-72">
            <h2 className="md:w-3/5 font-semibold text-center ">
              La voz de los inversionistas que han catapultado su capital
            </h2>
            <div className="md:hidden flex w-screen ">
              <Swiper
                className="text-white flex mt-20 "
                navigation={true}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  {/* Gap-1 */}
                  <div className="bg-brand-1 items-center flex flex-col justify-center gap-10 px-12 py-20 font-semibold">
                    <p className="text-center">
                      “Compra Casas me acompañó en todo el trámite para comprar
                      mi propiedad en Florida, resolvieron todas mis dudas y
                      ahora mi inversión creció luego de un año.”
                    </p>
                    <p>-Alberto González</p>
                    <div className="w-2/4">
                      <Image src={stars} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  {/* Gap-2 */}
                  <div className="bg-brand-1  items-center flex flex-col justify-center gap-10 px-8 py-20 font-semibold">
                    <p className="text-center w-3/4 ">
                      “Invertí en una propiedad en Houston hace dos años y ahora
                      ya tengo el doble de mi inversión, además mis hijos pueden
                      ir a estudiar a las mejores escuelas de Estados Unidos,
                      solo por tener una propiedad allá. Con Compra Casas
                      aseguré mi patrimonio y el de mi familia.”
                    </p>
                    <p>-Juan Carlos</p>
                    <div className="w-2/4">
                      <Image src={stars} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* Gap-3 */}
                  <div className="bg-brand-1 items-center justify-center flex flex-col gap-10 px-12 py-20 font-semibold">
                    <p className="text-center">
                      “Compra Casas me acompañó en todo el trámite para comprar
                      mi propiedad en Florida, resolvieron todas mis dudas y
                      ahora mi inversión creció luego de un año.”
                    </p>
                    <p>-Jose Armesí</p>
                    <div className="w-2/4">
                      <Image src={stars} />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Reviews  */}
            <div className="">
              <div className="md:grid md:grid-cols-3 hidden gird-cols-1 gap-5 text-white mx-auto mt-20">
                {/* Gap-1 */}
                <div className="bg-brand-1 items-center flex flex-col justify-center gap-10 px-12 py-20 font-semibold">
                  <p className="text-center">
                    “Compra Casas me acompañó en todo el trámite para comprar mi
                    propiedad en Florida, resolvieron todas mis dudas y ahora mi
                    inversión creció luego de un año.”
                  </p>
                  <p>-Alberto González</p>
                  <div className="w-2/4">
                    <Image src={stars} />
                  </div>
                </div>
                {/* Gap-2 */}
                <div className="bg-brand-1  items-center flex flex-col justify-center gap-10 px-8 py-20 font-semibold">
                  <p className="text-center w-3/4 ">
                    “Invertí en una propiedad en Houston hace dos años y ahora
                    ya tengo el doble de mi inversión, además mis hijos pueden
                    ir a estudiar a las mejores escuelas de Estados Unidos, solo
                    por tener una propiedad allá. Con Compra Casas aseguré mi
                    patrimonio y el de mi familia.”
                  </p>
                  <p>-Juan Carlos</p>
                  <div className="w-2/4">
                    <Image src={stars} />
                  </div>
                </div>
                {/* Gap-3 */}
                <div className="bg-brand-1 items-center justify-center flex flex-col gap-10 px-12 py-20 font-semibold">
                  <p className="text-center">
                    “Compra Casas me acompañó en todo el trámite para comprar mi
                    propiedad en Florida, resolvieron todas mis dudas y ahora mi
                    inversión creció luego de un año.”
                  </p>
                  <p>-Jose Armesí</p>
                  <div className="w-2/4">
                    <Image src={stars} />
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
        {/* Pitch */}
        <section>
          <div className="mt-40 mx-auto flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mx-auto md:w-2/5 container text-center my-20">
              <h2 className="font-semibold">
                Invertir en USA es minimizar el riesgo
              </h2>
              <p className="mt-20">
                Puedes comenzar a invertir **contratando** tu casa con $10,000
                USD.
                <br />
                Que no te suene raro “contratar una casa”, en EEUU todo lo
                hacemos bajo contrato con la desarrolladora inmobiliaria para
                asegurar:
              </p>
            </div>
            <div className="md:flex md:flex-row flex flex-col md:gap-8 gap-12 w-2/3 font-semibold mx-auto">
              <div className="flex flex-col items-center justify-center md:gap-5 gap-3">
                <Image src={img3} />
                <h5>Tiempos de entrega</h5>
              </div>
              <div className="flex flex-col items-center justify-center md:gap-5 gap-3">
                <Image src={img4} />
                <h5>Precio</h5>
              </div>
              <div className="flex flex-col items-center justify-center md:gap-5 gap-3">
                <Image src={img5} />
                <h5>Ubicación</h5>
              </div>
            </div>
            <div className="md:w-2/5 container mt-20">
              <p>
                Nuestra misión es ayudarte a obtener el máximo rendimiento de tu
                inversión.
              </p>
              <div className="p-10 md:text-left text-center"/>
              <p>
                Trabajamos con las constructoras más importantes de Estados
                Unidos, con el propósito de que tengas la mayor calidad posible
                en tus inmuebles.
              </p>
            </div>
          </div>
        </section>
        {/* Brand partners logos */}
        <seciton>
          <div className="w-screen items-center justify-center mt-20">
            <div className="w-screen bg-brand-1  items-center justify-center">
              <ClientLogos />
              {/* <div className="md:flex md:flex-row flex flex-col md:gap-20 gap-5 w-2/3">
                <div className="">
                  <Image src={br1} />
                </div>
                <div className="">
                  <Image src={br2} />
                </div>
                <div className="">
                  <Image src={br3} />
                </div>
                <div className="">
                  <Image src={br4} />
                </div>
              </div> */}
            </div>
            <div className="flex flex-col items-center justify-center mt-40">
              <ActionButton2>
                Invierte fácil con nosotros, da click
              </ActionButton2>
            </div>
          </div>
        </seciton>
        {/* Tramites */}
        <section>
          <div className="w-screen mx-auto mt-40 flex flex-col items-center justify-center">
            <div className="gap-10 flex flex-col md:w-2/5 container">
              <h2 className="font-semibold">
                De los trámites nosotros nos encargamos
              </h2>
              <p>
                Te ofrecemos una experiencia integral, acompañándote desde la
                búsqueda de la propiedad hasta la asesoría financiera y legal
                que necesitas. Vas a recibir una orientación completa para que
                puedas tomar decisiones basadas en la información y la
                seguridad. Te ayudamos con:
              </p>
            </div>
            <div className="md:grid md:grid-cols-4 flex flex-col w-2/3 gap-12 md:gap-8 mt-20">
              <div className="gap-4 flex flex-col">
                <Image src={t1} />
                <p className="text-center font-semibold">
                  Apertura de cuentas bancarias en USA desde MX
                </p>
              </div>
              <div className="gap-4 flex flex-col">
                <Image src={t2} />
                <p className="text-center font-semibold">
                  Constitución de empresas para el trámite de tu crédito
                </p>
              </div>
              <div className="gap-4 flex flex-col">
                <Image src={t3} />
                <p className="text-center font-semibold">
                  Trámite de tu visa de inversionista
                </p>
              </div>
              <div className="gap-4 flex flex-col">
                <Image src={t4} />
                <p className="text-center font-semibold">
                  Trámite de tu crédito hipotecario
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-40">
              <ActionButton2>
                Invierte fácil con nosotros, da click
              </ActionButton2>
            </div>
          </div>
        </section>
        {/* Oportunidad  */}
        <section>
          <div className="w-screen mx-auto mt-40 flex flex-col items-center justify-center">
            <div className="gap-10 flex flex-col md:w-2/5 container">
              <h2 className="font-semibold">
                La oportunidad de vivir o vacacionar en USA
              </h2>
              <p>
                Lo más seguro es que estés aquí por una gran oportunidad de
                inversión en una de las economías más estables del mundo y que
                te ayudemos a multiplicar tu dinero sin poner en riesgo el
                patrimonio de tu familia. Y sí, para eso estamos aquí, pero, y
                si también pudieras
              </p>
            </div>
            <div className="md:grid md:grid-cols-3 flex flex-col w-2/3 md:gap-8 gap-12 mt-20 mx-auto">
              <div className="gap-4 flex flex-col">
                <Image src={t5} />
                <p className="text-center font-semibold">
                  Rentar tu casa en Airbnb hasta 36 semanas del año
                </p>
              </div>
              <div className="gap-4 flex flex-col">
                <Image src={t6} />
                <p className="text-center font-semibold">
                  Vacacionar las otras 16 semanas
                </p>
              </div>
              <div className="gap-4 flex flex-col">
                <Image src={t7} />
                <p className="text-center font-semibold">
                  Inscribir a tus hijos en el sistema educativo de USA
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center my-40">
              <ActionButton2>
                Invierte fácil con nosotros, da click
              </ActionButton2>
            </div>
          </div>
        </section>
        {/* Contacto  */}
        <section id="contact" className="container py-20">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold">
              Estás a nada de iniciar tu nuevo proyecto de inversión
            </h2>
            <div className="mt-20">
              <p>
                Déjanos tus datos y agenda una cita conmigo, Carlos Fernandez de
                Castro, tu Agente de Bienes Raíces Internacional
              </p>

              <Form />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
