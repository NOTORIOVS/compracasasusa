export default function FbEvent(req, res) {
  const {
    method,
    headers: { referer },
    body: { eventName, eventID, user }
  } = req;

  if (method !== 'POST') {
    return res.status(405).send({message:'Only POST request allowed'})
  }

  const { createHash } = require('crypto');
  const hash = (string) => createHash('SHA256').update(string).digest('hex');

  const url = `https://graph.facebook.com/v14.0/${process.env.PIXEL}/events?access_token=${process.env.FB_CAPI_TOKEN}`

  const payload = {
    data: [
      {
        event_name: eventName,
        event_id: eventID,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: referer,
        user_data: {
          // em: [hash(user.em)],
          // ph: [hash(user.ph)],
          client_ip_address: "127.0.0.1",
          client_user_agent: req.headers['user-agent'],
        },
      },
    ],
    test_event_code: 'TEST27044',
  }

  return fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(result => res.status(200).json(result))
    .catch(error => console.log('error', error));
}