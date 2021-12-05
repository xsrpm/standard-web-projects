import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { requiredParam } from './Utils.js'

export function ItemInSale({
  idProduct = requiredParam('idProduct'),
  idSale = requiredParam('idSale'),
  quantity = requiredParam('quantity')
} = {}) {
  const hide = {
    _idItemInSale: uuidv4(),
    _idProduct: idProduct,
    _idSale: idSale,
    _quantity: quantity
  }
  return {
    get idItemInSale() {
      return hide._idItemInSale
    },
    get idProduct() {
      return hide._idProduct
    },
    get idSale() {
      return hide._idSale
    },
    get quantity() {
      return hide._quantity
    }
  }
}
