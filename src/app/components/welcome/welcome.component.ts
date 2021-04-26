import { Component, OnInit } from '@angular/core';
import { GameBoardService } from 'src/app/services/game-board.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
playerName:string
  constructor(private gameBoardService:GameBoardService) { }
  onEnterName(){
this.gameBoardService.playerName=this.playerName
  }

  ngOnInit(): void {
  }

}
