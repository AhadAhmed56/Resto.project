
  let menu = document.querySelector('#menu-bars');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };


window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');

        let targetLink = document.querySelector('header .navbar a[href*=' + id + ']');
        if (targetLink) {
          targetLink.classList.add('active');
        }
      });
    }
  });
};



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



    function revealSections() {
        const sections = document.querySelectorAll('section');
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('reveal');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    window.addEventListener('load', revealSections); // page load par bhi trigger kare

    

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // animate once
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => {
      observer.observe(card);
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // run once
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => {
      observer.observe(card);
    });
  });


  

var swiper = new Swiper(".banner-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
