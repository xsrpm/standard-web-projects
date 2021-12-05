import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { ProductCampaign } from './ProductCampaign.js'
import { requiredParam } from './Utils.js'

/**
 * @class
 * @param {Object} campaign
 * @param {Date} campaign.startDate
 * @param {Date} campaign.endDate
 * @param {String} campaign.name
 * @param {String} campaign.description
 * @returns
 */
export function Campaign({
  startDate = requiredParam('startDate'),
  endDate,
  name = requiredParam('name'),
  description = requiredParam('description')
}) {
  /** @property {String}*/
  const _idCampaign = uuidv4()
  const _startDate = startDate

  return {
    endDate: endDate,
    name: name,
    description: description,
    /**
     * @property {ProductCampaign[]} productsInCampaign
     */
    productsInCampaign: [],
    get idCampaign() {
      return _idCampaign
    },
    get startDate() {
      return _startDate
    },
    /**
     * @param {Object} object
     * @param {string} object.idProduct
     * @param {string} object.idCampaign
     * @param {number} object.price
     */
    addProductInCampaign({ idProduct, idCampaign, price }) {
      this.productsInCampaign.push(
        ProductCampaign({
          idProduct,
          idCampaign,
          price
        })
      )
    }
  }
}
