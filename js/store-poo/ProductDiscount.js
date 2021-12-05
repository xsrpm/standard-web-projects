import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { requiredParam } from './Utils.js'

export function ProductDiscount({
  idDiscount = requiredParam('idDiscount'),
  idProduct = requiredParam('idProduct')
}) {
  const hide = {
    _idProductDiscount: uuidv4(),
    _idDiscount: idDiscount,
    _idProduct: idProduct
  }
  return {
    get idProductDiscount() {
      return hide._idProductDiscount
    },
    get idDiscount() {
      return hide._idDiscount
    },
    get idProduct() {
      return hide._idProduct
    }
  }
}
