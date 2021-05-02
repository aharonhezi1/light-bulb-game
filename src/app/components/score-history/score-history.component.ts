import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ScoreHistory } from 'src/app/models/scoreHistory.model';
import { BulbStateService } from 'src/app/services/bulb-state.service';

@Component({
  selector: 'app-score-history',
  templateUrl: './score-history.component.html',
  styleUrls: ['./score-history.component.scss']
})
export class ScoreHistoryComponent implements OnInit {
  // date = interval(5000).pipe(map(() => new Date()))
  scoreHistoryDetails: BehaviorSubject<ScoreHistory[]>
  constructor(private bulbStateService: BulbStateService) { }
onClear(){
  localStorage.clear()
  this.bulbStateService.deleteScoreHistory()
}
  ngOnInit(): void {
    this.scoreHistoryDetails = this.bulbStateService.scoreHistory$
  }
  
}
