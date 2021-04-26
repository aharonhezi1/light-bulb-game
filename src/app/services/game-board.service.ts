import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BulbStateService } from './bulb-state.service';

@Injectable({
  providedIn: 'root'
})
export class GameBoardService {
  
  isPlayerTurn$ = new BehaviorSubject<boolean>(false)
  bulbCheckedColor$ = new BehaviorSubject<string>(null)
  gameMessage$ = new BehaviorSubject<string>(null)
  bulbsColor = ['245, 245, 32', "214, 5, 5", '41, 12, 109', '7, 247, 127', '247, 7, 147', '243, 120, 19'];
  bulbElementrefByColor = {}
  isGameStart: boolean
  playerName: string
  score = 0
  isSequenceOn=new BehaviorSubject<boolean>(false)
  constructor(private bulbStateService: BulbStateService) { }

  chooseColor() {
    return this.bulbsColor[parseInt(Math.random() * this.bulbsColor.length + '')]
  }

  onGameStart() {
    this.isSequenceOn.next(true)
    this.isGameStart = true
    this.bulbStateService.deleteComputerSequence()
    this.bulbStateService.deletePlayerSequence()
    this.playSequence()
  }

  playSequence() {


  this.isPlayerTurn$.next(false)
    this.bulbStateService.addComputerSequence(this.chooseColor())
    const computerSequence = this.bulbStateService.getComputerSequence()
    for (let i = 0; i <= computerSequence.length; i++) {
      setTimeout(() => {
        if (i < computerSequence.length) {
          this.bulbElementrefByColor[computerSequence[i]].activateBulb()
        } else {
          this.isPlayerTurn$.next(true)
        }
      }, (i + 1) * 1200)
    }
  }

  isEquelSequence(): boolean {
    const playerSequence = this.bulbStateService.getPlayerSequence()
    const computerSequence = this.bulbStateService.getComputerSequence().slice(0, playerSequence.length)
    return JSON.stringify(playerSequence) === JSON.stringify(computerSequence)
  }

  onChooseBulb(themeColor) {
    
    this.bulbStateService.addPlayerSequence(themeColor)
    if (!this.isEquelSequence() && this.isGameStart) {
      return this.gameOver()
    }
    if (this.bulbStateService.getPlayerSequence().length === this.bulbStateService.getComputerSequence().length) {
      return this.nextLevel()
    }

  }

  nextLevel() {
    this.isPlayerTurn$.next(false)
    this.bulbStateService.deletePlayerSequence()
    this.playSequence()
    this.gameMessage$.next('WELL DONE!')
    this.score += 10;

  }

  gameOver() {
    this.isPlayerTurn$.next(false)
    // this.bulbCheckedColor$.next(null)
    this.bulbStateService.deleteComputerSequence()
    this.bulbStateService.deletePlayerSequence()
    this.gameMessage$.next('GAME OVER!')
    if (this.isGameStart) {
      this.bulbStateService.addScoreHistory({ playerName: this.playerName, score: this.score, date: new Date() })
    }
    this.score = 0
    this.isGameStart=false
    this.isSequenceOn.next(false)

  }
  onQuit() {
    this.gameOver()
    this.playerName = null
    this.gameMessage$.next(null)

  }

}
