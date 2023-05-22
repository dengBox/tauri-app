type Cb = (res: any[]) => void
type Req = () => Promise<any>

export async function sendRequest (reqList: Req[], limits: number, cb: Cb) {
  if (limits) {
    reqList.length = limits;
  }
  const result = [];
  for (const req of reqList) {
    try {
      result.push(await req());
    } catch (error) {
      result.push(error);
    }
  }
  cb(result);
}

sendRequest([
  () => Promise.resolve('1'),
  () => Promise.resolve('2'),
  // eslint-disable-next-line prefer-promise-reject-errors
  () => Promise.reject('error')
],
3,
(res) => {
  // execute end!['1', '2', 'error']
  console.log('execute end!', res);
});