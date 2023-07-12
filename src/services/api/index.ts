// Bibliotecas Externas
import axios from 'axios'

// Prod
const BASE_URL = 'https://rluihpcsg3.execute-api.us-east-1.amazonaws.com/v1/'
// const X_API_KEY = 'XAPIKEY do projeto'

export const API = axios.create({
  baseURL: BASE_URL
  // headers: { 'x-api-key': X_API_KEY }
})

API.interceptors.request.use(async function (config) {
  try {
    // const token = await getToken()
    // if (config && config.headers) {
    //   config.headers.Authorization = token
    // }
    return config
  } catch (e) {
    return config
  }
})
