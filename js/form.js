import {showSuccessMessage, showErrorMessage} from './form-message.js';
import {ADDRESS, addressForm, marker, form, getMarkerOnMap, offersGroup, MAX_MARKER_COUNT} from './map.js';
import {getData} from './data.js';
import {filterAds} from './filter.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const inputTitle = document.querySelector('#title');

inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    inputTitle.setCustomValidity(`Еще ${ MIN_TITLE_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    inputTitle.setCustomValidity(`Удалите лишние ${MAX_TITLE_LENGTH - valueLength} символов`);
  } else {
    inputTitle.setCustomValidity('');
  }

  inputTitle.reportValidity();
});

const inputSelect = document.querySelector('#type');
export const inputPrice = document.querySelector('#price');

inputSelect.addEventListener('input', () => {

  if (inputSelect.value === 'bungalow') {
    inputPrice.placeholder = '0';
    inputPrice.setAttribute('min', '0');
  } else if (inputSelect.value === 'flat') {
    inputPrice.placeholder = '1000';
    inputPrice.setAttribute('min', '1000');
  } else if (inputSelect.value === 'hotel') {
    inputPrice.placeholder = '3000';
    inputPrice.setAttribute('min', '3000');
  } else if (inputSelect.value === 'house') {
    inputPrice.placeholder = '5000';
    inputPrice.setAttribute('min', '5000');
  } else if (inputSelect.value === 'palace') {
    inputPrice.placeholder = '10000';
    inputPrice.setAttribute('min', '10000');
  }
});

inputPrice.addEventListener('input', () => {
  if (inputSelect.value === 'bungalow' && inputPrice.value < 0 || inputPrice.value > 1000000) {
    inputPrice.setCustomValidity('Значение не может быть меньше 0 или больше 1000000');
  } else if (inputSelect.value === 'flat' && inputPrice.value < 1000 || inputPrice.value > 1000000) {
    inputPrice.setCustomValidity('Значение не может быть меньше 1000 или больше 1000000');
  } else if (inputSelect.value === 'hotel' && inputPrice.value < 3000 || inputPrice.value > 1000000) {
    inputPrice.setCustomValidity('Значение не может быть меньше 3000 или больше 1000000');
  } else if (inputSelect.value === 'house' && inputPrice.value < 5000 || inputPrice.value > 1000000) {
    inputPrice.setCustomValidity('Значение не может быть меньше 5000 или больше 1000000');
  } else if (inputSelect.value === 'palace' && inputPrice.value < 10000 || inputPrice.value > 1000000) {
    inputPrice.setCustomValidity('Значение не может быть меньше 10000 или больше 1000000');
  } else {
    inputPrice.setCustomValidity('');
  }


  inputPrice.reportValidity();
});


const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  if (timeIn.value === '12:00') {
    timeOut.value = '12:00';
  } else if (timeIn.value === '13:00') {
    timeOut.value = '13:00';
  } else if (timeIn.value === '14:00') {
    timeOut.value = '14:00';
  }
});
timeOut.addEventListener('change', () => {
  if (timeOut.value === '12:00') {
    timeIn.value = '12:00';
  } else if (timeOut.value === '13:00') {
    timeIn.value = '13:00';
  } else if (timeOut.value === '14:00') {
    timeIn.value = '14:00';
  }
});

const roomNumber = document.querySelector('#room_number');
const capacityNumber = document.querySelector('#capacity');
const capacityNumberChildren = capacityNumber.children;

function syncCapacity () {
  if (roomNumber.value === '1') {
    capacityNumber.value = '1';
    capacityNumberChildren[0].disabled = true;
    capacityNumberChildren[1].disabled = false;
    capacityNumberChildren[2].disabled = true;
    capacityNumberChildren[3].disabled = true;
  }
  if (roomNumber.value === '2') {
    capacityNumber.value = '2';
    capacityNumberChildren[0].disabled = true;
    capacityNumberChildren[1].disabled = false;
    capacityNumberChildren[2].disabled = false;
    capacityNumberChildren[3].disabled = true;
  }
  if (roomNumber.value === '3') {
    capacityNumber.value = '3';
    capacityNumberChildren[0].disabled = true;
    capacityNumberChildren[1].disabled = false;
    capacityNumberChildren[2].disabled = false;
    capacityNumberChildren[3].disabled = false;
  }
  if  (roomNumber.value === '100') {
    capacityNumber.value = '0';
    capacityNumberChildren[0].disabled = false;
    capacityNumberChildren[1].disabled = true;
    capacityNumberChildren[2].disabled = true;
    capacityNumberChildren[3].disabled = true;
  }
}
syncCapacity();

roomNumber.addEventListener('change', () => {
  syncCapacity();
});

const adForm = document.querySelector('.ad-form');

function setFormSubmit () {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch (
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        adForm.reset();
        form.reset();
        marker.setLatLng({ lat: 35.68334, lng: 139.78199 });
        showSuccessMessage();
        offersGroup.clearLayers();
        addressForm.value = `${ADDRESS.lat} ${ADDRESS.lng}`;
        inputPrice.placeholder = '5000';

        getData()
          .then((offers) => {
            filterAds(offers).slice(0, MAX_MARKER_COUNT)
              .forEach((offer) => {
                getMarkerOnMap (offer);
              });
          });
      }
      else {
        showErrorMessage();
        addressForm.value = `${ADDRESS.lat} ${ADDRESS.lng}`;
      }
    })
      .catch(() => {
        showErrorMessage();
        addressForm.value = `${ADDRESS.lat} ${ADDRESS.lng}`;
      });
  });
}
setFormSubmit();
