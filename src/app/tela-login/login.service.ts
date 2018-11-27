import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  responseData: any;

  constructor(private http: HttpClient) { }

  getMyPokemon() {
    this.http.get('http://ndj8w.mocklab.io/pokemon/1').subscribe(response => {
      this.responseData = response;
    },
    error => {
      console.log(error);
    });
  }

    login() {
      this.http.post('http://ndj8w.mocklab.io/login', JSON.stringify).subscribe(response => {
        this.responseData = response;
      },
      error => {
        console.log(error);
      });
    }
}
