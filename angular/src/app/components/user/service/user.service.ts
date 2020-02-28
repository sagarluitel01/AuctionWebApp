// get built-in library
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// get components
import { User } from '../model/user.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  // httpMethods
  addUser(user: User){
    return this.http.post(environment.userUrl + '/register', user, this.noAuthHeader);
  }

  login(authCredentials){
    return this.http.post(environment.userUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getUserProfile(){
    return this.http.get(environment.userUrl + '/dashboard');
  }

  editUser(user: User){
    return this.http.put(environment.userUrl + '/editUser', user);
  }

  changePassword(token, newPassword: String){
    return this.http.put(environment.userUrl + '/changePassword/' + token, { newPassword });
  }

  forgotPassword(email: String){
    return this.http.post(environment.userUrl + '/forgotPassword', email);
  }

  getUserById(id: String){
    return this.http.get(environment.userUrl + '/getUserById/' + id);
  }

  resetPassword(token, newPassword: String){
    return this.http.put(environment.userUrl + '/resetPassword/' + token, { newPassword });
  }

  getUsers(){
    return this.http.get(environment.userUrl + '/getUsers');
  }

  deleteUser(userID: String){
    return this.http.delete(environment.userUrl + '/deleteUser/' + userID);
  }

  // Helper Methods
  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayLoad(){
    var token = this.getToken();

    if (token){
      var userPayLoad = atob(token.split('.')[1]);
      return JSON.parse(userPayLoad);
    }
    else
      return null;
  }

  isLoggedIn(){
    var userPayLoad = this.getUserPayLoad();

    if (userPayLoad)
      return userPayLoad.exp > Date.now() / 1000;
    else
      return false;
  }
}
