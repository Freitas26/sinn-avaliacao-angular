import { URL_API } from './../url.api';
import { HttpClient } from '@angular/common/http';



import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import {TypeUser} from './typeUser.model';
import {Endereco} from './endereco.model';


@Injectable()
export class UserService {
private URL_API_USERS="http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/usuarios"
private URL_API_USERTYPE="http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/tipoUsuario"
private URL_API_CEP="http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/cep?cep="

constructor(private http: HttpClient) { }

user: User[];

  getCurrentUser(): Observable<User> {
      return this.http.get<User>(this.URL_API_USERS);
  }

  setUser(usuarioDelegacoes) {
    this.user = usuarioDelegacoes;
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.URL_API_USERS);

  }
  getUserType(): Observable<TypeUser[]>{
    return this.http.get<TypeUser[]>(this.URL_API_USERTYPE);

  }
  getCEP(cep: string): Observable<Endereco>{
    const url = `${this.URL_API_CEP}${cep}`;
    return this.http.get<Endereco>(url);

  }
  addUsuario (usuario: User): Observable<User> {
  return this.http.post<User>(this.URL_API_USERS, usuario);
}
}
