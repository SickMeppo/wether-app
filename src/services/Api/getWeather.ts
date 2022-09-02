import { fetchData } from "./fetch";
import { API_KEY, DEFAULT_API } from "./constants";
import { getWetherProps } from "./interfaces";

export const getWether =  async ({ cityId, apiKey = API_KEY, type = 'metric' }: getWetherProps) => {

  const result = await fetchData({ url: `${DEFAULT_API}weather?id=${cityId}&appid=${apiKey}&units=${type}` });

  if (result?.error) {
    throw result.error;
  }

  return result;
};
