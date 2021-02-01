import axios, { AxiosPromise } from 'axios';

import Common from './common';

export default class ApiService {
  public common: Common = new Common();

  constructor() {
    //
  }

  async callerWrapper(
    method: string,
    endpoint: string,
    payload: {} | undefined = {},
  ): Promise<AxiosPromise> {
    const url = this.common.getBaseApi().domainURL + endpoint;

    switch (method) {
      case 'get':
        return this.handleResponse(axios.get(url));
      case 'post':
        return this.handleResponse(axios.post(url, payload));
      case 'put':
        return this.handleResponse(axios.put(url, payload));
      case 'delete':
        return this.handleResponse(
          axios.delete(url, {
            data: payload,
          }),
        );
      default:
        throw new Error('Not valid method');
    }
  }

  async handleResponse(call: AxiosPromise): Promise<AxiosPromise> {
    try {
      const response = await call;

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  get(endpoint: string): Promise<any> {
    return this.callerWrapper('get', endpoint);
  }

  post(endpoint: string, payload: undefined | {}): Promise<any> {
    return this.callerWrapper('post', endpoint, payload);
  }

  put(endpoint: string, payload: undefined | {}): Promise<any> {
    return this.callerWrapper('put', endpoint, payload);
  }

  delete(endpoint: string, payload: undefined | {}): Promise<any> {
    return this.callerWrapper('delete', endpoint, payload);
  }
}
