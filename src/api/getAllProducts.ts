import apiClientService from '@/utils/apiClientService';

export const getAllProducts = (params?: any): any =>
  apiClientService({
    method: 'get',
    url: '/products',
    data: params,
  });
