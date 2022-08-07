import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(1);

  return (
    <section className='bg-gray-100 py-20'>
      <div className='container'>
        <h2>Preguntas frecuentes</h2>
        <div className='w-full shadow-sm mb-2'>
          <p
            id={1}
            className='w-full p-4 bg-white mb-0 cursor-pointer rounded-lg border border-gray-200'
            onClick={(e) => setFaqOpen(e.target.id)}
          >
            <span className='font-bold mr-4 text-brand-1'>›</span>Soy persona física con actividad empresarial, ¿puedo solicitar un crédito?
          </p>
          <p className={`${faqOpen == 1 ? 'flex' : 'hidden'} bg-gray-200 p-20`}>
            Si, tanto personas físicas con actividad empresarial como personas morales pueden acceder a un crédito brand.
          </p>
        </div>
        <div className='w-full shadow-sm mb-2'>
          <p
            id={2}
            className='w-full p-4 bg-white mb-0 cursor-pointer rounded-lg border border-gray-200'
            onClick={(e) => setFaqOpen(e.target.id)}
          >
            <span className='font-bold mr-4 text-brand-1'>›</span>¿Es solo para PyMEs?
          </p>
          <p className={`${faqOpen == 2 ? 'flex' : 'hidden'} bg-gray-200 p-20`}>
            brand es para todos, empresas chicas, medianas, grandes.
          </p>
        </div>
        <div className='w-full shadow-sm mb-2'>
          <p
            id={3}
            className='w-full p-4 bg-white mb-0 cursor-pointer rounded-lg border border-gray-200'
            onClick={(e) => setFaqOpen(e.target.id)}
          >
            <span className='font-bold mr-4 text-brand-1'>›</span>¿Tengo problemas en Buró, puedo acceder a un crédito brand?
          </p>
          <p className={`${faqOpen == 3 ? 'flex' : 'hidden'} bg-gray-200 p-20`}>
            Si, gracias a nuestro abanico de opciones, es muy seguro que consigamos un crédito para ti.
          </p>
        </div>
        <div className='w-full shadow-sm mb-2'>
          <p
            id={4}
            className='w-full p-4 bg-white mb-0 cursor-pointer rounded-lg border border-gray-200'
            onClick={(e) => setFaqOpen(e.target.id)}
          >
            <span className='font-bold mr-4 text-brand-1'>›</span>¿Hasta que monto puedo acceder con brand?
          </p>
          <p className={`${faqOpen == 4 ? 'flex' : 'hidden'} bg-gray-200 p-20`}>
            Nuestros créditos van de $500,000 mxn a $3,000,000 mxn, contáctanos y en 15 min te damos respuesta del monto al que puedes acceder.
          </p>
        </div>
        <div className='w-full shadow-sm mb-2'>
          <p
            id={5}
            className='w-full p-4 bg-white mb-0 cursor-pointer rounded-lg border border-gray-200'
            onClick={(e) => setFaqOpen(e.target.id)}
          >
            <span className='font-bold mr-4 text-brand-1'>›</span>¿Qué requisitos necesito?
          </p>
          <p className={`${faqOpen == 5 ? 'flex' : 'hidden'} bg-gray-200 p-20`}>
            INE, RFC, Constancia de Situación Fiscal y CIEC.
          </p>
        </div>
      </div>
    </section>
  )
}