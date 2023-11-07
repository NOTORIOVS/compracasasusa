import Link from 'next/link';
import { info } from '../../../info';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { restrictNumber, emailRegExp } from '../../utils/formValidators';

export default function OptInForm() {
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    setSending(true);
    data.phone = '52' + data.phone.replace(/^\+?(52)?\s?0?1?|\s|\(|\)|-/g, '');
    data.origin = 'Notoriovs Landing';

    const _fbc = getCookie('_fbc');
    const _fbp = getCookie('_fbp');
    const payload = {...data, _fbc, _fbp};


    fetch('https://hook.us1.make.com/s3wodpb45yes7d9jfbra5u0bcjy5fgl8', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((result) => result.json())
      .then(({id}) => {
        fbq('track', 'CompleteRegistration');
        setCookie('leadId', id);
        router.push(`/survey?id=${id}`);
      });

  };

  return (
    <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register(
          'fullName',
          {
            required: true,
          },
        )}
        className={errors.fullName && '!bg-red-200'}
        placeholder="Tu nombre"/>
      <input
        {...register(
          'email',
          {
            required: true,
            pattern: {
              value: emailRegExp,
              message: 'Revisa tu correo',
            },
          },
        )}
        className={errors.email && '!bg-red-200'}
        placeholder="Un email activo"/>
      <input
        {...register(
          'phone',
          {
            required: true,
          },
        )}
        className={errors.phone && '!bg-red-200'}
        onKeyPress={restrictNumber}
        placeholder="Teléfono de WhatsApp"/>

      <button disabled={sending} className="w-full hover:!bg-brand-3">{!sending ? 'Comenzar →' : 'Espera...'}</button>

      <div className="mt-4">
        <p className="-ft-3 text-center text-white">Al dar clic aceptas nuestra&nbsp;
          <Link href={info.privacyNotice}>política de privacidad</Link>
        </p>
      </div>
    </form>
  );
}