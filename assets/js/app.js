   
// // Select all product swiper containers
// document.querySelectorAll(
//   ".product-swiper, .product-swiper-2, .product-swiper-3, .product-swiper-4, .product-swiper-5, .product-swiper-6"
// ).forEach(function (swiperContainer) {
//   new Swiper(swiperContainer, {
//     slidesPerView: 5,      // default: 5 products
//     slidesPerGroup: 5,     // move 5 products per click
//     spaceBetween: 9,       // gap between products
//     navigation: {
//       nextEl: ".product-next",
//       prevEl: ".product-prev",
//     },
//     loop: false,

//     // Responsive breakpoints
//     breakpoints: {
//       1024: {  // tablets and below
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//         spaceBetween: 8,
//       },
//       768: {   // mobile
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//         spaceBetween: 6,
//       },
//       355: {   // small mobile
//         slidesPerView: 3.5,
//         slidesPerGroup: 2,
//         spaceBetween: 2,
//       }
//     }
//   });
// });


//     // Duplicate products dynamically
//     const swiperWrapper = document.querySelector(".product-wrapper");
//     const firstSlide = document.querySelector(".product-card");

//     for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
//       let clone = firstSlide.cloneNode(true);
//       swiperWrapper.appendChild(clone);
//     }


//      // Duplicate products dynamically
//     const product_sixest = document.querySelector(".product-wrappers");
//     const firstSlides = document.querySelector(".product-cards");

//     for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
//       let clone = firstSlides.cloneNode(true);
//       product_sixest.appendChild(clone);
//     }


//      // Duplicate products dynamically
//     const product_fivest = document.querySelector(".product-wrapper_fivest");
//     const firstSlidess= document.querySelector(".product-card_fivest");

//     for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
//       let clone = firstSlidess.cloneNode(true);
//       product_fivest.appendChild(clone);
//     }
//      // Duplicate products dynamically
//     const product_fourty = document.querySelector(".product-wrapper_fourty");
//     const fourty= document.querySelector(".product-card_fourty");

//     for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
//       let clone = fourty.cloneNode(true);
//       product_fourty.appendChild(clone);
//     }
//      // Duplicate products dynamically
//     const product_third = document.querySelector(".product-wrapper_third");
//     const _third= document.querySelector(".product-card_third");

//     for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
//       let clone = _third.cloneNode(true);
//       product_third.appendChild(clone);
//     }
//      // Duplicate products dynamically
//     const product_second = document.querySelector(".product-wrapper_second");
//     const second= document.querySelector(".product-card_second");

//     for (let i = 0; i < 19; i++) { // already 1 exists, so add 19 more
//       let clone = second.cloneNode(true);
//       product_second.appendChild(clone);
//     }
    

//     //collection banner
//     var swiper = new Swiper(".collection-swiper", {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".collection-swiper .swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     320: {   // mobile
//       slidesPerView: 1.3,
//       spaceBetween: 5,
      
      
//     },
//     768: {   // tablet
//       slidesPerView: 2,
      
//     },
//     1024: {  // desktop
//       slidesPerView: 3,
      
//     }
//   }
// });


//  var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3, // default (desktop)
//   spaceBetween: 13,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     220: {
//       slidesPerView: 1, // mobile
//     },
//     768: {
//       slidesPerView: 2, // tablet
//     },
//     1024: {
//       slidesPerView: 3, // desktop
//     }
//   }
// });

// function selectGender(gender) {
//   const buttons = document.querySelectorAll('.gender-selector-btn');
//   buttons.forEach(btn => btn.classList.remove('active'));

//   let page = "";
//   if (gender === "men") {
//     buttons[0].classList.add("active");
//     page = "men.html";
//   } else {
//     buttons[1].classList.add("active");
//     page = "women.html";
//   }

//   // 🔹 Load external page content into main-content
//   fetch(page)
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById("main-content").innerHTML = data;
//     })
//     .catch(error => {
//       document.getElementById("main-content").innerHTML = "<p>Error loading page.</p>";
//       console.error("Error:", error);
//     });
// }

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3, // default (desktop)
//   spaceBetween: 13,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: true,
    
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     220: {
//       slidesPerView: 1, // mobile
//     },
//     768: {
//       slidesPerView: 2, // tablet
//     },
//     1024: {
//       slidesPerView: 3, // desktop
//     }
//   }
// });

 