import {offers} from './generate.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardElement = cardTemplate.cloneNode(true);

console.log(offers);

const features = [
  offers[0].offer.features,
  offers[1].offer.features,
  offers[2].offer.features,
];

const cardElementAvatar = cardElement.querySelector('.popup__avatar');
cardElementAvatar.src = offers[0].author.author;
console.log(cardElementAvatar);
if (! offers[0].author.author) {
  cardElementAvatar.textContent = 'Аватар отсутствует';
}

const cardElementTitle = cardElement.querySelector('.popup__title');
cardElementTitle.textContent = offers[0].offer.title;
console.log(cardElementTitle);
if (! offers[0].offer.title) {
  cardElementTitle.textContent = 'Описание отсутствует';
}

const cardElementAddress = cardElement.querySelector('.popup__text--address');
cardElementAddress.textContent = offers[0].offer.address;
console.log(cardElementAddress);
if (! offers[0].offer.address) {
  cardElementAddress.textContent = 'Адрес отсутствует';
}

const cardElementType = cardElement.querySelector('.popup__type');
function getType () {
  switch (offers[0].offer.type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
}
getType(offers);
cardElementType.textContent = getType();
console.log(cardElementType);
if (! offers[0].offer.type) {
  cardElementType.textContent = 'Описание отсутствует';
}

const cardElementPrice = cardElement.querySelector('.popup__text--price');
cardElementPrice.textContent = `${offers[0].offer.price} ₽/ночь`;
console.log(cardElementPrice);
if (! offers[0].offer.price) {
  cardElementPrice.textContent = 'Описание отсутствует';
}

const cardElementCapacity = cardElement.querySelector('.popup__text--capacity');
cardElementCapacity.textContent = `${offers[0].offer.rooms} комнаты для 
    ${offers[0].offer.guests} гостей`;
console.log(cardElementCapacity);
if ( !offers[0].offer.rooms) {
  cardElementCapacity.textContent = (`Данные о количестве комнат отсутствуют а количество гостей ${offers[0].offer.guests}`);
} else if (!offers[0].offer.guests) {
  cardElementCapacity.textContent = (`Количество комнат ${offers[0].offer.rooms} а данные о количестве гостей отсутсвуют`);
}
if (!offers[0].offer.rooms && !offers[0].offer.guests) {
  cardElementCapacity.textContent = ('Описание отсутствует');
}


const cardElementTime = cardElement.querySelector('.popup__text--time');
cardElementTime.textContent = `Заезд поcле ${offers[0].offer.checkin}  
    выезд до ${offers[0].offer.checkout}`;
console.log(cardElementTime);
if ( !offers[0].offer.checkin) {
  cardElementTime.textContent = (`Время заезда отстутствует а время выезда после ${offers[0].offer.checkout}`);
} else if (!offers[0].offer.checkout) {
  cardElementTime.textContent = (`Время заезда ${offers[0].offer.checkin} а время выезда отсутствует`);
}
if (!offers[0].offer.checkin && !offers[0].offer.checkout) {
  cardElementTime.textContent = ('Описание отсутствует');
}

const cardElementPopupList = cardElement.querySelector('.popup__features');
const modifiers = features.map((feature) => `popup__feature--${feature}`);
cardElementPopupList.querySelectorAll('.popup__feature');
cardElementPopupList.querySelectorAll('.popup__feature').forEach((item) => {
  const modifier = item.classList[1];
  if (! modifiers.includes(modifier)) {
    item.remove();
  }
});
console.log(cardElementPopupList);
if (! offers[0].offer.features) {
  cardElementPopupList.textContent = 'Описание отсутствует';
}

const cardElementDescription = cardElement.querySelector('.popup__description');
cardElementDescription.textContent = offers[0].offer.description;
console.log(cardElementDescription);
if (! offers[0].offer.description) {
  cardElementDescription.textContent = 'Описание отсутствует';
}

const cardElementPhotos = cardElement.querySelector('.popup__photo');
cardElementPhotos.src = offers[0].offer.photo;
console.log(cardElementPhotos);
if (! offers[0].offer.photo) {
  cardElementPhotos.textContent = 'Описание отсутствует';
}

const mapCanvas = document.querySelector('#map-canvas');

mapCanvas.appendChild(cardElementDescription);
