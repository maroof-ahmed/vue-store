import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { Modal } from 'ant-design-vue';
import router from '@/router';

// create an axios instance
const apiClientService: AxiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 60 * 1000,
  headers: {},
});

/**
 * Request Interceptor
 */
apiClientService.interceptors.request.use(
  // On Request Fulfilled
  (config: AxiosRequestConfig) => {
    // config.headers.common.Authorization = getToken();
    // config.headers.common.token = getToken();
    return config;
  },
  // On Request Rejected
  (error) => Promise.reject(error)
);

/**
 * Response Interceptor
 */
apiClientService.interceptors.response.use(
  // On Response Fulfilled
  (response: AxiosResponse) => {
    const { status } = response;

    if (status == 201 || status == 200) {
      // Success
      return Promise.resolve(response.data);
    } else {
      if (status === 401) {
        Modal.warning({
          title: 'token',
          content: 'token forbidden！',
          onOk: () => {
            // removeToken();
            router.push('/login');
          },
        });
      }

      // Error
      return Promise.reject(response.data);
    }
    return response;
  },
  // On Response Rejected
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 500:
          console.log('Some 500 Error');
          break;

        case 401:
          console.log('Some 401 Error');
          break;

        case 403:
          console.log('Some 403 Error');
          break;

        case 404:
          console.log('Some 404 Error');
          break;

        default:
          console.log(`Some ${error.response.status} Error`);
      }
    }
    return Promise.reject(error.response);
  }
);

export default apiClientService;
