function isPriceInFilterRange (price, range) {
  switch (range) {
    case 'middle':
      return price >= 10000 && price <= 50000;
    case 'low':
      return price < 10000;
    case 'high':
      return price > 50000;
  }
}

function isRoomsInFilterRange (rooms, range) {
  return rooms === Number(range);
}

function isGuestsInFilterRange (guests, range) {
  range = Number(range);

  if (!range) {
    return guests === range;
  } else {
    return guests <= range;
  }
}
function getArrayIntersetions (arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}


export function filterAds (ads) {
  return ads.filter((ad) => {
    const houseType = document.querySelector('#housing-type').value;
    const price = document.querySelector('#housing-price').value;
    const guests = document.querySelector('#housing-guests').value;
    const rooms = document.querySelector('#housing-rooms').value;

    const features = [...document.querySelectorAll('#housing-features input')].filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);


    if (houseType !== 'any' && houseType !== ad.offer.type) {
      return false;
    }

    if (price !== 'any' && !isPriceInFilterRange(ad.offer.price, price)) {
      return false;
    }
    if (rooms !== 'any' && !isRoomsInFilterRange(ad.offer.rooms, rooms)) {
      return false;
    }

    if (guests !== 'any' && !isGuestsInFilterRange(ad.offer.guests, guests)) {
      return false;
    }

    if (
      features.length > 0 &&
      getArrayIntersetions(features, ad.offer.features || []).length < 1) {
      return false;
    }
    return true;
  });
}
