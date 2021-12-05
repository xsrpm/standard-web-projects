import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { requiredParam } from './Utils.js'

export class Person {
  #idPerson
  #firstName
  #lastName
  #dni
  constructor({
    firstName = requiredParam('firstName'),
    lastName = requiredParam('lastName'),
    dni = requiredParam('dni')
  } = {}) {
    this.#idPerson = uuidv4()
    this.#firstName = firstName
    this.#lastName = lastName
    this.#dni = dni
  }

  get idPerson() {
    return this.#idPerson
  }
  get firstName() {
    return this.#firstName
  }
  get lastName() {
    return this.#lastName
  }
  get dni() {
    return this.#dni
  }
}
