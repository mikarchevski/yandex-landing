var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  loop: true,
  lazy: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".members__swiper-pagination-next",
    prevEl: ".members__swiper-pagination-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      lazy: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return (number);
        },
        formatFractionTotal: function (number) {
          return (number);
        },
        renderFraction: function (currentClass, total) {
          return '<span class="' + currentClass + '"></span>' + '/' +
            '<span class="' + total + '"></span>';
        },
      },
    },
    730: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      lazy: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return (number *2);
        },
        formatFractionTotal: function (number) {
          return (number *2);
        },
        renderFraction: function (currentClass, total) {
          return '<span class="' + currentClass + '"></span>' + '/' +
            '<span class="' + total + '"></span>';
        },
      },
    },
    1054: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 21,
      lazy: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return (number *3);
        },
        formatFractionTotal: function (number) {
          return (number *3);
        },
        renderFraction: function (currentClass, total) {
          return '<span class="' + currentClass + '"></span>' + '/' +
            '<span class="' + total + '"></span>';
        },
      },
    },
  },
});


var evolutionSwiper = new Swiper(".evolutionSwiper", {
 
  breakpoints: {
    150: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 31,
      pagination: {
        el: ".evolution-swiper-pagination",
      }, navigation: {
        nextEl: ".evolution__swiper-pagination-next",
        prevEl: ".evolution__swiper-pagination-prev",
      },
      lazy: true,
    },
    550: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 31,
      pagination: {
        el: ".evolution-swiper-pagination",
      }, navigation: {
        nextEl: ".evolution__swiper-pagination-next",
        prevEl: ".evolution__swiper-pagination-prev",
      },
      lazy: true,
    },
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      pagination: {
        el: ".evolution-swiper-pagination",
      }, navigation: {
        nextEl: ".evolution__swiper-pagination-next",
        prevEl: ".evolution__swiper-pagination-prev",
      },
      lazy: true,
    },
  },
});

$(function () {
  $('.marquee').marquee({
    duration: 7000,
    startVisible: true,
    duplicated: true
  });
});



window.onload = function () {
  setTimeout(()=>{
    document.querySelector(".top__chess-figure-1").classList.add("top__chess-figure-1--active");
  },500);
};

function memberPopup() {
  let buttons = document.querySelectorAll('.members__swiper-person-list-item-more');
  let body = document.querySelector('body');
  let popupBG = document.querySelector('.members__popup-bg');
  let memberDescription = document.querySelectorAll('.members__swiper-person-list-item-titul');
  let popupContentName = document.querySelector('.members__popup-form-name');
  let popupContentTitul = document.querySelector('.members__popup-form-titul');
  let closePopupButton = document.querySelector('.members__popup-form-close');

    let popupForm = document.querySelector('.members__popup-form');
    function removePopup(){
      popupBG.classList.remove('members__popup-bg--active');
      popupForm.classList.remove('members__popup-form--active');
      body.classList.remove('body--active');
    };
    function addPopup(){
      popupBG.classList.add('members__popup-bg--active');
      popupForm.classList.add('members__popup-form--active');
      body.classList.add('body--active');
    }

  buttons.forEach(e=>{
    e.addEventListener('click',e=>{
      addPopup()
      let btn = e.currentTarget.dataset.path;
      memberDescription.forEach(e=>{
        let memberName = document.querySelector(`[data-name=${btn}]`);
        let memberTitul = document.querySelector(`[data-titul=${btn}]`);
        
        popupContentName.textContent = memberName.textContent;
        popupContentTitul.textContent = memberTitul.textContent;

      });
    });
    
  });
  document.addEventListener('click', (e) => {
    if(e.target === popupBG) {
      removePopup();
    }
  });

  
  document.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; in ES6+
        if (key === "Escape") {
            removePopup();
        }
    });
  closePopupButton.addEventListener('click', () =>{
    removePopup();
  });
}

memberPopup();