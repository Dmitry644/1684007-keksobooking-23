import {offers} from './generate.js';
import renderCard from './offer.js';

let activeValue = false;
const addressForm = document.querySelector('#address');


const map = L.map('map-canvas')
  .on('load', () => {
    activeValue = true;
  })
  .setView({
    lat: 35.68334,
    lng: 139.78199,
  }, 10);


const address = {
  lat: 35.68334,
  lng: 139.78199,
};
addressForm.value = `lat: ${address.lat} lng: ${address.lng}`;


const tileLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.68334,
    lng: 139.78199,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);
marker.addTo(map);

marker.on('moveend', (evt) => {
  addressForm.value = `lat: ${evt.target.getLatLng().lat.toFixed(5)} lng: ${evt.target.getLatLng().lng.toFixed(5)}`;
});

offers.forEach((ad, i) => {
  const iconOffer = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const markerOffer = L.marker(
    {
      lat: ad.location.lat,
      lng: ad.location.lng,
    },
    {
      iconOffer,
    },
  );
  markerOffer
    .addTo(map)
    .bindPopup(
      renderCard(offers[i]),
      {
        keepInView: true,
      },
    );
  if(activeValue === false) {
    markerOffer.remove();
  }
});


function active () {
  const activeForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  const activeFormFieldset = activeForm.children;
  const mapFiltersOption = mapFilters.children;
  if (activeValue === false) {
    tileLayer.remove();
    marker.remove();
    // markerOffer.remove()
    activeForm.classList.add('ad-form--disabled');
    mapFilters.classList.add('map__filters--disabled');
    for (let i = 0; i < activeFormFieldset.length; i++) {
      activeFormFieldset[i].disabled = true;
    }
    for (let i = 0; i < mapFiltersOption.length; i++) {
      mapFiltersOption[i].disabled = true;
    }
  }
}
active();
