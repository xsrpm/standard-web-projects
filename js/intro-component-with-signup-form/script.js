console.log('Hello')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('form')

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
  console.log(e.target[0])

  let error = false
  if (firstName.children[0].value === '') {
    firstName.children[1].classList.remove('hide')
    firstName.children[2].innerHTML = 'First Name cannot be empty'
    firstName.children[2].classList.remove('hide')
    setTimeout(() => {
      firstName.children[1].classList.add('hide')
      firstName.children[2].classList.add('hide')
    }, 4000)
    error = true
  }
  if (lastName.children[0].value === '') {
    lastName.children[1].classList.remove('hide')
    lastName.children[2].innerHTML = 'Last Name cannot be empty'
    lastName.children[2].classList.remove('hide')
    setTimeout(() => {
      lastName.children[1].classList.add('hide')
      lastName.children[2].classList.add('hide')
    }, 4000)
    error = true
  }
  if (email.children[0].value === '') {
    email.children[1].classList.remove('hide')
    email.children[2].innerHTML = 'Email cannot be empty'
    email.children[2].classList.remove('hide')
    setTimeout(() => {
      email.children[1].classList.add('hide')
      email.children[2].classList.add('hide')
    }, 4000)
    error = true
  } else if (!emailValidation(email.children[0].value)) {
    email.children[1].classList.remove('hide')
    email.children[2].innerHTML = 'Looks like this is not an email'
    email.children[2].classList.remove('hide')
    setTimeout(() => {
      email.children[1].classList.add('hide')
      email.children[2].classList.add('hide')
    }, 4000)
    error = true
  }
  if (password.children[0].value === '') {
    password.children[1].classList.remove('hide')
    password.children[2].innerHTML = 'Password cannot be empty'
    password.children[2].classList.remove('hide')
    setTimeout(() => {
      password.children[1].classList.add('hide')
      password.children[2].classList.add('hide')
    }, 4000)
    error = true
  }
  if (!error) {
    console.log('Form submitted')
  }
})
