
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-meu-pokemon',
  templateUrl: './meu-pokemon.component.html',
  styleUrls: ['./meu-pokemon.component.css']
})
export class MeuPokemonComponent implements OnInit {

  myPokemon: any = '';

  constructor(private httClient: HttpClient) { }
