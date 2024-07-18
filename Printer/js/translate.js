document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    ru: JSON.parse(document.getElementById('ru-json').textContent),
    uz: JSON.parse(document.getElementById('uz-json').textContent),
  };

  const langButtons = {
    ru: document.getElementById('ru'),
    uz: document.getElementById('uz'),
  };

  const elementsToTranslate = document.querySelectorAll('[data-lang]');

  function setLanguage(language) {
    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute('data-lang');
      if (translations[language][key]) {
        element.innerText = translations[language][key];
      }
    });
    localStorage.setItem('language', language);
  }

  Object.keys(langButtons).forEach((lang) => {
    langButtons[lang].addEventListener('click', () => {
      setLanguage(lang);
      Object.values(langButtons).forEach(button => button.classList.remove('active'));
      langButtons[lang].classList.add('active');
    });
  });

  const savedLanguage = localStorage.getItem('language') || 'ru';
  setLanguage(savedLanguage);
  langButtons[savedLanguage].classList.add('active');
});
