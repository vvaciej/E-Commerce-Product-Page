// menu mobile section

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

// quantity, submit section

const quantityText = document.querySelector('.quantity-text');
const submitDiv = document.querySelector('.submit-div');
const quantityCartDiv = document.querySelector('.quantity-cart-div');

let quantity = 1;

function quantityFunction (e) {
  const quantityMinus = document.querySelector('.quantity-minus');
  const quantityPlus = document.querySelector('.quantity-plus');
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
  const quantityCart = document.querySelector('.quantity-cart');

  quantityCartDiv.classList.add('active');
  quantityCart.textContent = quantity;
}

document.addEventListener('click', quantityFunction);

// preview photo section

const imgPreview = document.querySelectorAll('.img-preview');
const imgThumbnail = document.querySelectorAll('.img-thumbnail');

const previewImg = [
  {
    firstPhoto: {
      firstPreview: imgPreview[0],
      firstThumbnail: imgThumbnail[0],
    }
  },
  {
    secondPhoto: {
      secondPreview: imgPreview[1],
      secondThumbnail: imgThumbnail[1],
    }
  },
  {
    thirdPhoto: {
      thirdPreview: imgPreview[2],
      thirdThumbnail: imgThumbnail[2],
    }
  },
  {
    fourthPhoto: {
      fourthPreview: imgPreview[3],
      fourthThumbnail: imgThumbnail[3],
    }
  },
]

let selectedPreviewIndex = 0;
const allThumbnail = document.querySelectorAll('.img-thumbnail');

function hideAllPhotos() {
  previewImg.forEach((photo) => {
    const key = Object.keys(photo)[0];
    const values = Object.values(photo[key]);
    values.forEach(e => {
      e.classList.remove('active');
    })
  })
}

function showSelectedPhoto(selectedPreviewIndex) {
  const selectedPreview = previewImg[selectedPreviewIndex];
  const key = Object.keys(selectedPreview);
  const values = Object.values(selectedPreview[key]);
  values.forEach(e => {
    e.classList.add('active');
  })
}

function changePhoto (selectedPreviewIndex) {
  hideAllPhotos();
  showSelectedPhoto(selectedPreviewIndex);
}

allThumbnail.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    selectedPreviewIndex = index;
    changePhoto(selectedPreviewIndex);
  })
})

// fullscreen photo preview section

const fullscreenPhotoClose = document.querySelector('.close-fullscreen-btn');
const fullscreenContainer = document.querySelector('.photo-fullscreen');

function showFullscreenPhoto(e) {
  const html = document.querySelector('html');
  
  fullscreenContainer.classList.add('active');
  html.classList.add('opacity');
}

imgPreview.forEach((preview) => {
  preview.addEventListener('click', showFullscreenPhoto);
});

fullscreenPhotoClose.addEventListener('click', function () {
  fullscreenContainer.classList.remove('active');
  html.classList.remove('opacity');
});

const imgPreviewFullscreen = document.querySelectorAll('.img-preview-fullscreen');
const imgThumbnailFullscreen = document.querySelectorAll('.img-thumbnail-fullscreen');


const allSlidesFullscreen = [
  {
    firstPhoto: {
      firstPreview: imgPreviewFullscreen[0],
      firstThumbnail: imgThumbnailFullscreen[0],
    }
  },
  {
    secondPhoto: {
      secondPreview: imgPreviewFullscreen[1],
      secondThumbnail: imgThumbnailFullscreen[1],
    }
  },
  {
    thirdPhoto: {
      thirdPreview: imgPreviewFullscreen[2],
      thirdThumbnail: imgThumbnailFullscreen[2],
    }
  },
  {
    fourthPhoto: {
      fourthPreview: imgPreviewFullscreen[3],
      fourthThumbnail: imgThumbnailFullscreen[3],
    }
  },
]

let selectedPreviewIndexFullscreen = 0;

function hideAllPhotosFullscreen() {
  allSlidesFullscreen.forEach((photo) => {
    const key = Object.keys(photo)[0];
    const values = Object.values(photo[key]);
    values.forEach(e => {
      e.classList.remove('active');
    })
  })
}

function showSelectedPhotoFullscreen(selectedPreviewIndexFullscreen) {
  const selectedPreview = allSlidesFullscreen[selectedPreviewIndexFullscreen];
  const key = Object.keys(selectedPreview);
  const values = Object.values(selectedPreview[key]);
  values.forEach(e => {
    e.classList.add('active');
  })
}

function changePhotoFullscreen (selectedPreviewIndexFullscreen) {
  hideAllPhotosFullscreen();
  showSelectedPhotoFullscreen(selectedPreviewIndexFullscreen);
}

imgThumbnailFullscreen.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    selectedPreviewIndexFullscreen = index;
    changePhotoFullscreen(selectedPreviewIndexFullscreen);
  })
})

function controlPhotoFullscreen (e) {
  const prevPhotoFullscreen = document.querySelector('.control-btn-previous');
  const nextPhotoFullscreen = document.querySelector('.control-btn-next');
  if (e.target === prevPhotoFullscreen) {
    selectedPreviewIndexFullscreen--;
    if (selectedPreviewIndexFullscreen < 0) {
      selectedPreviewIndexFullscreen = 3;
    }
    changePhotoFullscreen(selectedPreviewIndexFullscreen);
  } else if (e.target === nextPhotoFullscreen) {
    selectedPreviewIndexFullscreen++;
    if (selectedPreviewIndexFullscreen > 3) {
      selectedPreviewIndexFullscreen = 0;
    }
    changePhotoFullscreen(selectedPreviewIndexFullscreen);
  }
} 

document.addEventListener('click', controlPhotoFullscreen);

// basket section
const clearBasketBtn = document.querySelector('.cart-bill-delete-btn');
const emptyCart = document.querySelector('.empty-cart');
const filledCart = document.querySelector('.filled-cart');
const basketBillTotalText = document.querySelector('.cart-bill-total-cost');
const basketBillQuantityText = document.querySelector('.cart-bill-quantity');

document.addEventListener('click', function (e) {
  const basketBtn = document.querySelector('.cart-icon');
  const basketContainer = document.querySelector('.basket-container');
  const checkIsValidTargetToClose = !basketContainer.contains(e.target) && !e.target.contains(basketBtn);

  if (e.target === basketBtn) {
    basketContainer.classList.toggle('active');
  }
  if (checkIsValidTargetToClose) {
    basketContainer.classList.remove('active');
  }
});

function basketBill () {
  emptyCart.classList.remove('active');
  filledCart.classList.add('active');
  basketBillTotalText.textContent = '$' + (costOfSneakers * quantity).toFixed(2);
  basketBillQuantityText.textContent = quantity;
}

submitDiv.addEventListener('click', basketBill);

function basketClearAll () {
  emptyCart.classList.add('active');
	filledCart.classList.remove('active');
  quantityCartDiv.classList.remove('active');
} 

clearBasketBtn.addEventListener('click' , basketClearAll);

// author vvaciej


