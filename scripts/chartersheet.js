const openBtn = document.getElementById('openBtn');
const characterSheet = document.querySelector('.charactersheet');

function preventScroll(e) {
  e.preventDefault();
}

function preventKeyScroll(e) {
  const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Spacebar'];
  if (keys.includes(e.key)) {
    e.preventDefault();
  }
}

function disableScroll() {
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });
  window.addEventListener('keydown', preventKeyScroll, { passive: false });
  document.body.classList.add('blur-scroll-blocked');
}

function enableScroll() {
  window.removeEventListener('wheel', preventScroll, { passive: false });
  window.removeEventListener('touchmove', preventScroll, { passive: false });
  window.removeEventListener('keydown', preventKeyScroll, { passive: false });
  document.body.classList.remove('blur-scroll-blocked');
}

function updateOpenBtnVisibility() {
  if (characterSheet.classList.contains('visible')) {
    openBtn.style.display = 'none'; // скрыть кнопку
  } else {
    openBtn.style.display = ''; // показать кнопку
  }
}

openBtn.addEventListener('click', (e) => {
  const nowVisible = !characterSheet.classList.contains('visible');
  characterSheet.classList.toggle('visible', nowVisible);
  document.body.classList.toggle('blurred', nowVisible);

  if (nowVisible) {
    disableScroll();
  } else {
    enableScroll();
  }

  updateOpenBtnVisibility();

  e.stopPropagation();
});

document.addEventListener('click', (event) => {
  if (!characterSheet.contains(event.target)) {
    characterSheet.classList.remove('visible');
    document.body.classList.remove('blurred');
    enableScroll();

    updateOpenBtnVisibility();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    characterSheet.classList.remove('visible');
    document.body.classList.remove('blurred');
    enableScroll();

    updateOpenBtnVisibility();
  }
});

// Инициализация видимости кнопки при загрузке, если нужно:
updateOpenBtnVisibility();