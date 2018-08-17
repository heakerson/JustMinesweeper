import { Injectable, OnInit } from '@angular/core';
import { SmileyModel, SmileyIcon } from '../smiley/SmileyModel';

@Injectable({
  providedIn: 'root'
})
export class SmileyService{

  public Smiley : SmileyModel;

  constructor() { }

  public RegisterSmileyModel(smiley : SmileyModel){
    this.Smiley = smiley;
  }

  public MouseDown(){
    this.Smiley.PreviousMessage = this.Smiley.Message;
    this.Smiley.PreviousIcon = this.Smiley.Icon;
    this.Smiley.Icon = SmileyIcon.Wink;
    this.Smiley.Message = "";
  }

  public MouseUp(){
    this.Smiley.Message = this.Smiley.PreviousMessage;
    this.Smiley.Icon = this.Smiley.PreviousIcon;
  }
}
