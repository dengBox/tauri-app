import { AxiosRequestHeaders } from 'axios'

// export interface HttpParams extends AxiosRequestConfig {
//   url: string
// }

type HttpParams = {
  url: string
}

export interface GetPayload extends HttpParams {
  query?: object,
  headers?: AxiosRequestHeaders
}

export interface PostPayload extends HttpParams {
  body?: object,
  headers?: AxiosRequestHeaders
}
