import axios from 'axios'
import { read } from '@/plugin/storage'
import { ElMessageBox } from 'element-plus'

const config = {
  timeout: 10 * 60 * 1000
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  config => {
    const token = read('token')
    if (token) {
      config!.headers!.Authorization = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  response => {
    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response)
  },
  error => {
    ElMessageBox(error)
  }
)

export default _axios
