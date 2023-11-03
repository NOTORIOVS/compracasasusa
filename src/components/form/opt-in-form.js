import Link from 'next/link';
import { info } from '../../../info';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { setCookie } from "cookies-next";
import { useState } from 'react';

export default function OptInForm() {
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setSending(true)

    data.phone = '52' + data.phone.replace(/^\+?(52)?\s?0?1?|\s|\(|\)|-/g, '');
    data.origin = 'Notoriovs Landing'

    fetch('https://hook.us1.make.com/s3wodpb45yes7d9jfbra5u0bcjy5fgl8', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((result) => result.json())
      .then(({id}) => {
        setCookie('leadId', id)
        router.push(`/survey?id=${id}`);
      })

  }

  return (
    <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input {...register(
        'fullName',
        {
          required: true,
        }
      )} placeholder="Tu nombre"/>
      <input {...register(
        'email',
        {
          required: true,
        }
      )} placeholder="Un email activo"/>
      <input {...register(
        'phone',
        {
          required: true,
        }
      )} placeholder="Teléfono de WhatsApp"/>

      <button disabled={sending} className="w-full hover:!bg-brand-3">{!sending ? 'Comenzar →' : 'Espera...'}</button>

      <div className="mt-4">
        <p className="-ft-3 text-center text-white">Al dar clic aceptas nuestra&nbsp;
          <Link href={info.privacyNotice}>política de privacidad</Link>
        </p>
      </div>
    </form>
  );
}