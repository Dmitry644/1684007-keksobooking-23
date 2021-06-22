import { create } from 'browser-sync';
import {offers} from './generate.js';


const renderCard = (ad) => {

  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cardElement = cardTemplate.cloneNode(true);
  // const features = [ad.offer.features];


  const cardElementAvatar = cardElement.querySelector('.popup__avatar');
  cardElementAvatar.src = ad.author.author;
  if (! ad.author.author) {
    cardElementAvatar.textContent = 'Аватар отсутствует';
  }

  const cardElementTitle = cardElement.querySelector('.popup__title');
  cardElementTitle.textContent = ad.offer.title;
  if (! ad.offer.title) {
    cardElementTitle.textContent = 'Описание отсутствует';
  }

  const cardElementAddress = cardElement.querySelector('.popup__text--address');
  cardElementAddress.textContent = ad.offer.address;
  if (! ad.offer.address) {
    cardElementAddress.textContent = 'Адрес отсутствует';
  }

  const cardElementType = cardElement.querySelector('.popup__type');
  function getType () {
    switch (ad.offer.type) {
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
  if (! ad.offer.type) {
    cardElementType.textContent = 'Описание отсутствует';
  }

  const cardElementPrice = cardElement.querySelector('.popup__text--price');
  cardElementPrice.textContent = `${ad.offer.price} ₽/ночь`;
  if (! ad.offer.price) {
    cardElementPrice.textContent = 'Описание отсутствует';
  }

  const cardElementCapacity = cardElement.querySelector('.popup__text--capacity');
  cardElementCapacity.textContent = `${ad.offer.rooms} комнаты для 
    ${ad.offer.guests} гостей`;
  if ( !ad.offer.rooms) {
    cardElementCapacity.textContent = (`Данные о количестве комнат отсутствуют а количество гостей ${ad.offer.guests}`);
  } else if (!ad.offer.guests) {
    cardElementCapacity.textContent = (`Количество комнат ${ad.offer.rooms} а данные о количестве гостей отсутсвуют`);
  }
  if (!ad.offer.rooms && !ad.offer.guests) {
    cardElementCapacity.textContent = ('Описание отсутствует');
  }


  const cardElementTime = cardElement.querySelector('.popup__text--time');
  cardElementTime.textContent = `Заезд поcле ${ad.offer.checkin}  
    выезд до ${ad.offer.checkout}`;
  if ( !ad.offer.checkin) {
    cardElementTime.textContent = (`Время заезда отстутствует а время выезда после ${ad.offer.checkout}`);
  } else if (!ad.offer.checkout) {
    cardElementTime.textContent = (`Время заезда ${ad.offer.checkin} а время выезда отсутствует`);
  }
  if (!ad.offer.checkin && !ad.offer.checkout) {
    cardElementTime.textContent = ('Описание отсутствует');
  }

  // const cardElementPopupList = cardElement.querySelector('.popup__features');
  // const modifiers = features.map((feature) => `popup__feature--${feature}`);
  // cardElementPopupList.querySelectorAll('.popup__feature');
  // cardElementPopupList.querySelectorAll('.popup__feature').forEach((item) => {
  //   const modifier = item.classList[1];
  //   if (! modifiers.includes(modifier)) {
  //     item.remove();
  //   }
  // });

  const features = offers[0].offer.features;
  console.log(offers[0].offer.features)
  const featureListElement = document.querySelector('.popup__features');
  
  // собираем html-строку, состоящую из нужных тегов
  const featuresHtml = features.map(
    (feature) => `<li class="popup__feature popup__feature--${feature}"></li>`  // тут с помощью .map собираем массив из строк
  ).join('') // методом .join склеиваем его в одну строку
  
  // заменяем полностью html
  featureListElement.innerHTML = featuresHtml 
  if (! ad.offer.features) {
    cardElementPopupList.textContent = 'Описание отсутствует';
  }

  const cardElementDescription = cardElement.querySelector('.popup__description');
  cardElementDescription.textContent = ad.offer.description;
  if (! ad.offer.description) {
    cardElementDescription.textContent = 'Описание отсутствует';
  }

  const cardElementPhotos = cardElement.querySelector('.popup__photo');
  cardElementPhotos.src = ad.offer.photo;
  if (! ad.offer.photo) {
    cardElementPhotos.textContent = 'Описание отсутствует';
  }

  return cardElement;

};

export default renderCard;
