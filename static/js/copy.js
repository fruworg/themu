document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('.highlight pre code[class*="language-"]::before');

  codeBlocks.forEach(codeBlock => {
    codeBlock.addEventListener('click', function() {
      const textToCopy = this.nextElementSibling.innerText;
      copyTextToClipboard(textToCopy);
      alert('Текст скопирован в буфер обмена: ' + textToCopy);
    });
  });

  function copyTextToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
});