const list = document.querySelector('#list')
const searchButton = document.querySelector('#search-button')
const searchInput = document.querySelector('#search-input')
const map = L.map('map', { zoomControl: false })
let marker
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

let initialData = {
  ip: '181.64.64.122',
  location: {
    country: 'PE',
    region: 'Ancash',
    city: 'Santa',
    lat: -8.98861,
    lng: -78.61194,
    postalCode: '',
    timezone: '-05:00',
    geonameId: 3692282
  },
  as: {
    asn: 6147,
    name: 'Telefonica del Peru S.A.A.',
    route: '181.64.64.0/19',
    domain: '',
    type: 'Not Disclosed'
  },
  isp: 'PE-TDP-GRS'
}

function setData(data) {
  list.querySelector('li:first-child p').innerHTML = data.ip
  list.querySelector(
    'li:nth-child(2) p'
  ).innerHTML = `${data.location.city}, ${data.location.region}, ${data.location.country} ${data.location.postalCode}`
  list.querySelector(
    'li:nth-child(3) p'
  ).innerHTML = `UTC${data.location.timezone}`
  list.querySelector('li:last-child p').innerHTML = data.isp

  map.setView([data.location.lat, data.location.lng], 12)
  if (marker) {
    map.removeLayer(marker)
  }
  marker = L.marker([data.location.lat, data.location.lng]).addTo(map)
}

setData(initialData)

searchButton.addEventListener('click', () => {
  const search = searchInput.value
  /*
  let data = {
    ip: '62.149.140.18',
    location: {
      country: 'IT',
      region: 'Toscana',
      city: 'Arezzo',
      lat: 43.46276,
      lng: 11.88068,
      postalCode: '',
      timezone: '+01:00',
      geonameId: 3182884
    },
    domains: [
      'abcmarghera.it',
      'abruzzo-turismo.com',
      'acudit.net',
      'adactatravel.it',
      'adeferri.com'
    ],
    as: {
      asn: 31034,
      name: 'ARUBA-ASN',
      route: '62.149.128.0/19',
      domain: 'https://www.aruba.it/',
      type: 'Content'
    },
    isp: 'Aruba S.p.A. Network',
    proxy: {
      proxy: false,
      vpn: false,
      tor: false
    }
  }
  */

  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_MR745JI1Pv0oKy7FARMY2T3oVDjRA&ipAddress=${search}&domain=${search}`
  )
    .then((response) => {
      if (!response.ok) {
        const err = new Error('Not 2xx response')
        err.response = response
        alert('Unknown ip or domain')
        throw err
      } else {
        return response.json()
      }
    })
    .then((data) => {
      setData(data)
    })
    .catch((err) => {
      throw err
    })
})
