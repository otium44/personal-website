/*=============== Contact ===========*/
let inputs = document.querySelectorAll('.contact-input');
let labels = document.querySelectorAll('.contact-label')
for(let i = 0; i < inputs.length ; i++){
  inputs[i].addEventListener('focus', () => {
    labels[i].classList.add('active')
  })
}
// ============================================

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*=============== SHOW MENU ===============*/
if (navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
/*============== MENU HIDDEN ===============*/
if (navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav-link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(e => e.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  if(this.scrollY > 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);
function navHighlighter(){
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
    }
    else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  })
}
/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.getElementById('theme-button');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.font-size span')
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');
const bG1 = document.querySelector('.bg-1');
const bG2 = document.querySelector('.bg-2');
const bG3 = document.querySelector('.bg-3');

const openThemeModal = () => {
  themeModal.style.display = 'grid';
}
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none';
  }
}

theme.addEventListener('click', openThemeModal)
themeModal.addEventListener('click', closeThemeModal)
/*===== FONTS =====*/
fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    let fontSize;
    fontSizes.forEach(e => e.classList.remove('active'))
    size.classList.add('active')
    if (size.classList.contains('font-size-1')){
      fontSize = '12px'
    } 
    else if (size.classList.contains('font-size-2')){
      fontSize = '14px'
    }
    else if (size.classList.contains('font-size-3')){
      fontSize = '16px'
    }
    else if (size.classList.contains('font-size-4')){
      fontSize = '18px'
    }
    document.querySelector('html').style.fontSize = fontSize;
  })
})

/*===== PRIMARY COLORS =====*/
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    if(color.classList.contains('color-1')){
      primaryHue = 252;
    }
    else if(color.classList.contains('color-2')){
      primaryHue = 52;
    }
    else if(color.classList.contains('color-3')){
      primaryHue = 352;
    }
    else if(color.classList.contains('color-4')){
      primaryHue = 152;
    }
    else if(color.classList.contains('color-5')){
      primaryHue = 202;
    }
    colorPalette.forEach(x => x.classList.remove('active'))
    color.classList.add('active')
    root.style.setProperty('--primary-color-hue', primaryHue)
  })
})
/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
function changeBg(){
  root.style.setProperty("--light-color-lightness", lightColorLightness)
  root.style.setProperty("--white-color-lightness", whiteColorLightness)
  root.style.setProperty("--dark-color-lightness", darkColorLightness)
}
bG1.addEventListener('click', () => {
  bG1.classList.add('active');
  bG2.classList.remove('active');
  bG3.classList.remove('active');
  
  // remove cusomized changes from local storge 
  window.location.reload();
})
bG2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  bG2.classList.add('active');
  bG1.classList.remove('active');
  bG3.classList.remove('active');
  changeBg();
})
bG3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  bG3.classList.add('active');
  bG1.classList.remove('active');
  bG2.classList.remove('active');
  changeBg();
})
