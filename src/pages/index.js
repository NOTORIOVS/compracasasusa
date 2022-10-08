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

      <section className='container'>
        <div className='row'>
          <div className='column bg-red-500 border border-white'><h1>1</h1></div>
          <div className='column bg-red-500 border border-white'><h1>2</h1></div>
          <div className='column bg-red-500 border border-white'><h1>3</h1></div>
          <div className='column bg-red-500 border border-white'><h1>4</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
        </div>
        <div className='row'>
          <div className='column bg-red-500 border border-white'><h1>1</h1></div>
          <div className='column bg-red-500 border border-white'><h1>2</h1></div>
          <div className='column bg-red-500 border border-white'><h1>3</h1></div>
          <div className='column bg-red-500 border border-white'><h1>4</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
          <div className='column bg-red-500 border border-white'><h1>5</h1></div>
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
