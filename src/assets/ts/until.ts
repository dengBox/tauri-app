/* eslint-disable @typescript-eslint/ban-ts-comment */
export function uuid (): string {
  // credit: http://stackoverflow.com/posts/2117523/revisions
  // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  //   const r = (Math.random() * 16) | 0
  //   const v = c === 'x' ? r : (r & 0x3) | 0x8
  //   return v.toString(16)
  // })

  let res = '';
  const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  for (let i = 0, len = template.length; i < len; i += 1) {
    const s = template[i];
    const r = (Math.random() * 16) | 0;
    const v = s === 'x' ? r : s === 'y' ? (r & 0x3) | 0x8 : s;
    res += v.toString(16);
  }
  return res;
}

// 判断是否为数组
const isArr = (origin: any): boolean => {
  const str = '[object Array]';
  return Object.prototype.toString.call(origin) === str;
};

export const deepCopy = <T>(origin: T, target?: Record<string, any> | T): T => {
  if (isArr(origin)) {
    // @ts-ignore
    return origin.map((o: any) => deepCopy(o));
  }
  const tar = target || {};
  for (const key in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, key)) {
      if (typeof origin[key] === 'object' && origin[key] !== null) {
        tar[key] = isArr(origin[key]) ? [] : {};
        deepCopy(origin[key], tar[key]);
      } else {
        tar[key] = origin[key];
      }
    }
  }

  return tar as T;
};

export const getPrentDom = (dom: HTMLElement, dataId: string) :string => {
  if (!dom || dom.tagName === 'BODY') return '';
  return dom.dataset[dataId] || getPrentDom(dom.parentElement || document.body, dataId);
};