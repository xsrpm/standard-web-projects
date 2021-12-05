import { Campaign } from './Campaign.js'
import { Discount } from './Discount.js'
import { Product } from './Product.js'
import { Sale } from './Sale.js'
import { Salesman } from './Salesman.js'
import { newClientCompany, newClientPerson } from './Utils.js'

const [person, client] = newClientPerson({
  firstName: 'Cesar',
  lastName: 'Palma',
  dni: '45944439'
})

console.table(person)
console.table(client)
//

const salesman = new Salesman({
  firstName: 'Juan',
  lastName: 'Palma',
  dni: '45944433'
})

console.table(salesman)

const [company, clientcom] = newClientCompany({
  businessName: 'everis',
  ruc: '123456789'
})

console.table(company)
console.table(clientcom)

const product1 = new Product({
  name: 'lapiz',
  description: 'lapiz de color azul',
  sku: '4r43r4r3v3b3b4'
})
console.table(product1)

const campaign1 = new Campaign({
  startDate: '2020-01-01',
  name: 'Black Friday 2021',
  description: ' descripcion de la campaña'
})
campaign1.addProductInCampaign({
  idProduct: product1.idProduct,
  idCampaign: campaign1.idCampaign,
  price: '120'
})

console.table(campaign1)
console.table(campaign1.productsInCampaign)

const discount1 = new Discount({
  name: 'descuento1',
  description: 'descuento1 desc',
  discountRate: 10
})
discount1.addProductInDiscount({
  idDiscount: discount1.idDiscount,
  idProduct: product1.idProduct
})

console.table(discount1)
console.table(discount1.productsInDiscount)

const sale1 = new Sale({
  idClient: client.idClient,
  idSalesman: salesman.idSalesman
})

sale1.addItemInSale({
  idProduct: product1.idProduct,
  idSale: sale1.idSale,
  quantity: 2
})
sale1.addDiscountOnSale({
  idSale: sale1.idSale,
  idDiscount: discount1.idDiscount
})

console.table(sale1)
console.table(sale1.itemsInSale)
console.table(sale1.discountsOnSale)
