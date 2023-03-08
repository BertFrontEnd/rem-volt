const rotateArrow = () => {
  const button = document.querySelector('.services__button');

  button.addEventListener('click', function () {
    this.classList.toggle('arrow-collapsed');
    this.classList.toggle('arrow-deployed');
    this.classList.toggle('button-more');
    this.classList.toggle('button-less');

    if (this.classList.contains('button-less')) {
      this.textContent = 'свернуть список';
    } else {
      this.textContent = 'еще услуги';
    }
  });
};

export { rotateArrow };
