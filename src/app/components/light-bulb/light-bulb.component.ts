import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GameBoardService } from 'src/app/services/game-board.service';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LightBulbComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription
  @Input() themeColor: string
  @ViewChild('bulb') bulb: ElementRef;
  isChecked: boolean
  isPlayerTurn//: boolean
  constructor(private gameBoardService: GameBoardService, public cd: ChangeDetectorRef) { }
  onCheckBulb() {
    // console.log(' onCheckBulb() ', this.isPlayerTurn.value, this.isChecked);
    this.isChecked = true
    // this.cd.detectChanges()

    if (this.isPlayerTurn.value) {
      this.gameBoardService.bulbCheckedColor$.next(this.themeColor)
      setTimeout(() => {
        this.isChecked = false
        this.cd.detectChanges()
      }, 500)
    } else {
      this.isChecked = false
      // this.cd.detectChanges()

    }

  }
  activateBulb() {
    // console.log(' activateBulb() ',this.themeColor);
    this.isChecked = true;
    this.cd.detectChanges()
    setTimeout(() => {
      this.isChecked = false;
      this.cd.markForCheck()
    }, 600)

  }
  ngOnInit(): void {
    this.gameBoardService.bulbElementrefByColor[this.themeColor] = this
    // this.subscription = this.gameBoardService.isPlayerTurn$.subscribe((isPlayerTurn: boolean) => {
    //   this.isPlayerTurn = isPlayerTurn
    // })
    this.isPlayerTurn = this.gameBoardService.isPlayerTurn$

  }
  ngAfterViewInit() {
    this.bulb.nativeElement.style.setProperty('--on-bulb-color', this.themeColor)

  }
  ngOnDestroy() {
    // this.subscription.unsubscribe()
  }

}
