const slider = document.querySelector(".slider");
const price = document.querySelector(".dollarmob");
const checkBox = document.querySelector(".checkbox");
const pageView = document.querySelector(".page-views")
const desktopPrice = document.querySelector(".price");
const slideBackground = document.querySelector(".slide-background")


slider.addEventListener("input",function(){
  if (slider.value == 1) {
    price.textContent = "$8.00"
    desktopPrice.textContent ="$8.00"
    pageView.textContent = "10k PAGEVIEWS"
    slideBackground.style.width = "10%"

  } 
  if (slider.value == 3) {
    price.textContent = "$16.00"
    desktopPrice.textContent ="$16.00"
    pageView.textContent = "100k PAGEVIEWS"
    slideBackground.style.width = "50%"
  }
  if (slider.value == 2) {
    price.textContent = "$12.00"
    desktopPrice.textContent ="$12.00"
    pageView.textContent = "50k PAGEVIEWS"
    slideBackground.style.width = "30%"
  } 
  if (slider.value == 4) {
    price.textContent = "$24.00"
    desktopPrice.textContent ="$24.00"
    pageView.textContent = "500k PAGEVIEWS"
    slideBackground.style.width = "70%"
  } 
  if (slider.value == 5) {
    price.textContent = "$36.00"
    desktopPrice.textContent ="$36.00"
    pageView.textContent = "1M PAGEVIEWS"
    slideBackground.style.width = "100%"
  } 
 
})





checkBox.addEventListener("input",function(){
  if (checkBox.checked) {
    if (slider.value == 1) {
      price.textContent = "$72.00"
      desktopPrice.textContent ="$72.00"
    } 
    if (slider.value == 3) {
      price.textContent = "$16.00"
      desktopPrice.textContent ="$144.00"
    }
    if (slider.value == 2) {
      price.textContent = "$12.00"
      desktopPrice.textContent ="$108.00"
    } 
    if (slider.value == 4) {
      price.textContent = "$24.00"
      desktopPrice.textContent ="$216.00"
    } 
    if (slider.value == 5) {
      price.textContent = "$36.00"
      desktopPrice.textContent ="$324.00"
    } 
  } else  {
    if (slider.value == 1) {
      price.textContent = "$8.00"
      desktopPrice.textContent ="$8.00"
    } 
    if (slider.value == 3) {
      price.textContent = "$16.00"
   
    }
    if (slider.value == 2) {
      price.textContent = "$12.00"
    
    } 
    if (slider.value == 4) {
      price.textContent = "$24.00"
      
    } 
    if (slider.value == 5) {
      price.textContent = "$36.00"
     
    } 
  }
})