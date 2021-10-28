console.log('Hello World')
const menuButton = document.querySelector('header div picture:nth-child(2)')
const nav = document.querySelector('#mobile-menu')
const closeMenu = document.querySelector('#close-menu')
menuButton.addEventListener('click', () => {
  nav.classList.add('active')
})
closeMenu.addEventListener('click', () => {
  nav.classList.remove('active')
})
