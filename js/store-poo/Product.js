import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { requiredParam } from './Utils.js'

export function Product({
  name = requiredParam('name'),
  description = requiredParam('description'),
  sku = requiredParam('sku')
}) {
  const _idProduct = uuidv4()

  return {
    name: name,
    description: description,
    sku: sku,
    get idProduct() {
      return _idProduct
    }
  }
}
