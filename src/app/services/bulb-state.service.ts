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

  private scoreHistory: ScoreHistory[] = JSON.parse(localStorage.getItem('history')) === null ? [] : JSON.parse(localStorage.getItem('history'))
  scoreHistory$ = new BehaviorSubject<ScoreHistory[]>(JSON.parse(localStorage.getItem('history')))
  getComputerSequence(): string[] {
    return this.computerSequence.slice()
  }
  getPlayerSequence(): string[] {
    return this.playerSequence.slice()
  }

  addComputerSequence(value) {
    this.computerSequence.push(value)
  }
  addPlayerSequence(value) {
    this.playerSequence.push(value)
  }
  addScoreHistory(value: ScoreHistory) {
    let i = 0
    for (; i < this.scoreHistory.length; i++) {
      if (value.score > this.scoreHistory[i].score) {
        break;
      }
    }
    this.scoreHistory.splice(i, 0, value)

    this.scoreHistory$.next(this.scoreHistory)
  }

  deleteComputerSequence() {
    this.computerSequence = []
  }
  deletePlayerSequence() {
    this.playerSequence = []
  }
  deleteScoreHistory() {
    this.scoreHistory = []
    this.scoreHistory$.next(null)
  }
}
