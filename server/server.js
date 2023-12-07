const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-menu-icon');
const menuContainer = document.querySelector('.menu');
const html = document.querySelector('html');

function menuContainerFunction () {
  menuContainer.classList.toggle('active');
  html.classList.toggle('opacity');
}

function closeMenuByOutside (e) {
  const checkIsValidTargetToClose = !menuContainer.contains(e.target) 
  && !e.target.classList.contains('menu-icon') 
  && menuContainer.classList.contains('active');

  if (checkIsValidTargetToClose) {
    menuContainerFunction();
  }
}

document.addEventListener('click', closeMenuByOutside);
closeBtn.addEventListener('click', menuContainerFunction);
menuBtn.addEventListener('click', menuContainerFunction);

const quantityText = document.querySelector('.quantity-text');

let quantity = 1;

function quantityFunction (e) {
  const quantityMinus = document.querySelector('.quantity-minus');
  const quantityPlus = document.querySelector('.quantity-plus');
  const submitDiv = document.querySelector('.submit-div');
  if (e.target === quantityPlus) {
    quantity++;
  } else if (e.target === quantityMinus) {
    quantity--;
  }

  if (quantity < 1) {
    quantity = 1;
  } else if (quantity > 10) {
    quantity = 10;
  }
  quantityText.textContent = quantity;
  updateCost(quantity);
  if (submitDiv.contains(e.target)) {
    console.log(submitDiv);
    updateQuantityCart(quantity);
  }
}

let costOfSneakers = 125;
let costOfSneakersWithoutDiscount = 250;

function updateCost (quantity) {
  const costEl = document.querySelector('.cost-text');
  const costWithoutDiscount = document.querySelector('.price-sale');
  const totalCost = (costOfSneakers * quantity).toFixed(2);
  const totalCostWithoutDiscount = (costOfSneakersWithoutDiscount * quantity).toFixed(2);

  costEl.textContent = '$' + totalCost;
  costWithoutDiscount.textContent = '$' + totalCostWithoutDiscount;
}

function updateQuantityCart (quantity) {
  const quantityCartDiv = document.querySelector('.quantity-cart-div');
  const quantityCart = document.querySelector('.quantity-cart');

  quantityCartDiv.classList.add('active');
  quantityCart.textContent = quantity;
}

document.addEventListener('click', quantityFunction);