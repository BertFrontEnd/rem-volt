const setReplacement = () => {
  const accordionButtons = document.querySelectorAll('.list__button');
  const items = document.querySelectorAll('.list__item');

  for (let button of accordionButtons) {
    button.addEventListener('click', function () {
      this.classList.toggle('button-plus');
      this.classList.toggle('button-minus');
      console.log(this.nextElementSibling);
      this.nextElementSibling.classList.toggle('item-collapsed');
      this.nextElementSibling.classList.toggle('item-deployed');
    });
  }
};

export { setReplacement };
