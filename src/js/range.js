const slider = document.querySelector('.config-range__line');
const activeSlider = slider.querySelector('.config-range__line_active');
const thumb = slider.querySelector('.config-range__thumb');
const result = document.querySelector('.config-range__active');

thumb.onmousedown = function(event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - thumb.getBoundingClientRect().left; // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';
    activeSlider.style.width = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

thumb.touchstart = function(event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - thumb.getBoundingClientRect().left; // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener('touchmove', onToucheMove);
  document.addEventListener('touchend', onToucheEnd);

  function onToucheMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
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
