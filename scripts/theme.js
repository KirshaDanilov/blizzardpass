const themeButton = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');
const metaColorScheme = document.getElementById('color-scheme-meta');

let currentTheme = 'dark'; // по умолчанию или из localStorage

// Попытка считать тему из localStorage
if (localStorage.getItem('theme')) {
  currentTheme = localStorage.getItem('theme');
  changeTheme(currentTheme);
}

themeButton.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  changeTheme(currentTheme);
});

function changeTheme(theme) {
  // Меняем CSS файл
  if (theme === 'dark') {
    themeStylesheet.setAttribute('href', './styles/dark.css');
    metaColorScheme.setAttribute('content', 'dark');
  } else {
    themeStylesheet.setAttribute('href', './styles/light.css');
    metaColorScheme.setAttribute('content', 'light');
  }
  // Сохраняем выбор
  localStorage.setItem('theme', theme);
}