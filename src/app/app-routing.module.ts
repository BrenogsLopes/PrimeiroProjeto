import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MeuPokemonComponent } from './meu-pokemon/meu-pokemon.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'meu-pokemon', component: MeuPokemonComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
