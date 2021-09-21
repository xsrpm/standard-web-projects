console.log('script')

const shareButton = document.querySelector('.card .share-button')
const shareSection = document.querySelector('.card .share-section')
shareButton.addEventListener('click', () => {
  console.log('holaaaa')
  shareSection.classList.toggle('hide')
  shareButton.classList.toggle('share-button-active')
})
