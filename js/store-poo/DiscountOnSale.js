import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { requiredParam } from './Utils.js'

export function DiscountOnSale({
  idSale = requiredParam('idSale'),
  idDiscount = requiredParam('idDiscount')
}) {
  const hide = {
    _idDiscountOnSale: uuidv4(),
    _idSale: idSale,
    _idDiscount: idDiscount
  }
  return {
    get idDiscountOnSale() {
      return hide._idDiscountOnSale
    },
    get idSale() {
      return hide._idSale
    },
    get idDiscount() {
      return hide._idDiscount
    }
  }
}
