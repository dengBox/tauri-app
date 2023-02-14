import { Storage } from '@/interface/core';

const defaultStorage = 'sessionStorage';

// 基本数据类型
export function save (key: string, value: string, type:Storage = defaultStorage) {
  window[type].setItem(key, value);
}

export function read (key: string, type:Storage = defaultStorage) {
  return window[type].getItem(key);
}

export function clear (key: string, clearAll = false, type:Storage = defaultStorage) {
  if (clearAll) {
    window[type].clear();
  } else {
    window[type].removeItem(key);
  }
}

export function readMulti (keys: Array<string>) {
  return keys.map(key => read(key));
}

export function clearMulti (keys: Array<string>) {
  keys.forEach(key => clear(key));
}
