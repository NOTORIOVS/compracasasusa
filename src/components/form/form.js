import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { info } from "../../../info";
import { emailRegExp } from "../../utils/formValidators";

import fbEvent from "../../services/fbEvents";
import SaveOnGSheet from "../../services/googleSheetDB";
import SendMail from "../../services/mail";
import { useRouter } from "next/router";
import VerMasButton from "../ui/verMasButton";

export default function Form() {
  const [awaiting, setAwaiting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setAwaiting(true);

    SaveOnGSheet(data)
      .then(fbEvent("Lead", data))
      .then(SendMail(data))
      .then(() => {
        setAwaiting(false);
        window.open(`//calendly.com/drtorresroa/30min`);
        router.push("/thankyou");
      });
  };

  const renderError = (error) => (
    <span className="smallest text-red-500">{error?.message}</span>
  );

  return (
    <form className="mt-12 " onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fullName">Nombre</label>
      <input
        placeholder="Nombre"
        {...register("fullName", {
          required: "Compártenos tu nombre",
        })}
      />
      {renderError(errors.fullName)}
      <label htmlFor="phone">Teléfono</label>
      <input
        type="tel"
        placeholder="(477) 123 1234"
        {...register("phone", {
          required: "Por favor ingresa un teléfono",
        })}
      />
      {renderError(errors.phone)}
      <label htmlFor="email">Email</label>
      <input
        placeholder="mail@mail.com"
        {...register("email", {
          required: "Por favor compártenos un correo electrónico",
          pattern: {
            value: emailRegExp,
            message: "Revisa tu correo",
          },
        })}
      />
      {renderError(errors.monto)}
      <label htmlFor="monto">Monto de inversión</label>
      <input
        type="number"
        placeholder="*****"
        {...register("monto", {
          required: "Por favor compártenos cuanto planeas invertir.",
        })}
      />
      {renderError(errors.monto)}
      {renderError(errors.forma)}
      <label htmlFor="forma">Forma de inversión</label>
      <input
        type="text"
        placeholder="*****"
        {...register("forma", {
          required: "Por favor compártenos tu forma de inversión.",
        })}
      />
      {renderError(errors.forma)}
      {renderError(errors.inm)}
      <label htmlFor="inm">Inmediatez</label>
      <input
        type="text"
        placeholder="*****"
        {...register("inm", {
          required: "Por favor compártenos en cuanto tiempo queires invertir.",
        })}
      />
      {renderError(errors.inm)}

      <div className="mt-[40px] font-bold flex flex-col md:items-start items-center">
        <VerMasButton>
          <div className="text-3xl">
            <button
              className={`button ${awaiting ? "!bg-gray-300" : ""}`}
              type="submit"
              disabled={awaiting}
            >
              {!awaiting ? "Enviar y contactar asesor" : "Enviando..."}
            </button>
          </div>
        </VerMasButton>
      </div>
      <div className="mt-40">
        <p className="mt-8 mini">
          {"Al dar click aceptas nuestros "}
          <Link href={info.termsConditions ?? ""} passhref>
            <a target="_blank" className="mini font-semibold">
              Términos y condiciones.
            </a>
          </Link>
          <br />
          {"Conoce nuestro "}
          <Link href={info.privacyNotice ?? ""} passhref>
            <a target="_blank" className="mini font-semibold">
              Aviso de privacidad
            </a>
          </Link>
          {"."}
        </p>
      </div>
    </form>
  );
}
