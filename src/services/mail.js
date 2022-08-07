import { info } from '../../info';

export default function SendEmail(lead) {
  const {nombre, telefono, email, compania, monto} = lead;

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msgBody = `
    <strong>${info.email.subject}</strong>
    <br/><br/>
    Nombre: ${nombre}<br/>
    Email: ${email}<br/>
    Teléfono: ${telefono}<br/>
    Compañía: ${compania}<br/>
    Monto solicitado: ${monto} <br/>
    <br/>
    <a href="https://wa.me/+52${telefono}">Enviar whatsapp</a>    
  `

  const msg = {
    to: info.email.recipients,
    from: info.email.sender,
    subject: info.email.subject,
    // text: 'and easy to do anywhere, even with Node.js',
    html: msgBody,
  }

  return sgMail.send(msg)
}