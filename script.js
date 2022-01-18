const elements = document.querySelectorAll('.element');
const texts = document.querySelectorAll('.text');
const signs = document.querySelectorAll('.sign');

elements.forEach((element, index) => {
   element.addEventListener('click', () => {
      texts[index].classList.toggle('active');
      signs[index].classList.toggle('active');
   });
});