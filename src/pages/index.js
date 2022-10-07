import Form from '../components/form/form';
import { info } from '../../info';

export default function Home() {

  return (
    <>
      <section className='md:h-[720px] relative pb-20 md:p-0 bg-[url("/images/00.png")] bg-cover bg-bottom overflow-hidden'>
        <div className='w-full md:w-1/2 md:absolute md:top-0 bottom-0 right-0 flex justify-center items-center p-10'>
          <img src='/images/01.png' alt={info.companyName} className='w-full md:w-5/6'/>
        </div>
        <div className='container relative md:flex md:h-full z-[10]'>
          <div className='md:w-1/2 my-auto py-16'>
            <div>
              <h1 className='mb-12 ft-10'>Main copy text, max 10 words</h1>
            </div>
            <a href='#contact' className='button'>Agenda una visita ya</a>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 py-32'>
        <div className='container'>
          <div className='m-auto md:w-2/3'>
            <p className='ft-5 font-extralight text-center'>Si eres fan de la moda, las pasarelas y los shootings, estás en el lugar indicado para explotar tu potencial y convertirte en modelo profesional.</p>
          </div>
          <div className='relative flex flex-col-reverse md:flex-row items-center mt-20'>
            <div className='lg:w-1/2'>
              <div className='p-20 bg-brand-2 text-center md:text-left text-white'>
                <h2 className="ft-7">¡Te regalamos la inscripción!</h2>
                <p className='-ft-2'>Pagando todas las mensualidades de tu curso por adelantado</p>
                <a href='#contact' className='button-secondary !border-white mx-auto md:ml-0'>Agenda una visita ya</a>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/x7lxR6lpMzY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container flex justify-center mb-20'>
          <h2>Vive la experiencia de Talavera Models</h2>
        </div>
        <div className='w-full h-[60rem] lg:h-[84rem] flex bg-red-500 overflow-x-scroll snap-x'>
          <div className='relative min-w-[30rem] lg:w-1/3 h-[60rem] lg:h-full bg-[url("/images/03.png")] bg-top snap-center'>
            <div className='absolute flex items-end inset-0 top-1/3 p-20 md:p-40 bg-gradient-to-t from-black to-transparent'>
              <p className='text-white ft-2'>Entra en contacto con grandes marcas y diseñadores desde el día 1</p>
            </div>
          </div>
          <div className='relative min-w-[30rem] lg:w-1/3 h-[60rem] lg:h-full bg-[url("/images/04.png")] bg-top snap-center'>
            <div className='absolute flex items-end inset-0 top-1/3 p-20 md:p-40 bg-gradient-to-t from-black to-transparent'>
              <p className='text-white ft-2'>Prepárate cada semana con Master Classes incluídas en tus cursos</p>
            </div>
          </div>
          <div className='relative min-w-[30rem] lg:w-1/3 h-[60rem] lg:h-full bg-[url("/images/05.png")] bg-right-top snap-center'>
            <div className='absolute flex items-end inset-0 top-1/3 p-20 md:p-40 bg-gradient-to-t from-black to-transparent'>
              <p className='text-white ft-2'>Al finalizar todos tus cursos obtendrás un certificado como modelo profesional</p>
            </div>
          </div>
        </div>
        <div className='bg-brand-1'>
          <div className='container flex flex-col items-center py-20'>
            <h2 className='text-center'>Ven a conocer nuestra academia</h2>
            <a href='#contact' className='button'>Agenda tu visita ya</a>
          </div>
        </div>
      </section>

      <section>
        <div className='container flex justify-center mb-20'>
          <h2 className='ft-7'>Encuentra tu pasión en el mundo de la moda</h2>
        </div>

        <div className='relative pb-20'>
          <div className='absolute bg-brand-1 w-1/2 h-full right-0'/>
          <div className='container relative h-screen overflow-hidden flex flex-col md:flex-row-reverse items-center'>
            <div className='flex w-full h-full sm:w-1/2 py-20 overflow-hidden'>
              <img src='/images/06.png' className='w-full h-[100%] mx-auto object-cover'/>
            </div>
            <div className='w-full sm:w-1/2'>
              <div className='w-full lg:w-2/3'>
                <h3 className='uppercase font-light ft-2'>Curso runway</h3>
                <h4 className='ft-8'>Apodérate de la pasarela</h4>
                <p>Aprende sobre posturas, remates, pasarelas, castings y lo más top del modelaje.</p>
                <p><b>Duración:</b> 5 meses</p>
                <p>Qué vas a ver?</p>
                <ul>
                  <li>☑️ Postura</li>
                  <li>☑️ Pasarela comercial</li>
                  <li>☑️ Remates (1-7)</li>
                  <li>☑️ Pasarela de calzado</li>
                  <li>☑️ Entradas y cierres</li>
                  <li>☑️ Minimalista</li>
                </ul>
                <a href="#contact" className='link'>Agenda una visita ya</a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative pb-20'>
          <div className='absolute bg-brand-3 w-1/2 h-full left-0'/>
          <div className='container relative h-screen overflow-hidden flex flex-col md:flex-row items-center'>
            <div className='flex w-full h-full sm:w-1/2 py-20 overflow-hidden'>
              <img src='/images/07.png' className='w-full h-[100%] mx-auto object-cover object-top'/>
            </div>
            <div className='w-full sm:w-1/2 flex justify-center'>
              <div className='w-full lg:w-2/3'>
                <h3 className='uppercase font-light ft-2'>Curso shooting</h3>
                <h4 className='ft-8'>Domina a la cámara</h4>
                <p>Aprende a posar, a expresarte en cámara, a conducir y mucho más para convertirte en una top model.</p>
                <p><b>Duración:</b> 3 meses</p>
                <p>Qué vas a ver?</p>
                <ul>
                  <li>☑️ Primeras poses</li>
                  <li>☑️ Foto movimiento y expresiones</li>
                  <li>☑️ Digitals (polas)</li>
                  <li>☑️ Voz y dirección</li>
                  <li>☑️ Social media</li>
                  <li>☑️ Conducción</li>
                  <li>☑️ Comercial</li>
                </ul>
                <a href="#contact" className='link !text-brand-1'>Agenda una visita ya</a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative pb-20'>
          <div className='absolute bg-brand-4 w-1/2 h-full right-0'/>
          <div className='container relative h-screen overflow-hidden flex flex-col md:flex-row-reverse items-center'>
            <div className='flex w-full h-full sm:w-1/2 py-20 overflow-hidden'>
              <img src='/images/08.png' className='w-full h-[100%] mx-auto object-cover'/>
            </div>
            <div className='w-full sm:w-1/2'>
              <div className='w-full lg:w-2/3'>
                <h3 className='uppercase font-light ft-2'>Curso stylist</h3>
                <h4 className='ft-8'>Convierte tu hobby en tu proyecto profesional</h4>
                <p>Aprende sobre peinado, maquillaje, colorimetría, y lo más trendy de la moda.</p>
                <p><b>Duración:</b> 3 meses</p>
                <p>Qué vas a ver?</p>
                <ul>
                  <li>☑️ Fashion director</li>
                  <li>☑️ Rostro y silueta</li>
                  <li>☑️ Colorimetría</li>
                  <li>☑️ Skin Care</li>
                  <li>☑️ Maquillaje (básico, editorial y noche)</li>
                  <li>☑️ Hair Care</li>
                  <li>☑️ Peinado (básico, editorial y noche)</li>
                </ul>
                <a href="#contact" className='link'>Agenda una visita ya</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='mt-20 container'>
          <div className='w-full flex overflow-x-scroll snap-scroll'>
            <div className='w-1/3 snap-center'>
              <img src='/images/09.png' />
            </div>
            <div className='w-1/3 snap-center'>
              <img src='/images/10.png' />
            </div>
            <div className='w-1/3 snap-center'>
              <img src='/images/11.png' />
            </div>
          </div>
          <a href='#contact' className='button mx-auto'>Visítanos ya</a>
          <p className='mini mt-8 mx-auto text-center'>Agenda una cita y conoce nuestras instalaciones.</p>
        </div>
      </section>

      <section id='contact' className='container py-20'>
        <div className='w-full md:w-1/2 mx-auto'>
          <h2>Visítanos y comienza a vivir el sueño</h2>
          <div className='mt-20'>
            <p>Deja de ver experiencias ajenas en YouTube.</p>
            <p>Es hora de que empieces a aprender de verdad y crear tu propia experiencia. Déjanos unos datos para agendar una visita a nuestras instalaciones.</p>

            <Form />

            <p className='my-12'>También puedes contactarnos por WhatsApp o por teléfono.</p>
            <a
              href={`tel:${info.phoneNumber}`}
              className='button-secondary !w-full'
              onClick={() => fbq('track', 'Contact')}
            >
              Llámanos
            </a>
            <a
              href={`//wa.me/${info.whatsapp}`}
              onClick={() => fbq('track', 'Contact')}
              target='_blank'
              className='button !bg-brand-5 !w-full' rel="noreferrer"
            >
              Mándanos un WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/*<Faqs />*/}

    </>
  )
}
