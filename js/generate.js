function getRandomPositiveFloat (a, b, digits) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const AUTHOR_RANDOM = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
];

const CHECKIN_RANDOM = [
  '12:00',
  '13:00',
  '14:00',
];

const TYPES_RANDOM = [
  'flat',
  'bungalow',
  'house',
  'palace',
  'hotel',
];

const FEATURES_RANDOM = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_RANDOM = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

let authorOffer = {

};

authorOffer;

let decriptionOffer = {

};
decriptionOffer;

let locationOffer = {

};
locationOffer;

export const offers = [

];


function createauthorOffer () {
  return authorOffer = {
    author: AUTHOR_RANDOM[getRandomPositiveFloat(1, AUTHOR_RANDOM.length  - 1)],
  };
}

function createlocationOffer () {
  return locationOffer = {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
  };
}

function createDescriptionOffer () {
  return decriptionOffer = {
    title: 'Хорошая квартира в Токио',
    address: `${locationOffer.lat} ${locationOffer.lng}`,
    price: getRandomPositiveFloat(1, 100),
    rooms: getRandomPositiveFloat(1, 5),
    guests: getRandomPositiveFloat(1, 30),
    type: TYPES_RANDOM[getRandomPositiveFloat(0, TYPES_RANDOM.length -1)],
    checkin: CHECKIN_RANDOM[getRandomPositiveFloat(0, CHECKIN_RANDOM.length  - 1)],
    checkout: CHECKIN_RANDOM[getRandomPositiveFloat(0, CHECKIN_RANDOM.length  - 1)],
    features: [FEATURES_RANDOM[getRandomPositiveFloat(0, FEATURES_RANDOM.length - 1)]],
    photo: PHOTOS_RANDOM[getRandomPositiveFloat(0, PHOTOS_RANDOM.length - 1)],
    description: 'Хорошая квартира в Токио',
  };
}

// const createOffer = (author, description, location) => (author, description, location);
const createOffer = (author, description, location) => ({
  author,
  offer: description,
  location,
});

export function createOffers () {
  for (let i = 0; i < 10; i++) {
    offers.push(createOffer(createauthorOffer(), createDescriptionOffer(), createlocationOffer()));
  }
  return offers;
}

createOffers();
//   console.log(offers);
