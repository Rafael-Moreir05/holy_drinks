let test1 = true;
let test2 = true;
let test3 = true;

document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('p1')) {
    const element = document.querySelector('#desc1');
    if (test1) {
      element.style.display = 'block';
      test1 = false;
    } else {
      element.style.display = 'none';
      test1 = true;
    }
  }

  if (target.classList.contains('p2')) {
    const element = document.querySelector('#desc2');
    if (test2) {
      element.style.display = 'block';
      test2 = false;
    } else {
      element.style.display = 'none';
      test2 = true;
    }
  }

  if (target.classList.contains('p3')) {
    const element = document.querySelector('#desc3');
    if (test3) {
      element.style.display = 'block';
      test3 = false;
    } else {
      element.style.display = 'none';
      test3 = true;
    }
  }
});
