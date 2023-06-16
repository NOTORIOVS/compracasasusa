import { info } from "../../info";

export default function ThankYou() {
  return (
    <section className="h-full my-auto">
      <div className="container flex flex-col items-center">
        <h1>¡Gracias por contactarnos!</h1>
        <p className="body_lg">
          Una persona de nuestro equipo te contactará lo antes posible
        </p>
        <p className="mt-12">
          Te invitamos a seguirnos en nuestras redes sociales
        </p>
        <div className="flex justify-between space-x-20">
          <a
            href={`//facebook.com/${info.social.facebook}`}
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href={`//instagram.com/${info.social.instagram}`}
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <p className="mt-20">
          O si lo prefieres, también puedes enviarnos un WhatsApp
        </p>
        <a
          href={`//wa.me/${info.whatsapp.value}`}
          onClick={() => fbq("track", "Contact")}
          target="_blank"
          className="button-secondary"
          rel="noreferrer"
        >
          Mándanos un WhatsApp
        </a>
      </div>
    </section>
  );
}
