import axios from 'axios'
import { baseUrl } from './_env'

export default {
  // interior, get : 홈디테일
  // shoppingItem, getItem : 쇼핑

  // GET http://....:3000/list
  interior: () => axios.get(`${baseUrl}/interior/`),
  shoppingItem: () => axios.get(`${baseUrl}/shoppingItem`),
  // GET http://....:3000/list/:id
  getItem: (id) => axios.get(`${baseUrl}/shoppingItem/${id}`),
  get: (id) => axios.get(`${baseUrl}/interior/${id}`),
  // GET http://....:3000/list?q=keyword
 // search: (keyword) => axios.get(`${baseUrl}/shoppingItem?q=${keyword}`), 
}
