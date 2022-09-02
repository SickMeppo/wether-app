import { FetchMethod } from './interfaces';

import type { FetchDataProps } from './interfaces';

export const fetchData = async ({
  url,
  method = FetchMethod.GET,
  body,
  headers
}: FetchDataProps) => {
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body)
  });

  if (response) {
    const result = await response.json().catch(err => err);

    return result;
  }
};
