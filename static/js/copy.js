// Получаем элементы, с которыми будем работать
const codeElement = document.querySelector('.highlight code');
const spanElement = codeElement.querySelector('span span');

// Добавляем обработчик события на ::before псевдоэлемент
codeElement.addEventListener('click', () => {
  // Создаем временный элемент textarea
  const tempTextarea = document.createElement('textarea');
  
  // Устанавливаем значение текста в textarea равным тексту из span
  tempTextarea.value = spanElement.textContent;
  
  // Добавляем textarea в документ (необходимо, чтобы метод .select() сработал)
  document.body.appendChild(tempTextarea);
  
  // Выделяем текст в textarea
  tempTextarea.select();
  
  // Копируем выделенный текст в буфер обмена
  document.execCommand('copy');
  
  // Удаляем временный элемент textarea
  document.body.removeChild(tempTextarea);
  
  // Можно добавить визуальную обратную связь для пользователя, например, изменить стиль ::before
  // codeElement.style.setProperty('content', '"Copied!"');
  // setTimeout(() => codeElement.style.removeProperty('content'), 1000);
});