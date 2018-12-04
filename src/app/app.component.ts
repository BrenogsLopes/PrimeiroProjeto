import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-pokemon-favorito';

  mostrarMenu: Boolean = false;
  name: any = '';

  constructor(private authService: AuthService, httpClient: HttpClient) { }


ngOnInit() {
    this.authService.mostrarMenuEmmiter.subscribe(
      mostra => this.mostrarMenu = mostra
    );
  }
}


