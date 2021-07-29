import apiClientService from '@/utils/apiClientService';

export const getCategories = (params?: any): any =>
  apiClientService({
    method: 'get',
    url: '/products/categories',
    data: params,
  });
