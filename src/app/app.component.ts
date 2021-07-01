import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameBoardService } from './services/game-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  title = 'light-bulbs-game';
  constructor(private gameBoardService:GameBoardService){}

  get playerName(){
    return this.gameBoardService.playerName
  }
}
