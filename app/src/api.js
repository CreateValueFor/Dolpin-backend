import axios from 'axios'

import { LOCAL_BACKEND_URL } from '@env'
let headers = {}

const Instance = axios.create({
  baseURL: LOCAL_BACKEND_URL,
  timeout: 4000,
  headers,
})

export default {
  signup() {
    console.log(LOCAL_BACKEND_URL)
    return Instance.get('/users/', {})
  },
}
