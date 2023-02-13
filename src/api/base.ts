import axios from './index';
import { GetPayload, PostPayload } from '@/interface/http';

export const get = (param: GetPayload) => {
  return axios.get(param.url, {
    params: param.query || {},
    headers: param.headers || {}
  });
};

export const post = (param: PostPayload, config = {}) => {
  return axios.post(param.url, param.body, config);
};

export const put = (param: PostPayload, config = {}) => {
  return axios.put(param.url, param.body, config);
};

export const remove = (param: PostPayload) => {
  return axios.delete(param.url, {
    data: param.body
  });
};