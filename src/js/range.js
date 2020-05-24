const slider = document.querySelector('.config-range__line');
const activeSlider = slider.querySelector('.config-range__line_active');
const thumb = slider.querySelector('.config-range__thumb');
const result = document.querySelector('.config-range__active');

let core = 6;

const step = slider.offsetWidth / 6;
const points = [step, step*2.5, step*3.5, step*4.5, step*5.5, step*6];

result.innerHTML = '6 ядер';

function range(newLeft) {
  let rightEdge = slider.offsetWidth - thumb.offsetWidth + 3;

  if (newLeft < points[0]) {
    newLeft = 0;
    core = 2;
    result.innerHTML = '2 ядpa';
  }
  if (points[0] <= newLeft && newLeft < points[1]) {
    newLeft = points[0];
    core = 4;
    result.innerHTML = '4 ядpa';
  }
  if (points[1] <= newLeft && newLeft < points[2]) {
    newLeft = points[1];
    core = 6;
    result.innerHTML = '6 ядер';
  }
  if (points[2] <= newLeft && newLeft < points[3]) {
    newLeft = points[2];
    core = 8;
    result.innerHTML = '8 ядер';
  }
  if (points[3] <= newLeft && newLeft < points[4]) {
    newLeft = points[3];
    core = 10;
    result.innerHTML = '10 ядер';
  }

  if (points[4] < newLeft) {
    newLeft = rightEdge;
    core = 12;
    result.innerHTML = '12 ядер';
  }

  thumb.style.left = newLeft + 'px';
  activeSlider.style.width = newLeft + 'px';
};

thumb.onmousedown = function(event) {
  event.preventDefault(); 

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let leftPosition = event.clientX - shiftX - slider.getBoundingClientRect().left;
    range(leftPosition);
  }

  function onMouseUp() {
    render(core, isGpu, isRaid, isSsd);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

thumb.ontouchstart = function(event) {
  let shiftX = event.touches[0].clientX - thumb.getBoundingClientRect().left;

  slider.addEventListener('touchmove', onToucheMove);
  slider.addEventListener('touchend', onToucheEnd);

  function onToucheMove(event) {
    let leftPosition = event.touches[0].clientX - shiftX - slider.getBoundingClientRect().left;
    range(leftPosition);
  }

  function onToucheEnd() {
    render(core, isGpu, isRaid, isSsd);
    slider.addEventListener('touchmove', onToucheMove);
    slider.addEventListener('touchend', onToucheEnd);
  }
};

thumb.ondragstart = function() {
  return false;
};
