const title = 'Boshen tip:';

export const log = (message?: any, ...optionalParams: any[]) => {
  console.log(title, message, ...optionalParams);
};

export const warn = (message?: any, ...optionalParams: any[]) => {
  console.warn(title, message, ...optionalParams);
};

export const error = (message?: any, ...optionalParams: any[]) => {
  console.error(title, message, ...optionalParams);
};
export const blockError = (message: string) => {
  throw new Error(title + message);
};
