import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScoreHistory } from 'src/app/models/scoreHistory.model';
import { BulbStateService } from 'src/app/services/bulb-state.service';

@Component({
  selector: 'app-score-history',
  templateUrl: './score-history.component.html',
  styleUrls: ['./score-history.component.scss']
})
export class ScoreHistoryComponent implements OnInit {
date=interval(5000).pipe(map(()=>new Date()))
scoreHistoryDetails: BehaviorSubject<ScoreHistory[]>
  constructor( private bulbStateService:BulbStateService) { }

  ngOnInit(): void {
   this.scoreHistoryDetails=this.bulbStateService.scoreHistory$
  }

}
