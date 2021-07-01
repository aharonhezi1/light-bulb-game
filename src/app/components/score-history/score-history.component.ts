import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { ScoreHistory } from 'src/app/models/scoreHistory.model';
import { BulbStateService } from 'src/app/services/bulb-state.service';

@Component({
  selector: 'app-score-history',
  templateUrl: './score-history.component.html',
  styleUrls: ['./score-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ScoreHistoryComponent implements OnInit {
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
