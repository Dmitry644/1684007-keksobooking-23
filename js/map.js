import {filterAds} from './filter.js';
import renderCard from './offer.js';
import {showAlert} from './form-message.js';
import {debounce} from './debounce.js';
import {getData} from './data.js';
import {inputPrice} from './form.js';

export const ADDRESS = {
  lat: 35.68334,
  lng: 139.78199,
};

export const MAX_MARKER_COUNT = 10;

const DEBOUNCE_COUNT = 500;

export const addressForm = document.querySelector('#address');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersOption = mapFilters.children;
function setFilterBlocked () {
  for (let i = 0; i < mapFiltersOption.length; i++) {
    mapFiltersOption[i].disabled = true;
  }
  mapFilters.classList.add('map__filters--disabled');
}

function setActive (isActive) {
  const activeForm = document.querySelector('.ad-form');
  const activeFormFieldset = activeForm.children;
  activeForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  for (let i = 0; i < activeFormFieldset.length; i++) {
    activeFormFieldset[i].disabled = !isActive;
  }
  for (let i = 0; i < mapFiltersOption.length; i++) {
    mapFiltersOption[i].disabled = !isActive;
  }

  if (isActive) {
    activeForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
  } else {
    activeForm.classList.add('ad-form--disabled');
    mapFilters.classList.add('map__filters--disabled');
  }
}
setActive(false);
const mapContainer = L.map('map-canvas');
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapContainer);

export const form = document.querySelector('.map__filters');


const mainMarkerIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

export const marker = L.marker(
  {
    lat: 35.68334,
    lng: 139.78199,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

export const offersGroup = L.layerGroup();

export function getMarkerOnMap (offer) {
  const iconOffer = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const markerOffer = L.marker(
    {
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      iconOffer,
    },
  );
  markerOffer
    .addTo(offersGroup).
    bindPopup(
      renderCard(offer),
      {
        keepInView: true,
      },
    );
}

export function makeReset (offers) {
  const adForm = document.querySelector('.ad-form');
  const buttonReset = document.querySelector('.ad-form__reset');

  buttonReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    adForm.reset();
    mapFilters.reset();
    marker.setLatLng({ lat: 35.68334, lng: 139.78199 });
    addressForm.value = `${ADDRESS.lat} ${ADDRESS.lng}`;
    inputPrice.placeholder = '5000';

    offersGroup.clearLayers();
    filterAds(offers).slice(0, MAX_MARKER_COUNT)
      .forEach((offer) => {
        getMarkerOnMap(offer);
      });
  });
}

export const map = mapContainer.on('load', () => {
  setActive(true);

  getData()
    .then((offers) => {
      filterAds(offers).slice(0, MAX_MARKER_COUNT)
        .forEach((offer) => {
          getMarkerOnMap (offer);
        });

      makeReset(offers);

      const debounceFunction = debounce(() => {
        offersGroup.clearLayers();
        filterAds(offers).slice(0, MAX_MARKER_COUNT)
          .forEach((offer) => {
            getMarkerOnMap(offer);
          });
      }, DEBOUNCE_COUNT);
      form.addEventListener('change', debounceFunction);
    }).catch(() => {
      showAlert();
      setFilterBlocked();
    });
});

offersGroup.addTo(map);

marker.addTo(map);

map.setView({
  lat: 35.68334,
  lng: 139.78199,
}, 10);

addressForm.value = `${ADDRESS.lat} ${ADDRESS.lng}`;

marker.on('moveend', (evt) => {
  addressForm.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});
