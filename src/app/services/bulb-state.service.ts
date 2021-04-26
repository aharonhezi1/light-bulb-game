import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScoreHistory } from '../models/scoreHistory.model';

@Injectable({
  providedIn: 'root'
})
export class BulbStateService {

  constructor() { }

  private computerSequence: string[] = []
  private playerSequence: string[] = []

  private scoreHistory: ScoreHistory[] = []
  scoreHistory$ = new BehaviorSubject<ScoreHistory[]>(null)
  getComputerSequence(): string[] {
    return this.computerSequence.slice()
  }
  getPlayerSequence(): string[] {
    return this.playerSequence.slice()
  }
  // getScoreHistory(): ScoreHistory[] {
  //   return this.scoreHistory.slice()
  // }

  addComputerSequence(value) {
    this.computerSequence.push(value)
  }
  addPlayerSequence(value) {
    this.playerSequence.push(value)
  }
  addScoreHistory(value: ScoreHistory) {
    let i = 0
    for ( ; i < this.scoreHistory.length; i++) {
      if (value.score > this.scoreHistory[i].score) {
        break;
      }
    }
    this.scoreHistory.splice(i,0 , value)

    // this.scoreHistory.push(value)
    this.scoreHistory$.next(this.scoreHistory)
  }

  deleteComputerSequence() {
    this.computerSequence = []
  }
  deletePlayerSequence() {
    this.playerSequence = []
  }





}
