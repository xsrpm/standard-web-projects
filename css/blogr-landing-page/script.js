console.log('343')
const menuButton = document.querySelector('header .menu-button')
const closeButton = document.querySelector('header .close-button')
const mobileMenu = document.querySelector('header .mobile-menu')
const productOption = document.querySelector(
  'header .mobile-menu .product-option'
)
const companyOption = document.querySelector(
  'header .mobile-menu .company-option'
)
const connectOption = document.querySelector(
  'header .mobile-menu .connect-option'
)
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
