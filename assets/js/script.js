
// Select all product swiper containers
document.querySelectorAll(
  ".product-swiper, .product-swiper-2, .product-swiper-3, .product-swiper-4, .product-swiper-5, .product-swiper-6"
).forEach(function (swiperContainer) {
  new Swiper(swiperContainer, {
    slidesPerView: 5,      // default: 5 products
    slidesPerGroup: 5,     // move 5 products per click
    spaceBetween: 9,       // gap between products
    navigation: {
      nextEl: ".product-next",
      prevEl: ".product-prev",
    },
    loop: false,

    // Responsive breakpoints
    breakpoints: {
      1024: {  // tablets and below
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 8,
      },
      768: {   // mobile
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 6,
      },
      355: {   // small mobile
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 3,
      }
    }
  });
});


    // Duplicate products dynamically
    const swiperWrapper = document.querySelector(".product-wrapper");
    const firstSlide = document.querySelector(".product-card");

    for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
      let clone = firstSlide.cloneNode(true);
      swiperWrapper.appendChild(clone);
    }


     // Duplicate products dynamically
    const product_sixest = document.querySelector(".product-wrappers");
    const firstSlides = document.querySelector(".product-cards");

    for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
      let clone = firstSlides.cloneNode(true);
      product_sixest.appendChild(clone);
    }


     // Duplicate products dynamically
    const product_fivest = document.querySelector(".product-wrapper_fivest");
    const firstSlidess= document.querySelector(".product-card_fivest");

    for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
      let clone = firstSlidess.cloneNode(true);
      product_fivest.appendChild(clone);
    }
     // Duplicate products dynamically
    const product_fourty = document.querySelector(".product-wrapper_fourty");
    const fourty= document.querySelector(".product-card_fourty");

    for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
      let clone = fourty.cloneNode(true);
      product_fourty.appendChild(clone);
    }
     // Duplicate products dynamically
    const product_third = document.querySelector(".product-wrapper_third");
    const _third= document.querySelector(".product-card_third");

    for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
      let clone = _third.cloneNode(true);
      product_third.appendChild(clone);
    }
     // Duplicate products dynamically
    const product_second = document.querySelector(".product-wrapper_second");
    const second= document.querySelector(".product-card_second");

    for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
      let clone = second.cloneNode(true);
      product_second.appendChild(clone);
    }
    

    //collection banner
    var swiper = new Swiper(".collection-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".collection-swiper .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {   // mobile
      slidesPerView: 1.3,
      spaceBetween: 5,
      
      
    },
    768: {   // tablet
      slidesPerView: 2,
      
    },
    1024: {  // desktop
      slidesPerView: 3,
      
    }
  }
});


 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // default (desktop)
  spaceBetween: 13,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    220: {
      slidesPerView: 1, // mobile
    },
    768: {
      slidesPerView: 2, // tablet
    },
    1024: {
      slidesPerView: 3, // desktop
    }
  }
});


   function selectGender(gender) {
  const selector = document.querySelector(".gender-selector");
  const menBtn = document.querySelector(".gender-selector-btn:nth-child(2)");
  const womenBtn = document.querySelector(".gender-selector-btn:nth-child(3)");
  const loader= document.getElementById('loader');

  // Reset active classes
  menBtn.classList.remove("active");
  womenBtn.classList.remove("active");
if (gender === "men") {
  selector.classList.remove("active"); 
  menBtn.classList.add("active");

  // Show loader immediately
  loader.style.display = "flex";

  // After 50 seconds, hide loader and go to men.html
  setTimeout(() => {
    loader.style.display = "none";
    window.location.href = "/pages/men.html"; 
  }, 4000); // 50 sec
} 
else {
  selector.classList.add("active");
  womenBtn.classList.add("active");

  // Show loader immediately
  loader.style.display = "flex";

  // After 50 seconds, hide loader and go to women.html
  setTimeout(() => {
    loader.style.display = "none";
    window.location.href = "/pages/women.html"; 
  }, 4000); // 50 sec
}


}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // default (desktop)
  spaceBetween: 13,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    220: {
      slidesPerView: 1, // mobile
    },
    768: {
      slidesPerView: 2, // tablet
    },
    1024: {
      slidesPerView: 3, // desktop
    }
  }
});


// close bar
function toogle() {
  document.querySelectorAll('.phone_menubar_overlay, .phone_menubar')
    .forEach(el => {
      if (el.style.display === "none" || el.style.display === "") {
        el.style.display = "block"; // show
      } else {
        el.style.display = "none";  // hide
      }
    });
}


function openmenu(){
   document.querySelectorAll('.phone_menubar_overlay, .phone_menubar')
    .forEach(el => {
      if (el.style.display === "none" || el.style.display === "") {
        el.style.display = "block"; // show
      } else {
        el.style.display = "none";  // hide
      }
    });
}




function open_popup(){
  document.querySelectorAll('.filter_popup')
    .forEach(el => {
      if (el.style.display === "none" || el.style.display === "") {
        el.style.display = "block"; // show
      }
    });
}


function closebtn(){
    document.querySelectorAll('.filter_popup')
    .forEach(el => {
      if (el.style.display === "block" || el.style.display === "") {
        el.style.display = "none"; // show
        
      }
    });
}




function open_popup_sort(){
  document.querySelectorAll('.sort_popup')
    .forEach(el => {
      if (el.style.display === "none" || el.style.display === "") {
        el.style.display = "block"; // show
      }
    });
}


function close_sort(){
    document.querySelectorAll('.sort_popup')
    .forEach(el => {
      if (el.style.display === "block" || el.style.display === "") {
        el.style.display = "none"; // show
        
      }
    });
}

const buttons = document.querySelectorAll('.list.one');
const fb = document.querySelectorAll('.input_box_group .one');

buttons.forEach((list) => {
 list.addEventListener("click", () => {
 
fb.style.display = 'none';

  buttons.forEach(b => b.classList.remove("active"));
     list.classList.add("active");
    fb.style.display= 'block';



})});


