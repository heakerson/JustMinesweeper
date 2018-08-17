import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGameComponent } from './Components/new-game/new-game.component';
import { BoardComponent } from './Components/board/board.component';
import { GridComponent } from './Components/grid/grid.component';
import { CellComponent } from './Components/cell/cell.component';
import { CounterComponent } from './Components/counter/counter.component';
import { TimerComponent } from './Components/timer/timer.component';
import { StatsComponent } from './Components/stats/stats.component';
import { StatsService } from './Services/Stats Service/stats.service';
import { SmileyComponent } from './Components/smiley/smiley.component';
import { GameStateManager } from './Services/Game State Service/game-state.service';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
