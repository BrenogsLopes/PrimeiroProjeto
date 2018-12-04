import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { MeuPokemonComponent } from './meu-pokemon/meu-pokemon.component';
import { Usuario } from './login/usuario';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MeuPokemonComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule


  ],
  providers: [
    AuthService,
    Usuario,
    Http,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
