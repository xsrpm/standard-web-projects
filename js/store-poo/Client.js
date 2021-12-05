import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { requiredParam } from './Utils.js'

export const ClientType = {
  PERSON: 'Person',
  COMPANY: 'Company'
}

export class Client {
  /** @property {string} */
  #idClient
  /** @property {string} */
  #idClientType
  /** @property {string} */
  #idEntity
  /**
   *
   * @param {Object} client - Client object
   * @param {string} client.idClientType - The name of the client.
   * @param {string} client.idEntity - The entity of the client.
   */
  constructor({
    idClientType = requiredParam('idClientType'),
    idEntity = requiredParam('idEntity')
  } = {}) {
    this.#idClient = uuidv4()
    this.#idClientType = idClientType
    this.#idEntity = idEntity
  }

  get idClient() {
    return this.#idClient
  }
  get idClientType() {
    return this.#idClientType
  }
  get idEntity() {
    return this.#idEntity
  }
}
