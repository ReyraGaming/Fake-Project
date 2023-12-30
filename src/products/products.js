document.addEventListener("DOMContentLoaded", function () {
  const urlShoes = "https://dummyjson.vercel.app/products/nike/shoes?limit=25";
  const urlBag = "https://dummyjson.vercel.app/products/nike/bagpacks?limit=25";

  const buttonMenu = document.querySelector("#button-list-menu");
  const menuMobile = document.querySelector("#mobile-list-menu");

  buttonMenu.onclick = () => {
    menuMobile.classList.toggle("hidden");
    menuMobile.classList.toggle("flex");
  };

  //Shoes Products
  fetch(urlShoes)
    .then((response) => response.json())
    .then((data) => {
      const Shoes = document.querySelector("#shoes-items");
      data.forEach((item) => {
        Shoes.innerHTML += `
        <div class="font-poppins">
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

  // Backpack
  fetch(urlBag)
    .then((response) => response.json())
    .then((items) => {
      const Bags = document.querySelector("#bags-items");
      items.forEach((data) => {
        Bags.innerHTML += `
        <div class="font-poppins">
          <img
            class="w-full h-50"
            src="${data.image}"
            alt="${data.title}"
          />
          <p class="text-center text-sm text-gray-500 py-4">${data.subtitle}</p>
          <h1 class="text-center text-xl">${data.title}</h1>
          <p class="text-center text-md mb-6">${data.price}<p>
        </div>`;
      });
    });
});
