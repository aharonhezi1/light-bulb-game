import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameBoardService } from 'src/app/services/game-board.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class WelcomeComponent implements OnInit,AfterViewInit {
playerName:string

@ViewChild('enterNameInput') enterNameInput:ElementRef
  constructor(private gameBoardService:GameBoardService) { }
  onEnterName(){
this.gameBoardService.playerName=this.playerName
  }
  onPressEnter(e){
    if(e.keyCode === 13){
      this.onEnterName()
    }
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.enterNameInput.nativeElement.focus()

  }

}
