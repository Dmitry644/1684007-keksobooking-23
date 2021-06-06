function getRandomFloat(min, max, dots) {
  if (min < 0 ) {
    return 1;
  } // Условие которое проверяет что число ОТ больше чем ноль
  if (max <= min) {
    return 'Число ДО меньше чем число ОТ';
  } // Условие которое проверяет что число ДО не меньше чем ОТ
  min = Math.ceil(min); // Метод который округляет вверх
  max = Math.floor(max); // Метод который округляет вниз
  return Math.floor(Math.random() * (max - min)) - Math.random(max - min).toFixed(dots);
};

let authorRandom = [
    'img/avatars/user01.png',
    'img/avatars/user02.png',
    'img/avatars/user03.png',
    'img/avatars/user04.png',
    'img/avatars/user05.png',
    'img/avatars/user06.png',
];

let checkinRandom = [
    '12:00',
    '13:00',
    '14:00',
];

let featuresRandom = [
    'wifi', 
    'dishwasher', 
    'parking', 
    'washer', 
    'elevator', 
    'conditioner',
];

let photosRandom = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

let authorOffer = {
    
};

let decriptionOffer = {
    // title: 'Хорошая квартира в Токио',
    // address: 'location.x, location.y',
    // description: 'Хорошая квартира в Токио',
};

let locationOffer = {

};


function createauthorOffer () {
  return authorOffer = {
    author: authorRandom[getRandomFloat(1, authorRandom.length  - 1)]
};
};

function createDescriptionOffer () {
  return decriptionOffer = {
      title: 'Хорошая квартира в Токио',
      address: 'location.x, location.y',
      price: getRandomFloat(1, 100),
      rooms: getRandomFloat(1, 5),
      guests: getRandomFloat(1, 30),
      chechkin: checkinRandom[getRandomFloat(0, checkinRandom.length  - 1)],
      checkout: checkinRandom[getRandomFloat(0, checkinRandom.length  - 1)],
      features: featuresRandom[getRandomFloat(0, featuresRandom.length - 1)],
      photo: photosRandom[getRandomFloat(0, photosRandom.length - 1)],
      description: 'Хорошая квартира в Токио',
};
};
function createlocationOffer () {
  return locationOffer = {
    lat: getRandomFloat(1, 1000, 3),
    lng: getRandomFloat(1, 1000, 3)
  };
};

let createOffer = (author, description, location) => {
  return author, description, location
}

createOffer(createauthorOffer(), createDescriptionOffer(), createlocationOffer()) 

createauthorOffer();
createDescriptionOffer();
createlocationOffer();
console.log(authorOffer);
console.log(decriptionOffer);
console.log(locationOffer);