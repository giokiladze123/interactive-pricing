const slider = document.querySelector(".slider");
const price = document.querySelector(".dollarmob");
const checkBox = document.querySelector(".checkbox");
const pageView = document.querySelector(".page-views")
const desktopPrice = document.querySelector(".price");
const slideBackground = document.querySelector(".slide-background")

slider.addEventListener("input",function(){
  if (slider.value == 1) {
    if (checkBox.checked) {
      price.textContent = "$72"
      desktopPrice.textContent = "$72"
    } else {
      price.textContent = "$8"
      desktopPrice.textContent = "$8"
    }
    pageView.textContent = "10k PAGEVIEWS"
    slideBackground.style.width = "10%"
  }

  if (slider.value == 2) {
    if (checkBox.checked) {
      price.textContent = "$108"
      desktopPrice.textContent = "$108"
    } else {
      price.textContent = "$12"
      desktopPrice.textContent = "$12"
    }
    pageView.textContent = "50k PAGEVIEWS"
    slideBackground.style.width = "30%"
  }

  if (slider.value == 3) {
    if (checkBox.checked) {
      price.textContent = "$144"
      desktopPrice.textContent = "$144"
    } else {
      price.textContent = "$16"
      desktopPrice.textContent = "$16"
    }
    pageView.textContent = "100k PAGEVIEWS"
    slideBackground.style.width = "50%"
  }

  if (slider.value == 4) {
    if (checkBox.checked) {
      price.textContent = "$216"
      desktopPrice.textContent = "$216"
    } else {
      price.textContent = "$24"
      desktopPrice.textContent = "$24"
    }
    pageView.textContent = "500k PAGEVIEWS"
    slideBackground.style.width = "70%"
  }

  if (slider.value == 5) {
    if (checkBox.checked) {
      price.textContent = "$324"
      desktopPrice.textContent = "$324"
    } else {
      price.textContent = "$36"
      desktopPrice.textContent = "$36"
    }
    pageView.textContent = "1M PAGEVIEWS"
    slideBackground.style.width = "100%"
  }

})

