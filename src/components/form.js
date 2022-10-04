import { useState } from 'react';
import { useForm } from "react-hook-form";
import Link from 'next/link';

import { info } from '../../info';
import { restrictNumber, emailRegExp } from '../utils/formValidators';

import fbEvent from '../services/fbEvents';
import SaveOnGSheet from '../services/googleSheetDB';

export default function Form() {
  const [awaiting, setAwaiting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: { nombre: 'Fer', email: 'fernando@notoriovs.com', phone: '1234567890' }
  });

  const onSubmit = (data) => {
    setAwaiting(true)

    SaveOnGSheet(data)
      .then(fbEvent('Lead', data))
      // .then(SendMail(data))
      .then(() => {
        setAwaiting(false);
        // window.open(`//wa.me/${info.whatsapp}?text=Si jaló`);
        // router.push('/thankyou');
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
        {...register('phone', {
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