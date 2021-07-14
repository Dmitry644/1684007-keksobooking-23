let data = null;

export const getData = () => new Promise(
  (resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      fetch('https://23.javascript.pages.academy/keksobooking/data')
        .then((response) => response.json())
        .then((response) => {
          data = response;
          return response;
        })
        .then(resolve)
        .catch(reject);
    }
  });
