 const scrollDownBtn = document.getElementById('scrollDownBtn');

function checkScrollAvailability() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const fullHeight = document.documentElement.scrollHeight;

  const offsetToHide = 200; // расстояние до конца страницы в пикселях

  if (
    fullHeight > windowHeight && // есть прокрутка
    scrollTop > 20 && // немного прокрутки
    scrollTop + windowHeight < fullHeight - offsetToHide // не слишком близко к низу
  ) {
    scrollDownBtn.classList.add('visible');
  } else {
    scrollDownBtn.classList.remove('visible');
  }
}

// Обработчик клика — прокрутить в самый низ
scrollDownBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', checkScrollAvailability);
window.addEventListener('resize', checkScrollAvailability);
window.addEventListener('load', checkScrollAvailability);