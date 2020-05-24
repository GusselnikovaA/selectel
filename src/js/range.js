const slider = document.querySelector('.config-range__line');
const activeSlider = slider.querySelector('.config-range__line_active');
const thumb = slider.querySelector('.config-range__thumb');
const result = document.querySelector('.config-range__active');

const int = slider.offsetWidth / 6;
const points = [int, int*2.5, int*3.5, int*4.5, int*5.5, int*6];

result.innerHTML = '6 ядер';

thumb.onmousedown = function(event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - thumb.getBoundingClientRect().left; // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
    let rightEdge = slider.offsetWidth - thumb.offsetWidth + 3;

    if (newLeft < points[0]) {
      newLeft = 0;
      result.innerHTML = '2 ядpa';
    }
    if (points[0] <= newLeft && newLeft < points[1]) {
      newLeft = points[0];
      result.innerHTML = '4 ядpa';
    }
    if (points[1] <= newLeft && newLeft < points[2]) {
      newLeft = points[1];
      result.innerHTML = '6 ядер';
    }
    if (points[2] <= newLeft && newLeft < points[3]) {
      newLeft = points[2];
      result.innerHTML = '8 ядер';
    }
    if (points[3] <= newLeft && newLeft < points[4]) {
      newLeft = points[3];
      result.innerHTML = '10 ядер';
    }

    if (points[4] < newLeft) {
      newLeft = rightEdge;
      result.innerHTML = '12 ядер';
    }

    thumb.style.left = newLeft + 'px';
    activeSlider.style.width = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

thumb.ontouchstart = function(event) {
  let shiftX = event.touches[0].clientX - thumb.getBoundingClientRect().left; // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener('touchmove', onToucheMove);
  document.addEventListener('touchend', onToucheEnd);

  function onToucheMove(event) {
    let newLeft = event.touches[0].clientX - shiftX - slider.getBoundingClientRect().left;
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    
    if (newLeft < points[0]) {
      newLeft = 0;
      result.innerHTML = '2 ядpa';
    }
    if (points[0] <= newLeft && newLeft < points[1]) {
      newLeft = points[0];
      result.innerHTML = '4 ядpa';
    }
    if (points[1] <= newLeft && newLeft < points[2]) {
      newLeft = points[1];
      result.innerHTML = '6 ядер';
    }
    if (points[2] <= newLeft && newLeft < points[3]) {
      newLeft = points[2];
      result.innerHTML = '8 ядер';
    }
    if (points[3] <= newLeft && newLeft < points[4]) {
      newLeft = points[3];
      result.innerHTML = '10 ядер';
    }

    if (points[4] < newLeft) {
      newLeft = rightEdge;
      result.innerHTML = '12 ядер';
    }

    thumb.style.left = newLeft + 'px';
    activeSlider.style.width = newLeft + 'px';
  }

  function onToucheEnd() {
    document.addEventListener('touchmove', onToucheMove);
    document.addEventListener('touchend', onToucheEnd);
  }
};

thumb.ondragstart = function() {
  return false;
};
