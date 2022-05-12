window.addEventListener('DOMContentLoaded', () => {
  const [...slides] = document.querySelectorAll('.slide-mem'),
        sliderWrapper = document.querySelector('.slider-wrapper'),
        sliderDescr = document.querySelector('.slider-descr'),
        sliderField = document.querySelector('.slider-inner'),
        descrField = document.querySelector('.descr-inner'),
        [...descriptions] = document.querySelectorAll('.descr'),
        [...dots] = document.querySelectorAll('.dot-wrapper'),
        [...controls] = document.querySelectorAll('.control'),
        width = window.getComputedStyle(sliderWrapper).width,
        widthDescr = window.getComputedStyle(sliderDescr).width;

   let offset = 0;


   sliderField.style.width = 100 * slides.length + "%";
   slides.forEach( slide => {
     slide.style.width = width;
   });

   descrField.style.width = 100 * descriptions.length + "%";
   descriptions.forEach( text => {
     text.style.width = widthDescr;
   });


   console.log(widthDescr);

   dots.forEach( (dot, index) => {
     dot.addEventListener("click", (e) => {
       const slideTo =  index + 1;

       offset = +width.slice(0, width.length - 2) * (slideTo - 1);
       console.log(offset);

       sliderField.style.transform = `translateX(-${offset}px)`;

       controls[slideTo - 1].classList.add('active');
       controls.forEach((control, index) => {
         if(index !== slideTo - 1) {
           control.classList.remove('active');
         }
       });

       descriptions[slideTo - 1].classList.remove('hidden');
       descriptions.forEach((phrase, index) => {
         if(index !== slideTo - 1) {
           phrase.classList.add('hidden');
         }
       })

     })
    })

});
