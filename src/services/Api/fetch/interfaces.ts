export interface FetchDataProps {
  url: string;
  method?: keyof typeof FetchMethod;
  headers?: {};
  body?: {};
}

export const enum FetchMethod {
  GET = 'GET',
  POST = 'POST'
}


