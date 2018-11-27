import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  usuario: any = {
    usuario: null,
    password: null

  };

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);

    this.http.post('http://ndj8w.mocklab.io/login', JSON.stringify(form.value))
      .subscribe(user => console.log(user));
  }



  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

}
