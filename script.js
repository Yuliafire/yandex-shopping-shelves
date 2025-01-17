const products = document.querySelectorAll(".product");
const basket = document.querySelector(".basket");
const basketFirstState = document.querySelector(".basket-firstState");
const basketSecondState = document.querySelector(".basket-secondState");
const basketThirdState = document.querySelector(".basket-thirdState");
const btnPay = document.querySelector(".btn-pay");

const productsInBasket = {
  basketFirstState: ["wine", "milk", "honey", "cheese"],
  basketSecondState: ["beef", "chicken", "chips"],
  basketThirdState: ["pineapple", "banana", "apple", "salad"],
};

let current = null;
let count = 0;
let zIndex = 1;

products.forEach((elem) => {
  elem.addEventListener("dragstart", handleDragStart);
  elem.addEventListener("touchstart", handleTouchStart);
});

function handleDragStart(e) {
  current = this;
}

function handleTouchStart(e) {
  current = this;
}
basket.addEventListener("dragover", (e) => e.preventDefault());
basket.addEventListener("touchmove", (e) => e.preventDefault());
function updateBasket(productsInBasket, basket, productName) {
  if (productsInBasket.includes(productName)) {
    basket.appendChild(current);
    basket.style.zIndex = zIndex++;
    count++;
    console.log(count);
  }
}

function handleDropTouchEnd(e) {
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

basket.addEventListener("drop", handleDropTouchEnd);
basket.addEventListener("touchend", handleDropTouchEnd);

btnPay.addEventListener("click", () => {
    window.open("https://lavka.yandex.ru/", "_blank");
});

function togglePulse() {
    btnPay.classList.toggle("pulsate");
}

setInterval(togglePulse, 2000);
