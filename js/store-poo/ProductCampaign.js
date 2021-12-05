import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { requiredParam } from './Utils.js'
/**
 *
 * @param {Object} object
 * @param {String} object.idProduct
 * @param {String} object.idCampaign
 * @param {Number} object.price
 */
export function ProductCampaign({
  idProduct = requiredParam('idProduct'),
  idCampaign = requiredParam('idCampaign'),
  price = requiredParam('price')
} = {}) {
  const hide = {
    _idProductCampaign: uuidv4(),
    _idProduct: idProduct,
    _idCampaign: idCampaign
  }
  return {
    price: price,
    get idProductCampaign() {
      return hide._idProductCampaign
    },
    get idProduct() {
      return hide._idProduct
    },
    get idCampaign() {
      return hide._idCampaign
    }
  }
}
