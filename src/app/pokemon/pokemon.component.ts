import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  readonly apiURL : string;

  constructor(private http : HttpClient) {
    this.apiURL = 'https://pokeapi.co/api/v2/pokemon/';
    this.searchPokemon();
   }

  ngOnInit(): void {
  }

  searchPokemon () {
    const randomNumberFirstGen: number = this.randomNumberFirstGen();
    this.http.get(`${this.apiURL}`+randomNumberFirstGen).subscribe(result => console.log(result));
    
  }

  randomNumberFirstGen(): number {
    const randomNumber: number = Math.floor(Math.random() * 151);
    return randomNumber;
  }

}
