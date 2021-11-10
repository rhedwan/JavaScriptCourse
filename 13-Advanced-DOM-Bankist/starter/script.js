'use strict';



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to') ;
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header') ;
const message = document.createElement('div') ;

const nav  = document.querySelector('.nav') ;
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault() ;
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn =>btn.addEventListener('click', openModal)) ;

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


///////////////////////////////////////
// Implementing smooth scroll

btnScrollTo.addEventListener('click',function(e){
  // const s1coords = section1.getBoundingClientRect() ;
  // console.log(s1coords) ;

  // console.log(e.target.getBoundingClientRect()) ;

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset) ;

  // console.log('height/width viewport', document.documentElement.clientHeight,document.documentElement.clientWidth ) ;

  // Scrolling
  // console.log(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset) ;

  // window.scrollTo({
  //   left :s1coords.left + window.pageXOffset, 
  //   top :s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  // Modern
  section1.scrollIntoView({behavior: 'smooth'}) ;
});

///////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href') ;
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'}) ;

//   });
// });

// Event Delegation

// 1. Add event listener to common parent element
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    // 2. determine what element originated the event
    
    const id = e.target.getAttribute('href') ;
    document.querySelector(id).scrollIntoView({behavior: 'smooth'}) ;
  }

})

// Tabbed Component
const tabs  = document.querySelectorAll('.operations__tab') ;
const tabsContainer = document.querySelector('.operations__tab-container') ;
const tabsContent = document.querySelectorAll('.operations__content') ;

// tabs.forEach(t=> t.addEventListener('click', function(){
//   console.log('TAB');
// }))

tabsContainer.addEventListener('click', function(e){
  const clicked  = e.target.closest('.operations__tab') ;

  // Guard clause
  if(!clicked) return  ;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
 
  // Activate tab
  clicked.classList.add('operations__tab--active')

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
});

// Menu fade animation
const handleHover = function(e){
  
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link') ;
    const logo = link.closest('.nav').querySelector('img') ;

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this ;
    
    }) ;
    logo.style.opacity = this ;
  }
} ;

// Passing "argument" into handler

nav.addEventListener('mouseover', handleHover.bind(0.5)) ;
nav.addEventListener('mouseout', handleHover.bind(1)) ;

/* nav.addEventListener('mouseover', function(e){
  handleHover(e, 0.5) ;
}) ;

nav.addEventListener('mouseout', function(e){
  handleHover(e, 1) ;
}) ; */

// Sticky Navigation
/* const initialCoords = section1.getBoundingClientRect() ;

window.addEventListener('scroll', function(){
  
  if(window.scrollY > initialCoords.top) {
    nav.classList.add('sticky') ;
  }
  else{
    nav.classList.remove('sticky') ;
  }
}) ;
 */

// Sticky Navigation: Intersection Observer API
// const obsCallback = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry)
//     if(entry.isIntersecting) {
//       nav.classList.add('sticky') ;
//     }
//     else {
//       nav.classList.remove('sticky') ;
//     }
//   })
// }

// const obsOption = {
//   root: null,
//   threshold: [0, 0.1],

// } ;
// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1) ;

const navHeight = nav.getBoundingClientRect().height ;     

const stickyNav = function(entries){
  const [entry] = entries ; 
  // console.log(entry) ;
  if(!entry.isIntersecting) nav.classList.add('sticky') ;
  else nav.classList.remove('sticky') ;

}

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold:0, rootMargin: `-${navHeight}px` }) ;   
   
headerObserver.observe(header) ;  

// Reveal Sections on Scroll
const allSections = document.querySelectorAll('.section') ;
const revealSections = function(entries, observer){
  const [entry] = entries ; 
  if(!entry.isIntersecting) return ;
  entry.target.classList.remove('section--hidden') ;
  observer.unobserve(entry.target) ;
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold:0.15
}) ;

allSections.forEach(s =>{ 
  sectionObserver.observe(s) ;
  // s.classList.add('section--hidden') ;
}) ;

// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]') ;
 
const loadImg = function(entries, observer){
  const [entry] = entries ; 

  if(!entry.isIntersecting) return ;  

  // Replace src attribute to data-src attribute

  entry.target.src = entry.target.dataset.src ;
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img') ;
  }) ;
  observer.unobserve(entry.target) ;  
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null, 
  threshold: 0,
  rootMargin: '200px'  
});

imgTargets.forEach(img => imgObserver.observe(img)) ;

// Slider
const slides = document.querySelectorAll('.slide') ;
const btnLeft = document.querySelector('.slider__btn--left') ;    
const btnRight = document.querySelector('.slider__btn--right') ;    
let currentSlide = 0 ;
const maxSlide = slides.length ;

const slider  = document.querySelector('.slider') ;
slider.style.transform = 'scale(0.5)' ;
slider.style.overflow = 'visible' ;

slides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * index}%)`)) ; 

// Next Slide
btnRight.addEventListener('click', function(){  
  currentSlide ++ ;
  slides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`)) ; 

});
///////////////////////////////////////
// Creating and inserting elements
//.insertAdjacentHTML

/* message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.' ;
message.innerHTML =  `We use cookies for improved functionality and
 analytics.<button class="btn  btn--close-cookie"> Got it </button>` ;

//  prepend add it as the first child of the target element
// N:B Conventionally prepend and append can't be used together 
// header.prepend(message) ;

header.append(message) ;

// this would make bothe the prepend and append appear
// header.append(message.cloneNode(true)) ;

// header.before(message) ;
// header.after(message) ;

// Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove() ;

  // The previous way of doing it
  // message.parentElement.removeChild(message) ;
}) */



///////////////////////////////////////
// Other Event listener

/* const h1 = document.querySelector('h1') ;

const alertH1 = function (e) {
  alert('addEventListener: Great ! You are reading the heading:D') ;
}
h1.addEventListener('mouseenter', alertH1 )
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1)
  
}, 3000);
 */
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
/* 
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');

console.log(allSections) ;

// HTMLCollection
document.getElementById('section--1')

const allButtons = document.getElementsByTagName('button') ;
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));
*/


// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great ! You are reading the heading:D')
// };



/* 
// Styles
message.style.backgroundColor = '#37383d' ;
message.style.width = '120%' ;

// Getting an existing styles
// It only works for the iniline styles
console.log(message.style.color);
console.log(message.style.backgroundColor);

// All the styles
console.log(getComputedStyle(message)) ;
console.log(getComputedStyle(message).color) ;
console.log(getComputedStyle(message).height) ;

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px' ;

document.documentElement.style.setProperty('--color-primary', 'orangered') ;

// Attributes
const logo = document.querySelector('.nav__logo') ;
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo' ;

// Not a standard attribute
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('comapany', 'Bankist') ;

// Relative and Absolute Path
console.log(logo.src);
console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link') ;
const link = document.querySelector('.nav__link--btn') ;

// Absolute
console.log(link.href);


// Relative
console.log(link.getAttribute('href'));


// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c') ;
logo.classList.remove('c') ;
logo.classList.toggle('c') ;
logo.classList.contains('c') ; // not includes

// Don't use this. ut overwrite the existing values
logo.className = 'ridwan';
 */

///////////////////////////////////////
// Bubbling 
/* 
// rgb(255, 255, 2555)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min +1)+ min) ;
const randomColor = () => `rgb(${randomInt(0, 256)},${randomInt(0, 256)}, ${randomInt(0, 256)})` ;

document.querySelector('.nav__link').addEventListener('click', function(e){
  e.preventDefault();
  this.style.backgroundColor = randomColor() ;
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation() ;
})

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  this.style.backgroundColor = randomColor() ;
  console.log('CONTAINER', e.target, e.currentTarget);

})

document.querySelector('.nav').addEventListener('click', function(e){
  e.preventDefault();
  this.style.backgroundColor = randomColor() ;
  console.log('NAV', e.target, e.currentTarget);

})
 */

/* 
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white' ;
h1.lastElementChild.style.color = 'orangered' ;

// Going upward: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)' ;

h1.closest('h1').style.background = 'var(--gradient-primary)' ;


// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if(el !==h1) el.style.transform = 'scale(0.5)'
}) */
