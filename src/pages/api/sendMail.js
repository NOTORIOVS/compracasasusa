import SendEmail from '../../services/mail';


export default function SendMail(req, res) {
  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    SendEmail(req.body)
      .then((r) =>
        res.status(r[0].statusCode).json({
          message: 'Email Sent',
          payload: req.body,
        })
      )
      .catch((error) => {
        console.log('Something failed', error);
        res.status(error.code).json(error.response.body);
      })
  } else {
    res.status(200).json()
  }
}