// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';

// dark

let root = document.querySelector(":root");
let color = document.querySelector(".color");
let button = document.querySelector("#themeToggle");

button.addEventListener('click', (e) => {
    e.preventDefault();
    // root.classList.toggle('dark');
    color.classList.toggle('dark');
})





//  tell

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+3 (___)-___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

// header scroll исчезает при припрокрутки


let prevScrollpos = window.scrollY;
window.onscroll = function(e) {
  e.preventDefault();
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("mobiele__footer").style.bottom = "0";
  } else {
    document.getElementById("header").style.top = "-145px";
    document.getElementById("mobiele__footer").style.bottom = "-145px";
  }
  prevScrollpos = currentScrollPos;
}

// бургер

$('.burger-menu-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('burger-menu-btn_active');
  $('.header-menu').toggleClass('header-menu_active');
});



// up-slide

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,

    dynamicBullets: true,

    grabCursor: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});


$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    sldesToScroll: 1,
    speed: 500,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotHover: true,
    draggable: true,
    waitForAnimate: false, 
    centerMode: false, 
    variableWidth: true, 
    responsive: [
      {
        breakpoint: 1169,
        settings: {
          slidesToShow: 1
        }
      }

    ],


  });


});


// city


const city_all = document.querySelector(".city__all");
const citys_list = document.querySelector(".citys-list");
const city = document.querySelectorAll(".citys");


city_all.addEventListener("click", () => {
  citys_list.classList.toggle("active");
  city_all.querySelector(".city-down").classList.toggle("city-up");
});


city.forEach((citys) => {
  citys.addEventListener("click", () => {
    city.forEach((citys) => { citys.classList.remove(".city_all") });
    city_all.querySelector("span").innerHTML = citys.innerHTML;
    citys.classList.add(".city_all");
    citys_list.classList.toggle("active");
    city_all.querySelector(".city-down").classList.toggle(".city-up");
  });
});


// search

const search = document.querySelector('.search');
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
  e.stopPropagation();
  this.classList.add('search--active');
});

body.addEventListener('click', function () {
  search.classList.remove('search--active');
});




// сортировка товара


document.querySelector('#sort-cheaper').onclick = function () {
  mySortCheaper('data-price');
}
document.querySelector('#sort-expensive').onclick = function () {
  mySortExpensive('data-price');
}
document.querySelector('#sort-sort').onclick = function () {
  mySortCheaper('data-id');
}
document.querySelector('#sort-quantity').onclick = function () {
  mySortCheaper('data-quantity');
}
document.querySelector('#sort-weight').onclick = function () {
  mySortCheaper('data-weight');
}

function mySortCheaper(sortType) {
  let nav = document.querySelector('.slider__items');
  for(let i = 0; i < nav.children.length; i++) {
    for(let j = i; j < nav.children.length; j++) {
      if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function mySortExpensive(sortType) {
  let nav = document.querySelector('.slider__items');
  for(let i = 0; i < nav.children.length; i++) {
    for(let j = i; j < nav.children.length; j++) {
      if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}




const sort_all = document.querySelector(".sort__all");
const sorts_list = document.querySelector(".sorts-list");
const sort = document.querySelectorAll(".sorts");


sort_all.addEventListener("click", () => {
  sorts_list.classList.toggle("active");
  sort_all.querySelector(".sort-down").classList.toggle("sort-up");
});


sort.forEach((sorts) => {
  sorts.addEventListener("click", () => {
    sort.forEach((sorts) => { sorts.classList.remove(".sort_all") });
    sort_all.querySelector("span").innerHTML = sorts.innerHTML;
    sorts.classList.add(".sort_all");
    sorts_list.classList.toggle("active");
    sort_all.querySelector(".sort-down").classList.toggle(".sort-up");
  });
});


// анимация добавления товара

$('.slider__item').click(function (e) {
  let butWrap = $(this).parents('.slider__item');
  butWrap.append('<div class="animtocart"></div>');
  $('.animtocart').css({
    'position': 'absolute',
    'background': 'var(--main-color-orahge)',
    'width': '25px',
    'height': '25px',
    'border-radius': '100px',
    'z-index': '9999999999',
    'left': e.pageX - 25,
    'top': e.pageY - 25,

  });
  var cart = $('.order-cart-wrapper').offset();
  $('.animtocart').animate({ top: cart.top + 'px', left: cart.left + 'px', width: 0, height: 0 }, 800, function () {
    $(this).remove();
  });
});



