const inputTitle = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;


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
const inputPrice = document.querySelector('#price');

inputSelect.addEventListener('input', () => {

  if (inputSelect.value === 'bungalow') {
    inputPrice.placeholder = '0';
  } else if (inputSelect.value === 'flat') {
    inputPrice.placeholder = '1000';
  } else if (inputSelect.value === 'hotel') {
    inputPrice.placeholder = '3000';
  } else if (inputSelect.value === 'house') {
    inputPrice.placeholder = '5000';
  } else if (inputSelect.value === 'palace') {
    inputPrice.placeholder = '10000';
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
const timeInChildren = timeIn.children;
const timeOut = document.querySelector('#timeout');
const timeOutChildren = timeOut.children;

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
const roomNumberChildren = roomNumber.children;
const capacityNumber = document.querySelector('#capacity');
const capacityNumberChildren = capacityNumber.children;

roomNumber.addEventListener('click', () => {

  if (roomNumber.value === '1') {
    capacityNumber.value = '1';
    capacityNumberChildren[0].disabled = true;
    capacityNumberChildren[1].disabled = false;
    capacityNumberChildren[2].disabled = true;
    capacityNumberChildren[3].disabled = true;
  }
  if (roomNumber.value === '2') {
    capacityNumber.value = '1';
    capacityNumberChildren[0].disabled = true;
    capacityNumberChildren[1].disabled = false;
    capacityNumberChildren[2].disabled = false;
    capacityNumberChildren[3].disabled = true;
  }
  if (roomNumber.value === '3') {
    capacityNumber.value = '1';
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
});
