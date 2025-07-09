    // Código JavaScript para la página web básica

    let button = document.getElementById('myButton');
    let paragraph = document.getElementById('myParagraph');

    button.addEventListener('click', function() {
      if (paragraph.classList.contains('hidden')) {
        paragraph.classList.remove('hidden');
        button.textContent = 'Ocultar';
      } else {
        paragraph.classList.add('hidden');
        button.textContent = 'Ver';
      }
    });