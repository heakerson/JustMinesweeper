import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGameComponent } from './Components/new-game/new-game.component';
import { BoardComponent } from './Components/board/board.component';

const routes: Routes = [
  { path: 'New', component: NewGameComponent },
  { path: 'Gameplay/:difficulty', component: BoardComponent},
  { path: '',
    redirectTo: '/New',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
