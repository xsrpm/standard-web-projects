import { requiredParam } from './Utils.js'
import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { ProductDiscount } from './ProductDiscount.js'

export function Discount({
  name = requiredParam('name'),
  description = requiredParam('description'),
  discountRate = requiredParam('discountRate')
} = {}) {
  const hide = {
    _idDiscount: uuidv4(),
    _name: name,
    _description: description
  }

  return {
    discountRate: discountRate,
    productsInDiscount: [],
    get idDiscount() {
      return hide['_idDiscount']
    },
    get name() {
      return hide['_name']
    },
    get description() {
      return hide['_description']
    },
    addProductInDiscount({ idDiscount, idProduct }) {
      this.productsInDiscount.push(
        new ProductDiscount({ idDiscount, idProduct })
      )
    }
  }
}
