import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BulbStateService } from 'src/app/services/bulb-state.service';
import { GameBoardService } from 'src/app/services/game-board.service';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.scss']
})
export class LightBulbComponent implements OnInit, AfterViewInit ,OnDestroy{
  subscription
  @Input() themeColor: string
 // @Input() index: number
  @ViewChild('bulb') bulb: ElementRef;
 isChecked: boolean
  isPlayerTurn:boolean
  constructor(private bulbStateService: BulbStateService, private gameBoardService: GameBoardService, private elementref: ElementRef) { }
  onCheckBulb() {
    if(this.isPlayerTurn){
  this.gameBoardService.bulbCheckedColor$.next(this.themeColor)
      setTimeout(()=>{this.isChecked=false},500)
    }
   
  }
  activateBulb() {
    this.isChecked = true;
    setTimeout(()=>{this.isChecked=false},600)

  }
  ngOnInit(): void {
    this.gameBoardService.bulbElementrefByColor[this.themeColor] = this
    this.subscription=  this.gameBoardService.isPlayerTurn$.subscribe((isPlayerTurn:boolean)=>{
      this.isPlayerTurn=isPlayerTurn
    })

  }
  ngAfterViewInit() {
    this.bulb.nativeElement.style.setProperty('--on-bulb-color', this.themeColor)

  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
