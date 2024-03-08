const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.classList.value;

    const p = value.split(' ');

    const classButton = p.filter((item) => {
      return item.includes('p');
    });

    const element = document.querySelector(`#${classButton} span`);
    const button = document.querySelector(`.${classButton}`);

    //quero mudar o titulo do botão para - quando ele tiver não tiver a classe hide

    element.classList.toggle('hide');

    if (element.classList.contains('hide')) {
      button.value = 'Saiba mais';
    } else {
      button.value = '-';
    }
  });
});
