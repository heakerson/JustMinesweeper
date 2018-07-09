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
import { StatsService } from './stats.service';
import { SmileyComponent } from './smiley/smiley.component';

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
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
