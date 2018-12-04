import { Usuario } from '../login/usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAUtenticado: Boolean = false;

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario) {

    if (usuario.userName === 'trainer@pokemon.com' &&
    usuario.password === 'p0k3l1f3') {

      this.usuarioAUtenticado = true;

      this.mostrarMenuEmmiter.emit(true);

      this.router.navigate(['meu-pokemon']);

    } else {
      this.usuarioAUtenticado = false;

      this.mostrarMenuEmmiter.emit(false);
      return alert('Usuário ou senha inválidos');

    }
  }
}
