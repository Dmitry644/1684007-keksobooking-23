export function showSuccessMessage () {
  function getSuccessMessage() {
    const successTemplate = document.querySelector('#success').content.querySelector('.success');
    const successElement = successTemplate.cloneNode(true);

    const successMessage = successElement.querySelector('.success__message');
    successMessage.textContent = 'Ваше объявление успешно размещено!';
    return successElement;
  }

  document.body.append(getSuccessMessage());
  const success = document.querySelector('.success');
  const escHandler = (evt) => {
    if (evt.keyCode === 27) {
      success.parentNode.removeChild(success);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);


  success.addEventListener('click', () => {
    success.parentNode.removeChild(success);
  });
}

export function showErrorMessage () {
  function getErrorMessage() {
    const errorTemplate = document.querySelector('#error').content.querySelector('.error');
    const errorElement = errorTemplate.cloneNode(true);

    const errorMessage = errorElement.querySelector('.error__message');
    errorMessage.textContent = 'Ошибка размещения объявления';
    const errorButton = errorElement.querySelector('.error__button');
    errorButton.textContent = 'Попробовать снова';
    return errorElement;
  }
  document.body.append(getErrorMessage());
  const error = document.querySelector('.error');

  const escHandlerError = (evt) => {
    if (evt.keyCode === 27) {
      error.parentNode.removeChild(error);
      document.removeEventListener('keydown', escHandlerError);
    }
  };
  document.addEventListener('keydown', escHandlerError);

  error.addEventListener('click', () => {
    error.parentNode.removeChild(error);
  });
}


export function showAlert () {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Ошибка ответа от сервера';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 10000);
}
