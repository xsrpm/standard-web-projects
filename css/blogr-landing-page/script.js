const menuButton = document.getElementById('menu-button')
const closeButton = document.getElementById('close-button')
const mobileMenu = document.getElementById('mobile-menu')
const productOption = document.getElementById('product-option')
const companyOption = document.getElementById('company-option')
const connectOption = document.getElementById('connect-option')
menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('open')
  closeButton.classList.toggle('show')
  menuButton.classList.toggle('show')
})
closeButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('open')
  closeButton.classList.toggle('show')
  menuButton.classList.toggle('show')
})
productOption.addEventListener('click', () => {
  productOption.classList.toggle('active')
})
companyOption.addEventListener('click', () => {
  companyOption.classList.toggle('active')
})
connectOption.addEventListener('click', () => {
  connectOption.classList.toggle('active')
})
