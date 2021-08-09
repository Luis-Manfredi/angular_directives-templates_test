import { Component } from '@angular/core';
import { Game } from 'src/app/game.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Juegos Favoritos';
  
  title:string="";
  genre:string="";
  year:number=0;

  games:Game[]=[
    
  ];

  agregarJuego(){
    let myGame = new Game(this.title, this.genre, this.year)
    this.games.push(myGame);
  }

}
