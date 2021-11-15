import axios from 'axios'

import { LOCAL_BACKEND_URL } from '@env'
let headers = {}

const Instance = axios.create({
  baseURL: LOCAL_BACKEND_URL,
  timeout: 4000,
  headers,
})

Instance.interceptors.request.use(
  (config) => {
    // 요청 바로 직전
    console.log(config)
    // axios 설정값에 대해 작성합니다.
    return config
  },
  (error) => {
    // 요청 에러 처리를 작성합니다.
    return Promise.reject(error)
  }
)

Instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    return Promise.reject(err.response)
  }
)

export default Instance
