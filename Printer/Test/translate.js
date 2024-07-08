document.getElementById('ru').addEventListener('click', () => loadJSON('ru'));
document.getElementById('uz').addEventListener('click', () => loadJSON('uz'));

function loadJSON(lang) {
    const jsonElement = document.getElementById(`${lang}-json`);
    if (jsonElement) {
        const data = JSON.parse(jsonElement.textContent);
        translatePage(data);
    } else {
        console.error('Error loading the JSON data');
    }
}

function translatePage(data) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (data[key]) {
            element.textContent = data[key];
        }
    });
}