import { post } from './base';
import { LoginInfo } from '@/interface/user';

export const userLogin = (loginInfo: LoginInfo) => post({
  url: '',
  body: {
    ...loginInfo
  }
});
