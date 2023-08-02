// Получаем все элементы с классом "highlight"
const codeElements = document.querySelectorAll('.highlight');

// Добавляем обработчик события на каждый элемент с классом "highlight"
codeElements.forEach((highlightBlock) => {
  // Находим элемент с тегом "code" внутри текущего блока "highlight"
  const codeElement = highlightBlock.querySelector('code');

  // Находим все span-элементы внутри блока
  const spanElements = highlightBlock.querySelectorAll('span');

  // Создаем текст, объединяя содержимое всех span-элементов внутри текущего блока "highlight"
  let combinedText = '';
  spanElements.forEach((spanElement) => {
    combinedText += spanElement.textContent;
  });

  // Добавляем обработчик события на клик по элементу "code"
  codeElement.addEventListener('click', () => {
    // Создаем временный элемент textarea
    const tempTextarea = document.createElement('textarea');

    // Устанавливаем значение текста в textarea равным объединенному тексту
    tempTextarea.value = combinedText;

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
});