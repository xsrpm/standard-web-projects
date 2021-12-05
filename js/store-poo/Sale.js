import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { DiscountOnSale } from './DiscountOnSale.js'
import { ItemInSale } from './ItemInSale.js'
import { requiredParam } from './Utils.js'

export class Sale {
  #idSale
  #idClient
  #idSalesman
  #saleDate
  constructor({
    idClient = requiredParam('idClient'),
    idSalesman = requiredParam('idSalesman'),
    saleDate = new Date()
  } = {}) {
    this.#idSale = uuidv4()
    this.#idClient = idClient
    this.#idSalesman = idSalesman
    this.#saleDate = saleDate
    this.itemsInSale = []
    this.discountsOnSale = []
  }
  get idSale() {
    return this.#idSale
  }
  get idClient() {
    return this.#idClient
  }
  get idSalesman() {
    return this.#idSalesman
  }
  get saleDate() {
    return this.#saleDate
  }
  addItemInSale({ idProduct, idSale, quantity }) {
    this.itemsInSale.push(
      new ItemInSale({
        idProduct,
        idSale,
        quantity
      })
    )
  }
  addDiscountOnSale({ idSale, idDiscount }) {
    this.discountsOnSale.push(
      new DiscountOnSale({
        idSale,
        idDiscount
      })
    )
  }
}
