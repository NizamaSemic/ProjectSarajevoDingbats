const mySlides = document.querySelector('.slides');
const myImages = document.querySelectorAll('.slides img');
const preButt = document.querySelector('#prevB');
const nextButt = document.querySelector('#nextB');
let counter=1;
const size = myImages[0].clientWidth;
mySlides.style.transform = 'translateX('+(-size*counter)+'px)';
nextButt.addEventListener('click',()=>{
  if(counter>=myImages.length-1) return;
  mySlides.style.transition='transform 0.4s ease-in-out';
  counter++;
  mySlides.style.transform='translateX('+(-size*counter)+'px)';

});

preButt.addEventListener('click',()=>{
  if(counter<=0) return;
  mySlides.style.transition='transform 0.4s ease-in-out';
  counter--;
  mySlides.style.transform='translateX('+(-size*counter)+'px)';

});

mySlides.addEventListener('transitionend',()=> {

  console.log(myImages[counter]);
  if(myImages[counter].id==='lastC'){
    myImages.style.transition='none';
    counter= myImages.length - 2;
    mySlides.style.transform='translateX('+(-size*counter)+'px)';
  }
  if(myImages[counter].id==='firstC'){
    myImages.style.transition='none';
    counter= myImages.length - counter;
    mySlides.style.transform='translateX('+(-size*counter)+'px)';
  }
})