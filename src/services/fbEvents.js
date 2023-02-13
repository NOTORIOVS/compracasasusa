import { getCookie } from 'cookies-next';

export default function fbEvent(
  eventName,
  userData = {
    phone: '',
    email: '',
  },
  eventID = Date.now()
) {
  const payload = JSON.stringify({
    eventName,
    eventID,
    user: {
      ph: userData.phone,
      em: userData.email
    }
  })

  fbq('track', eventName, {}, {fbc: getCookie('_fbc')});

  return fetch(`/api/fb-event`, {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => res.json())
    .catch(err => console.log(err))
}