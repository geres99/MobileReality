import axios, {AxiosRequestConfig} from 'axios';
import qs from 'qs';

export type ApiError = {
  message: string;
  errors: {
    [key: string]: string[];
  };
};

const baseURL = 'http://localhost:3005';

export const apiClient = axios.create({
  baseURL,
  timeout: 30 * 1000,
  paramsSerializer: params => qs.stringify(params),
});

export const injectTokenToRequest = (config: AxiosRequestConfig<object>) => {
  return {
    ...config,
    headers: {
      ...config?.headers,
      'x-api-key': 'thisisapikey',
    },
  };
};

apiClient.interceptors.request.use(injectTokenToRequest as any, error => {
  console.log('Error while sending request', JSON.stringify(error, null, 2));
  return Promise.reject(error);
});

apiClient.interceptors.response.use(
  async response => {
    if (response.status === 200) {
      return response.data;
    }
    return {data: response.data, status: response.status};
  },
  async (error: any) => {
    console.log(error);
  },
);
