const slider = document.querySelector('.config-range__line');
const activeSlider = slider.querySelector('.config-range__line_active');
const item = slider.querySelector('.config-range__roller');
const result = document.querySelector('.config-range__active');

var thumb = slider.querySelector('.config-range__roller');

thumb.onmousedown = function(e){

  let xShift = e.clientX - thumb.offsetLeft
  let max = slider.clientWidth - thumb.offsetWidth;
  
  document.onmousemove = function(e) {
    var current = e.clientX - xShift;
   
    if(current < 0){
       current = 0
    }
    
    else if(current > max){
       current = max
    }
    
    thumb.style.left = current + 'px';

  }
  document.onmouseup = function(e){
    document.onmousemove = document.onmouseup = '';
  }
  

}