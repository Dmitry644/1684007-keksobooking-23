function getType (type) {
  switch (type) {
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

function renderCard (ad) {

  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cardElement = cardTemplate.cloneNode(true);


  const cardElementAvatar = cardElement.querySelector('.popup__avatar');
  cardElementAvatar.src = ad.author.avatar;

  const cardElementTitle = cardElement.querySelector('.popup__title');
  cardElementTitle.textContent = ad.offer.title;
  if (!ad.offer.title) {
    cardElementTitle.remove();
  }

  const cardElementAddress = cardElement.querySelector('.popup__text--address');
  cardElementAddress.textContent = ad.offer.address;
  if (!ad.offer.address) {
    cardElementAddress.remove();
  }

  const cardElementType = cardElement.querySelector('.popup__type');
  cardElementType.textContent = getType(ad.offer.type);
  if (!ad.offer.type) {
    cardElementType.remove();
  }

  const cardElementPrice = cardElement.querySelector('.popup__text--price');
  cardElementPrice.textContent = `${ad.offer.price} ₽/ночь`;
  if (!ad.offer.price) {
    cardElementPrice.remove();
  }

  const cardElementCapacity = cardElement.querySelector('.popup__text--capacity');
  cardElementCapacity.textContent = `${ad.offer.rooms} комнаты для 
    ${ad.offer.guests} гостей`;
  if (!ad.offer.rooms) {
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
  if (!ad.offer.checkin) {
    cardElementTime.textContent = (`Время заезда отстутствует а время выезда после ${ad.offer.checkout}`);
  } else if (!ad.offer.checkout) {
    cardElementTime.textContent = (`Время заезда ${ad.offer.checkin} а время выезда отсутствует`);
  }
  if (!ad.offer.checkin && !ad.offer.checkout) {
    cardElementTime.remove();
  }

  const features = ad.offer.features || [];
  const cardElementFeaturesList = cardElement.querySelector('.popup__features');
  const featuresHtml = features.map(
    (feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join('');

  cardElementFeaturesList.innerHTML = featuresHtml;

  if (!ad.offer.features) {
    cardElementFeaturesList.textContent = 'Описание отсутствует';
    cardElementFeaturesList.remove();
  }

  const cardElementDescription = cardElement.querySelector('.popup__description');
  cardElementDescription.textContent = ad.offer.description;
  if (!ad.offer.description) {
    cardElementDescription.remove();
  }

  const photo = ad.offer.photos || [];
  photo.forEach((value) => {
    const popupPhotos = cardElement.querySelector('.popup__photos');
    popupPhotos.insertAdjacentHTML('afterbegin', `<img class="popup__photo" src="${value}" width="45" height="40" alt="Фотография жилья">`);
  });
  return cardElement;

}

export default renderCard;
