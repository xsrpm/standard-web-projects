import { Person } from './Person.js'
import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'

export class Salesman extends Person {
  #idSalesman
  constructor({ firstName, lastName, dni } = {}) {
    super({ firstName, lastName, dni })
    this.#idSalesman = uuidv4()
  }

  get idSalesman() {
    return this.#idSalesman
  }
}
