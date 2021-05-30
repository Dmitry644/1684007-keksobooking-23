function getRandomFloat(min, max, dots) {
  if (min < 0 ) {
    return 'Число ОТ не может быть меньше чем ноль';
  } // Условие которое проверяет что число ОТ больше чем ноль
  if (max <= min) {
    return 'Число ДО меньше чем число ОТ';
  } // Условие которое проверяет что число ДО не меньше чем ОТ
  min = Math.ceil(min); // Метод который округляет вверх
  max = Math.floor(max); // Метод который округляет вниз
  return Math.floor(Math.random() * (max - min)) - Math.random(max - min).toFixed(dots);
}

getRandomFloat(1, 100, 5);
