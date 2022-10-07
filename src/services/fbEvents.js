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

  if (!process.env.FB_CAPI_TOKEN) {
    return fbq('track', eventName, {}, {eventID});
  }

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