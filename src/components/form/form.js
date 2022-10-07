import { useState } from 'react';
import { useForm } from "react-hook-form";
import Link from 'next/link';

import { info } from '../../../info';
import { emailRegExp } from '../../utils/formValidators';

import fbEvent from '../../services/fbEvents';
import SaveOnGSheet from '../../services/googleSheetDB';
import SendMail from '../../services/mail';
import { useRouter } from 'next/router';
import Input from './input';

export default function Form() {
  const [awaiting, setAwaiting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: { fullName: 'Fer', email: 'fernando@notoriovs.com', phone: '1234567890' }
  });

  const onSubmit = (data) => {
    setAwaiting(true)

    SaveOnGSheet(data)
      .then(fbEvent('Lead', data))
      .then(SendMail(data))
      .then(() => {
        setAwaiting(false);
        window.open(`//wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`);
        router.push('/thankyou');
      });
  }

  return (
    <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nombre"
        error={errors.fullName}
        {...register(
          'fullName',
          {
            required: 'Compártenos tu nombre',
          }
        )}
      />
      <Input
        label="Teléfono"
        placeholder="(477) 123 1234"
        error={errors.phone}
        onlyNumbers
        {...register(
          'phone',
          {
            required: "Por favor ingresa un teléfono",
          }
        )}
      />
      <Input
        label="Email"
        {...register('email', {
          required: 'Por favor compártenos un correo electrónico',
          pattern: {
            value: emailRegExp,
            message: "Revisa tu correo",
          },
        })}
      />

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