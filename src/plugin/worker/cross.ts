export const getLocalWorkerUrl = (originWorkerUrl: string) => new Promise(resolve =>
  fetch(originWorkerUrl)
    .then(res => res.text())
    .then(codeString => {
    // return new Worker(__webpack_public_path__ + "2bcf52c42aca20316651.worker.js");
    // URL format: blob:http://localhost:8089/cd2930c0-f4ca-4a9f-b6b1-8242e520dd62
      const localWorkerUrl = window.URL.createObjectURL(new Blob([codeString], {
        type: 'application/javascript'
      }));
      resolve(localWorkerUrl);
    }));

getLocalWorkerUrl('').then((localWorkerUrl) => {
  const myWorker = new Worker(localWorkerUrl as string);
  console.log(myWorker);
});