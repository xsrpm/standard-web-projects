import { Client, ClientType } from './Client.js'
import { Company } from './Company.js'
import { Person } from './Person.js'

/**
 *
 * @param {string} param
 * @returns {never}
 */
export function requiredParam(param) {
  throw new Error(`Missing required parameter: ${param}`)
}

export function newClientPerson({ firstName, lastName, dni }) {
  let person, client
  try {
    person = new Person({ firstName, lastName, dni })
    client = new Client({
      idClientType: ClientType.PERSON,
      idEntity: person.idPerson
    })
  } catch (err) {
    console.log(err)
  }

  return [person, client]
}

export function newClientCompany({ businessName, ruc }) {
  let company, client
  try {
    company = new Company({ businessName, ruc })
    client = new Client({
      idClientType: ClientType.COMPANY,
      idEntity: company.idCompany
    })
  } catch (err) {
    console.log(err)
  }
  return [company, client]
}
