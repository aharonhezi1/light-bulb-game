import { AfterContentChecked, AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { LightBulbComponent } from '../light-bulb/light-bulb.component';
import { BulbStateService } from '../../services/bulb-state.service'
import { GameBoardService } from '../../services/game-board.service'
import { from, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {

  subscription = new Subject()
  bulbsColor: string[];

  get name() {
    return this.gameBoardService.playerName

  }
  get score() {
    return this.gameBoardService.score
  }
  get highestScore() {
    if (this.bulbStateService.scoreHistory$.value) {
      return this.bulbStateService.scoreHistory$.value[0].score
    } else {
      return 0
    }
  }
  get isSequenceOn() {
    return this.gameBoardService.isSequenceOn
  }


  message: string
  constructor(private gameBoardService: GameBoardService, private bulbStateService: BulbStateService) { }

  onGameStart() {
    this.gameBoardService.onGameStart()
  }

  ngOnInit(): void {
    this.bulbsColor = this.gameBoardService.bulbsColor
    this.gameBoardService.bulbCheckedColor$.pipe(takeUntil(this.subscription)).subscribe(color => {
      if (color)
        this.gameBoardService.onChooseBulb(color)

    })
    this.gameBoardService.gameMessage$.pipe(takeUntil(this.subscription)).subscribe(message => {
      this.message = message
      setTimeout(() => {
        this.message = null
      }, 1000)
    })
  }
  onQuit() {
    this.gameBoardService.onQuit()
  }
  ngOnDestroy() {
    this.subscription.next()
    this, this.subscription.complete
  }


}
