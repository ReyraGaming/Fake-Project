document.addEventListener("DOMContentLoaded", function () {
  const urlShoes = "https://dummyjson.vercel.app/products/nike/shoes?limit=15";
  const urlBag = "https://dummyjson.vercel.app/products/nike/bagpacks?limit=15";

  const buttonMenu = document.querySelector("#button-menu")
  const menuMobile = document.querySelector("#mobile-menu")

  buttonMenu.onclick = () => {
    menuMobile.classList.toggle('hidden')
    menuMobile.classList.toggle('flex')
  }

  const products = [
    {
      image:
        "https://smartsoftt.com/fabulous/assets/img/slider/home1-slide2.jpg",
      title: "Shoes Product",
      desc: `Finding your own path means following your happiness.`,
      button: "Shop Now",
      path: "./products/shoes.html"
    },
    {
      image:
        "https://htmldemo.net/bagse/bagse/assets/images/sliders/slider1_bag4.jpg",
      title: "Backpacks Product",
      desc: "A man who both spends and saves money is the happiest man, because he has both enjoyments.",
      button: "Shop Now",
      path: "./products/backpacks.html"
    },
  ];


  const mainImages =  document.querySelector(".__imageNavigation");
  const carousel = mainImages.innerHTML

  mainImages.innerHTML = Mustache.render(carousel, {products})



  const carouselSwiper = new Swiper('.__navigation', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  fetch(urlShoes)
    .then((response) => response.json())
    .then((data) => {
      const Shoes = document.querySelector("#shoes-items");
      data.forEach((item) => {
        Shoes.innerHTML += `
        <div class="swiper-slide font-poppins">
          <img
            class="w-full h-50"
            src="${item.image}"
            alt="${item.title}"
          />
          <p class="text-center text-sm text-gray-500 py-4">${item.subtitle}</p>
          <h1 class="text-center text-xl">${item.title}</h1>
          <p class="text-center text-md">${item.price}<p>
        </div>`;
      });
    });

  const swiper = new Swiper(".__swiper-card", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
  });

  fetch(urlBag)
    .then((response) => response.json())
    .then((items) => {
      const Bags = document.querySelector("#bags-items");
      items.forEach((data) => {
        Bags.innerHTML += `
        <div class="swiper-slide font-poppins">
          <img
            class="w-full h-50"
            src="${data.image}"
            alt="${data.title}"
          />
          <p class="text-center text-sm text-gray-500 py-4">${data.subtitle}</p>
          <h1 class="text-center text-xl">${data.title}</h1>
          <p class="text-center text-md">${data.price}<p>
        </div>`;
      });
    });

  const swiper1 = new Swiper(".__swiper-card-1", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".button-next-1",
      prevEl: ".button-prev-1",
    },
    breakpoints: {
      640: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
  });
});
