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

  return fetch(`/api/fb-event`, {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => res.json())
    .then((r) => {
      console.log(r);
      fbq('track', eventName, {}, {eventID});
    })
    .catch(err => console.log(err))
}