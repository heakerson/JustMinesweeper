import { Component, OnInit, Input } from '@angular/core';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStateManager } from '../Services/game-state.service';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.css']
})
export class SmileyComponent implements OnInit, IUpdateable {

  constructor(private gameStateManager : GameStateManager) { }

  ngOnInit() {
    this.gameStateManager.RegisterUpdateable(this);
  }

  Reset():void {};
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  
}
