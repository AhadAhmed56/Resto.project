window.onload = () => {
  let menu = document.querySelector('#menu-bars');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };
};

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header.navbar');

window.onscroll = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
-
  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop-150;
    let id = sec.getAttribute('id');


    if( top => offset && top < offset + height){
      navlinks.forEach(links =>{
        links.classList.remove('active');

        document.querySelectorAll('header.navbar a[href*='+id+']').classList.add()



      });
    }
  });
}


document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active')
}


var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerVeiw: 2,
    },
    768: {
      slidesPerVeiw: 2,
    },
    1024: {
      slideperView: 3,
    },
  }
});

function loader(){
  document.querySelector('.loader-container').classlist.add('fade-out');
}

function fadeOut(){
  setInterval(loader,3000);
}

window.onload = fadeOut;