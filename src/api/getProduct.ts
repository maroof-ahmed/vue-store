import apiClientService from '@/utils/apiClientService';

export const getProduct = (id?: any, params?: any): any =>
  apiClientService({
    method: 'get',
    url: '/products/' + id,
    data: params,
  });
