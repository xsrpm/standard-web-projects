window.onload = function () {
  const menuButton = document.querySelector('#menu-button')
  const menu = document.querySelector('.mobile-menu')
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('open')
  })
}
