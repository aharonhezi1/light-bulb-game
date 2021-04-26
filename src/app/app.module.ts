import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightBulbComponent } from './components/light-bulb/light-bulb.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { BulbStateService } from './services/bulb-state.service';
import { ScoreHistoryComponent } from './components/score-history/score-history.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LightBulbComponent,
    GameBoardComponent,
    ScoreHistoryComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BulbStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
