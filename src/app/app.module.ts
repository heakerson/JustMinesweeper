import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { BoardComponent } from './board/board.component';
import { GridComponent } from './grid/grid.component';
import { CellComponent } from './cell/cell.component';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';
import { StatsComponent } from './stats/stats.component';
import { StatsService } from './Services/stats.service';
import { SmileyComponent } from './smiley/smiley.component';
import { GameStateManager } from './Services/game-state.service';
import { BoardService } from './Services/board.service';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    BoardComponent,
    GridComponent,
    CellComponent,
    CounterComponent,
    TimerComponent,
    StatsComponent,
    SmileyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StatsService, 
    GameStateManager,
    BoardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
