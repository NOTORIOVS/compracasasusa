import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

import { restrictNumber, emailRegExp } from '../utils/formValidators';

import { info } from '../../info';
import Link from 'next/link';

export default function Form() {
  const [awaiting, setAwaiting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setAwaiting(true);

    fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        date: new Date().toLocaleString('es-MX', {timeZone: 'America/Mexico_City'})
      })
    }).then(() => fbq('track', 'Lead'))

    fetch('/api/sendMail', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(() => {
        setAwaiting(false);
        window.open(`//wa.me/${info.whatsapp}?text=Hola mi nombre es ${data.nombre}, estoy solicitando un crédito empresarial por $${data.monto} mxn`);
        router.push('/thankyou');
      });
  }

  const renderError = (error) => <span className='smallest text-red-500'>{error?.message}</span>

  return (
    <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fullName">Nombre</label>
      <input
        {...register('nombre', {
          required: 'Compártenos tu nombre',
        })}
        type="text"
        placeholder="Juan López"
      />
      {renderError(errors.nombre)}
      <label htmlFor="phone">Teléfono</label>
      <input
        {...register('telefono', {
          required: "Por favor ingresa un teléfono",
        })}
        placeholder="(477) 123 1234"
        onKeyPress={restrictNumber}
      />
      {renderError(errors.telefono)}
      <label htmlFor="email">Email</label>
      <input
        {...register('email', {
          required: 'Por favor compártenos un correo electrónico',
          pattern: {
            value: emailRegExp,
            message: "Revisa tu correo",
          },
        })}
        placeholder="mail@mail.com"
      />
      {renderError(errors.email)}
      <label htmlFor="instalaciones">Instalaciones</label>
      <input
        {...register('instalaciones', {
          required: '¿En qué ciudad se encuentra tu negocio?'
        })}
        placeholder="Querétaro"
      />
      {renderError(errors.ciudad)}
      <button
        className={`button ${awaiting ? '!bg-gray-300' : ''}`}
        type='submit'
        disabled={awaiting}
      >
        {!awaiting ? 'Contáctanos' : 'Enviando...'}
      </button>
      <p className="mt-8 mini">
        {'Al dar clic aceptas nuestros '}
        <Link href="/terminos-condiciones" passhref><a target="_blank" className="mini text-faster-4">Términos y condiciones</a></Link>
        {'. Conoce nuestro '}
        <Link href={info.privacyNotice ?? ''} passhref><a target="_blank" className="mini text-faster-4">Aviso de privacidad</a></Link>
        {'.'}
      </p>
    </form>
  )
}