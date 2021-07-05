export function getSuccessEventListener () {
  function getSuccessMessage() {
    const successTemplate = document.querySelector('#success').content.querySelector('.success');
    const successElement = successTemplate.cloneNode(true);

    const successMessage = successElement.querySelector('.success__message');
    successMessage.textContent = 'Ваше объявление успешно размещено!';
    return successElement;
  }

  document.body.append(getSuccessMessage());
  const success = document.querySelector('.success');
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      success.parentNode.removeChild(success);
    }
  });
  document.addEventListener('click', () => {
    success.parentNode.removeChild(success);
  });
}

export function getErrorEventListener () {
  function getErrorMessage() {
    const errorTemplate = document.querySelector('#error').content.querySelector('.error');
    const errorElement = errorTemplate.cloneNode(true);

    const errorMessage = errorElement.querySelector('.error__message');
    errorMessage.textContent = 'Ошибка размещения объявления';
    const errorButton = errorElement.querySelector('.error__button')
    errorButton.textContent = 'Попробовать снова';
    return errorElement;
  }
  document.body.append(getErrorMessage());
  const error = document.querySelector('.error');
  const errorButtonListener = document.querySelector('.error__button');
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      error.parentNode.removeChild(error);
    }
  });
  document.addEventListener('click', () => {
    error.parentNode.removeChild(error);
  });
  errorButtonListener.addEventListener('click', () => {
    error.parentNode.removeChild(error);
  });
}
