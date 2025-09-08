'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Radio } from '../components/form/formAtoms';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
import { info } from '../../info';
import fbEvent from '../services/fbEvents';

const formSteps = [
  'intention',
  'budget',
  'timeframe',
  'state',
  'downPayment',
  'experience',
  'commitment',
];

const intentionOpts = [
  {value: 'inversion', label: 'Inversión'},
  {value: 'segundo-hogar', label: 'Segundo Hogar'},
  {value: 'residencia', label: 'Residencia'},
];

const timeframeOpts = [
  {value: 'inmediato', label: 'De inmediato'},
  {value: '3-meses', label: 'Dentro de 3 meses'},
  {value: '6-meses', label: '6 meses o más'},
];

const downPaymentOpts = [
  {value: 'no', label: 'No'},
  {value: 'probable', label: 'Puedo buscar la forma'},
  {value: 'si', label: 'Sí, totalmente!'},
];

const budgetOpts = [
  {value: '250000-350000', label: 'De $250mil a $350mil usd'},
  {value: '350000-450000', label: 'De $350mil a $450mil usd'},
  {value: '450000-600000', label: 'De $450mil a $600mil usd'},
  {value: '600000+', label: 'Más de $600mil usd'},
];
const stateOpts = [
  {value: 'texas', label: 'Texas (Desde $270,000 usd)'},
  {value: 'florida', label: 'Florida (Desde $480,000 usd)'},
  {value: 'california', label: 'California (Desde $700,000 usd)'},
];
const commitmentOpts = [
  {value: 'comprometido', label: 'Claro, estaré atento'},
  {value: 'tal-vez', label: 'No estoy seguro'},
  {value: 'recordar', label: 'Recuérdame antes por favor'},
];

const experienceOpts = [
  {value: 'primerizo', label: 'Es mi primera inversión inmobiliaria'},
  {value: 'broker', label: 'Soy broker inmobiliario'},
  {value: 'experimentado', label: 'Sí, sí tengo experiencia en bienes raíces'},
];

export default function Survey() {
  const [formStep, setFormStep] = useState(0);
  const [inputError, setInputError] = useState(null);
  const [sending, setSending] = useState(false);
  const methods = useForm({mode: 'all'});
  const {
    handleSubmit,
    getValues,
    setError,
    formState: {errors},
  } = methods;
  const router = useRouter();

  useEffect(() => {
    formSteps.map((fs) => setError(fs, {}));
  }, [setError]);

  const handlePartialSubmit = async () => {
    console.log('partial submit');
    try {
      setSending(true);
      const dataSoFar = getValues();
      const lead = getCookie('lead');
      const _fbc = getCookie('_fbc');
      const _fbp = getCookie('_fbp');
      const { id, email, phone } = JSON.parse(lead || '{}');

      const payload = { ...dataSoFar, id, email, phone,  _fbc, _fbp };

      await fetch(info.surveyWebhook, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'},
      });

      router.push('/notelegible');
    } catch (e) {
      console.error('Partial submit failed', e);
    }
  };

  const handleNext = () => {
    const formStepName = formSteps[formStep];
    if (errors[formStepName]) {
      setInputError(formStep);
      return;
    }
    if (getValues('downPayment') === 'no') {
      handlePartialSubmit();
      return;
    }
    setInputError(null);
    window.scrollTo(0, 0);
    return formStep < 6 && setFormStep(formStep + 1);
  };

  const onSubmit = (data) => {
    setSending(true);
    const lead = getCookie('lead');
    const {id, email, phone} = JSON.parse(lead);
    const _fbc = getCookie('_fbc');
    const _fbp = getCookie('_fbp');
    const payload = {...data, id, email, phone, _fbc, _fbp};

    fetch(info.surveyWebhook, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response)
      .then(() => {
        fbEvent(
          'Lead',
          {email, phone, externalID: id},
        );
        const url = info.schedulerLink;

        const forwardLink = document.createElement('a');
        forwardLink.href = url;
        forwardLink.target = '_blank';
        forwardLink.click();

        router.push('/thankyou');
      });
  };

  return (
    <div className="relative flex flex-grow bg-brand-1/20 pointer-events-none">
      <div className="container !p-0 flex flex-col flex-grow items-center pointer-events-auto touch-auto">
        <div className="survey-card">
          <div className="w-full absolute left-0 bottom-0 bg-gray-100">
            <div className={`h-6 bg-brand-1`} style={{width: `${((formStep + 1) / 7) * 100}%`}}/>
          </div>
          <p className="-ft-1">Pregunta {formStep + 1} de 7</p>

          <FormProvider {...methods}>
            <form className="flex flex-col flex-grow" onSubmit={handleSubmit(onSubmit)}>
              <div className={`my-20 ${formStep === 0 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">¿Con qué fin estás buscando una propiedad en USA?</p>
                <Radio
                  name="intention"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona una opción por favor"
                  options={intentionOpts}
                  optCols={1}
                  className={inputError === 0 ? '!border-brand-2' : undefined}
                />
              </div>

              <div className={`my-20 ${formStep === 1 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">¿En cuál de estos rangos te sientes cómodo para realizar tu
                  inversión?</p>
                <Radio
                  name="budget"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona una opción por favor"
                  options={budgetOpts}
                  optCols={1}
                  className={inputError === 1 ? '!border-brand-2' : undefined}
                />
              </div>

              <div className={`my-20 ${formStep === 2 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">¿Cuándo tienes pensado hacer tu inversión?</p>
                <Radio
                  name="timeframe"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona una opción por favor"
                  options={timeframeOpts}
                  optCols={1}
                  className={inputError === 2 ? '!border-brand-2' : undefined}
                />
              </div>

              <div className={`my-20 ${formStep === 3 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">¿En qué estado de USA te interesa comprar?</p>
                <p className="ft-1 mb-6">Por el momento únicamente contamos con propiedades en estos estados, selecciona el
                  de mayor interés</p>
                <Radio
                  name="state"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona una opción por favor"
                  options={stateOpts}
                  optCols={1}
                  className={inputError === 3 ? '!border-brand-2' : undefined}
                />
              </div>

              <div className={`my-20 ${formStep === 4 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">Para la compra de tu casa necesitas estos montos ¿cuentas con ellos?</p>
                <p>
                  <b>Apartado 3%:</b> Desde $8,000 USD<br/>
                  <span className="-ft-1">Necesario al momento de firmar tu contrato</span><br/><br/>
                  <b>Enganche 30%:</b> Desde $80,000 USD<br/>
                  <span className="-ft-1">Este lo pagarás hasta que te entreguemos tu casa</span><br/><br/>
                </p>
                <Radio
                  name="downPayment"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona una opción por favor"
                  options={downPaymentOpts}
                  optCols={3}
                  className={inputError === 4 ? '!border-brand-2' : undefined}
                />
              </div>

              <div className={`my-20 ${formStep === 5 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-semibold mb-6">¿Tienes experiencia en inversiones inmobiliarias?</p>
                <Radio
                  name="experience"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona una opción por favor"
                  options={experienceOpts}
                  optCols={1}
                  className={inputError === 5 ? '!border-brand-2' : undefined}
                />
              </div>

              <div className={`my-20 ${formStep === 6 ? 'block' : 'hidden'}`}>
                <p className="ft-4 font-bold mb-6">Estás a punto de programar una cita con nosotros. ¿Contamos con tu
                  asistencia puntual el día y hora que selecciones?</p>
                <Radio
                  name="commitment"
                  inputOptions={{required: 'Selecciona una opción'}}
                  placeholder="selecciona una opción por favor"
                  options={commitmentOpts}
                  optCols={1}
                  className={inputError === 6 ? '!border-brand-2' : undefined}
                />
                <p className="ft-1 mt-12">Dado al volumen de solicitudes que tenemos, en ocasiones es complicado re-programar.</p>
              </div>

              <div className="flex justify-between w-full mt-auto">
                <button
                  onClick={() => setFormStep(formStep - 1)}
                  className="button-secondary !bg-transparent border-none hover:text-brand-1 disabled:text-gray-100"
                  disabled={formStep <= 0}
                >Atrás
                </button>
                <button
                  type={formStep < 6 ? 'button' : 'submit'}
                  onClick={() => handleNext()}
                  disabled={sending}
                  className="mt-auto"
                >{
                  formStep === 6
                    ? 'Agendar cita'
                    : sending
                      ? <><span className="material-symbols-outlined animate-spin mr-4">progress_activity</span></>
                      : 'Siguiente'
                }</button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const {req, res, query: {id}} = ctx;
  const lead = getCookie('lead', {req, res});

  if (!lead || lead === 'null' || Object.keys(lead).length === 0) {
    if (!id) {
      return {
        redirect: {
          permanent: false,
          destination: '/#contact',
        },
      };
    } else {
      setCookie('lead', {...lead, id}, {req, res});
      return {props: {}};
    }
  }

  return {props: {}}
}
