import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { requiredParam } from './Utils.js'

export class Company {
  #idCompany
  #businessName
  #ruc
  constructor({
    ruc = requiredParam('ruc'),
    businessName = requiredParam('businessName')
  } = {}) {
    this.#idCompany = uuidv4()
    this.#businessName = businessName
    this.#ruc = ruc
  }
  get idCompany() {
    return this.#idCompany
  }
  get ruc() {
    return this.#ruc
  }

  get businessName() {
    return this.#businessName
  }
}
