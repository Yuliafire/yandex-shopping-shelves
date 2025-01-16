"use strict";

const products = document.querySelectorAll(".product");
const basketFirstState = document.querySelector(".basket-firstState");
const basketSecondState = document.querySelector(".basket-secondState");
const basketThirdState = document.querySelector(".basket-thirdState");
const btnPay = document.querySelector(".btn-pay");
const basket = document.querySelector(".basket");
const productsInBasket = {
  basketFirstState: ["wine", "milk", "honey", "cheese"],
  basketSecondState: ["beef", "chicken", "chips"],
  basketThirdState: ["pineapple", "banana", "apple", "salad"],
};

let current = null; //Holds the reference to the product element that is currently being dragged or touched.

let count = 0; // Keeps track of the number of products successfully added to any of the baskets.
let zIndex = 1; // Manages the stacking order of the baskets to ensure the most recently updated basket appears on top.

// Add event listeners to products
products.forEach((elem) => {
  elem.addEventListener("dragstart", handleDragStart);
  elem.addEventListener("touchstart", handleTouchStart);
});

// Handle drag start event
function handleDragStart(e) {
  current = this;
}

// Handle touch start event
function handleTouchStart(e) {
  current = this;
}

// Prevent default behavior for dragover and touchmove events
basket.addEventListener("dragover", (e) => e.preventDefault());
basket.addEventListener("touchmove", (e) => e.preventDefault());

// Update basket with the current product
function updateBasket(productsInBasket, basket, productName) {
  if (productsInBasket.includes(productName)) {
    basket.appendChild(current);
    basket.style.zIndex = zIndex++;
    count++;
    console.log(count);
  }
}

// Handle drop and touchend events
function handleDropOrTouchEnd(e) {
  if (!current) return;
  const productName = current.className.split(" ")[1];
  console.log(productName);

  updateBasket(
    productsInBasket.basketFirstState,
    basketFirstState,
    productName,
  );
  updateBasket(
    productsInBasket.basketSecondState,
    basketSecondState,
    productName,
  );
  updateBasket(
    productsInBasket.basketThirdState,
    basketThirdState,
    productName,
  );

  if (count >= 3) {
    btnPay.classList.add("btn-pay-visible");
  }
}

basket.addEventListener("drop", handleDropOrTouchEnd);
basket.addEventListener("touchend", handleDropOrTouchEnd);

// Handle pay button click
btnPay.addEventListener("click", () => {
  window.open("https://lavka.yandex.ru/", "_blank");
});

// Toggle pulse animation for pay button
function togglePulse() {
  btnPay.classList.toggle("pulsate");
}

setInterval(togglePulse, 2000);
