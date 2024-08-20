const menuBar = document.querySelector(".menu-bar")
const hamburgerMenu = document.querySelector(".hamburger-nav-links")
const hamburgerBtn = document.querySelector(".hamburger-btn")

let isclicked = false


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.target.classList.contains("pop")){
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-show');
              }
        }

        if(entry.target.classList.contains("right")){
            if (entry.isIntersecting) {
                entry.target.classList.add('right-show');
              }
        }

        if(entry.target.classList.contains("left")){
            if (entry.isIntersecting) {
                entry.target.classList.add('left-show');
              }
        }

        if(entry.target.classList.contains("top")){
            if (entry.isIntersecting) {
                entry.target.classList.add('top-show');
              }
        }
        if(entry.target.classList.contains("nav-left")){
            if (entry.isIntersecting) {
                entry.target.classList.add('nav-left-show');
              }
        }
    });
  });

const right = document.querySelectorAll('.right')

right.forEach((ele) => {  
    observer.observe(ele)
})

const pop = document.querySelectorAll('.pop')

pop.forEach((ele) => {  
    observer.observe(ele)
})

const left = document.querySelectorAll('.left')

left.forEach((ele) => {  
    observer.observe(ele)
})

const topp = document.querySelectorAll('.top')

topp.forEach((ele) => {  
    observer.observe(ele)
})

const navLeft = document.querySelectorAll('.nav-left')

navLeft.forEach((ele) => {  
    observer.observe(ele)
})

menuBar.addEventListener("click" , () => {
    hamburgerMenu.classList.toggle("open")
    if(!isclicked) isclicked = true
    else{ 
        isclicked = false
        navLeft[0].classList.remove('nav-left-show');
    }
})
hamburgerBtn.addEventListener("click" , ()=> {
    hamburgerMenu.classList.toggle("open")
})