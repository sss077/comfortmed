var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
const navList = document.querySelector(".nav__menu-list");
const link = document.querySelectorAll(".nav__link");
const btn = document.querySelector(".nav__menu");
const body = document.querySelector("body");
btn.addEventListener("click", () => {
  navList.classList.toggle("active");
  if (navList.classList.contains("active")) {
    body.style.overflow = "hidden"
  }
  else{
    body.style.overflow = "auto"
  }
});
link.forEach((el) =>
  el.addEventListener("click", () => {
    navList.classList.remove("active");
    body.style.overflow = "auto";
  })
);
