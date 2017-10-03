import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(courriel: string, motDePasse: string) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://mylocalwebsite.net:4000/auth/signin',
      JSON.stringify({ courriel: courriel, motDePasse: motDePasse }), {headers: headers})
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
