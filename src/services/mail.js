import { info } from '../../info';

export default function SendEmail(lead) {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msgBody = `
      <strong>${info.email.subject}</strong>
      <br/><br/>
      ${Object.keys(lead).map((key) => `<div>${key}: ${lead[key]}</div>`)}
      <br/>
      ${lead.telefono &&
        `<a href="https://wa.me/+52${lead.telefono.replace(/\+52|[()\s-]/g, '') ?? ''}">Enviar whatsapp</a>`
      }
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