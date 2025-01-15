

const items = document.querySelectorAll('.item');
const buttonPay = document.querySelector('.button-pay');
const basket = document.querySelector('.basket');
const basketFirstState = document.querySelector ('.basket-firstState');
const basketSecondState = document.querySelector('basket-secondState');
const basketThirdState = document.querySelector('basket-thirdState');



const itemsInBasket = {
    basketFirstState: ['wine', 'milk', 'cake', 'chese'],
    basketSecondState: ['beef', 'checken', 'cheeps'],
    basketThirdState: ['pineapple', 'banana', 'aple', 'salad']
}

let current;

items.forEach(element => {
    element.addEventListener('dragstart', function (e) {
        current = this;
    })
  }
)

basket.addEventListener('dragover', function (e) {
    e.preventDefault();
})

let count = 0;
let zIndex = 1;


function updateBasket(itemsInBasket, basket, itemName)  {
    if (itemsInBasket.includes(productName)) {
        basket.appendChild(current)
        basket.style = `z-index: ${zIndex++}`;
        count += 1;
        console.log(count);
    }
}

basket.addEventListener('drop', function (e) {
    if (!current) return
    let productName = current.className.split('')[1];
    console.log(productName);

    updateBasket(itemsInBasket.basketFirstState, basketFirstState, productName);
    updateBasket(itemsInBasket.basketSecondState, basketSecondState, productName);
    updateBasket(itemsInBasket.basketThirdState, basketThirdState, productName);

    if (count >= 3) {
        buttonPay.classList.add('button-pay-visible');
    }
})

buttonPay.addEventListener('click', () => {
    window.location.href = 'https://lavka.yandex.ru/';
})

function togglePulse() {
    buttonPay.classList.toggle('pulsate');
}

setInterval(togglePulse, 2000);


