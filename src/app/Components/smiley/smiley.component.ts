import { Component, OnInit, Input } from '@angular/core';
import { IUpdateable } from '../../Interfaces/IUpdateable';
import { GameStateManager } from '../../Services/Game State Service/game-state.service';
import { SmileyService } from '../../Services/Smiley Service/smiley.service';
import { SmileyModel, SmileyIcon } from './SmileyModel';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.css']
})
export class SmileyComponent implements OnInit, IUpdateable {

  public Smiley : SmileyModel = new SmileyModel(SmileyIcon.Smile, "LET'S PLAY");
  private testClasses = 'text-success font-weight-bold';

  constructor(public gameStateManager : GameStateManager, private smileyService : SmileyService) { }

  ngOnInit() {
    this.smileyService.RegisterSmileyModel(this.Smiley);
    this.gameStateManager.RegisterUpdateable(this);
  }

  GetSmileyIconClasses() : string{
    return this.testClasses;
  }

  Reset():void {
    this.Smiley.Message = "LET'S PLAY!";

    this.Smiley.Icon = SmileyIcon.Smile;
    this.Smiley.PreviousIcon = SmileyIcon.Smile;
  };
  Start():void {

    //If unpausing
    if(this.Smiley.Icon == SmileyIcon.Blank){
      this.Smiley.Icon = this.Smiley.PreviousIcon;
      this.Smiley.Message = this.Smiley.PreviousMessage;
    }
    else{
      this.Smiley.Icon = SmileyIcon.Smile;
    }

    this.Smiley.Message = "KEEP GOING";

  };
  Stop():void {};
  Pause():void {
    this.Smiley.PreviousIcon = this.Smiley.Icon;
    this.Smiley.PreviousMessage = this.Smiley.Message;
    this.Smiley.Icon = SmileyIcon.Blank;
    this.Smiley.Message = "PAUSED"
  };
  Win():void {
    this.Smiley.Icon = SmileyIcon.Joyful;
    this.Smiley.Message = "WIN!!"
  };
  Lose():void {
    this.Smiley.Icon = SmileyIcon.Upset;
    this.Smiley.Message = "OH NO!"
  };
  Warning():void {
    this.Smiley.PreviousIcon = this.Smiley.Icon;
    this.Smiley.Icon = SmileyIcon.Surprise;
    this.Smiley.Message = "Hmmm..."
  }
}
