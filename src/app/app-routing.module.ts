import { TelaLoginComponent } from './tela-login/tela-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { PokemonFavoritoComponent } from './pokemon-favorito/pokemon-favorito.component';

const routes: Routes = [
  {path:'tela-login', component: TelaLoginComponent},
  {path:'pagina-erro', component: PaginaErroComponent },
  {path:'pokemon-favorito', component: PokemonFavoritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
