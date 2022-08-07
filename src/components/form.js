import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Form() {
  const [lead, setLead] = useState({});
  const [error, setError] = useState(false);

  const router = useRouter();

  function formChange(e) {
    setLead({
      ...lead,
      [e.target.name]: e.target.value
    })
  }

  function restrictNumber(e) {
    const digitPeriodRegExp = new RegExp('\\d|\,|\\.|\\$|\\(|\\)');
    if(e.ctrlKey // (A)
      || e.altKey // (A)
      || typeof e.key !== 'string' // (B)
      || e.key.length !== 1) { // (C)
      return;
    }
    if(!digitPeriodRegExp.test(e.key)) {
      e.preventDefault();
    }
  }

  function validateEmail(email) {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email)
  }

  function onSubmit(e) {
    e.preventDefault();
    if(lead.nombre && lead.telefono && validateEmail(lead.email) === true && lead.instagram) {
      const payload = new FormData();

      for (const key in lead) {
        payload.append(key, lead[key])
      }

      payload.append('creacion', new Date().toString());

      fetch('https://sheetdb.io/api/v1/9zdu6o6agdngu', {
        method: 'POST',
        body: payload
      })
        .then((r) => {
          console.log('GDB R', r);
          fbq('track', 'Lead');}
        )
        .then(() => fetch('/api/sendMail', {
          method: 'POST',
          body: JSON.stringify(lead),
          headers: {'Content-Type': 'application/json'}
        })
          .then((r) => {
            console.log('MAIL R', r);

            router.push('/thankyou');

            const a = document.createElement('a');
            a.href = 'https://www.talaveramodels.com/agendar-cita';
            a.target = '_blank';
            a.click();
          })
          .catch((error) => console.log('MAIL E', error))
        )
        .catch(error => console.log('GDB E', error))

    } else {
      setError(true)
    }
  }

  return (
    <form className="mt-12">
      <label htmlFor="fullName">Nombre</label>
      <input
        type="text"
        name="nombre"
        placeholder="Juan López"
        onBlur={(e) => formChange(e)}
      />
      <label htmlFor="phone">Teléfono</label>
      <input
        type="text"
        name="telefono"
        placeholder="(477) 123 1234"
        onKeyPress={(e) => restrictNumber(e)}
        onBlur={(e) => formChange(e)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        placeholder="mail@mail.com"
        onBlur={(e) => formChange(e)}
      />
      <label htmlFor="instagram">Instagram</label>
      <input
        type="text"
        name="instagram"
        placeholder="@talaveramodels"
        onBlur={(e) => formChange(e)}
      />
      {error === true && (
       <div className="smallest text-red-500">Por favor verifica tus datos</div>
      )}
      <button className="!bg-brand-2 !w-full" onClick={(e) => onSubmit(e)}>Agendar cita</button>
    </form>
  )
}