const form = document.querySelector('form')
const message = form.querySelector('.message')
const emailInput = form.querySelector('input')
const errorIcon = form.querySelector('.error-icon')

function emailValidation(enteredEmail) {
  const mail_format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
  if (enteredEmail.match(mail_format)) {
    return true
  } else {
    return false
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (emailInput.value.length === 0) {
    message.innerHTML = 'Please enter an email address'
    errorIcon.classList.remove('hide')
    message.classList.remove('hide')
    setTimeout(() => {
      message.classList.add('hide')
      errorIcon.classList.add('hide')
    }, 3000)
  } else if (!emailValidation(emailInput.value)) {
    message.innerHTML = 'Please provide a valid email'
    errorIcon.classList.remove('hide')
    message.classList.remove('hide')
    setTimeout(() => {
      message.classList.add('hide')
      errorIcon.classList.add('hide')
    }, 3000)
  } else {
    console.log('Form submitted')
  }
})
