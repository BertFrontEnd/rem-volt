const setReplacement = () => {
  const accordionButtons = document.querySelectorAll('.list__button');
  const items = document.querySelectorAll('.list__item');

  for (let button of accordionButtons) {
    button.addEventListener('click', function () {
      this.classList.toggle('button-plus');
      this.classList.toggle('button-minus');

      let element = this.nextElementSibling;

      element.style.maxHeight
        ? (element.style.maxHeight = null)
        : (element.style.maxHeight = `${element.scrollHeight}px`);
    });
  }
};

export { setReplacement };
