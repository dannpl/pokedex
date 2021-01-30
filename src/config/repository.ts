import ApiService from './apiService';

export default class Repository {
  constructor(public apiservice: ApiService) {
    //
  }

  getUser(): any {
    return this.apiservice.get('/v1/user');
  }
}
