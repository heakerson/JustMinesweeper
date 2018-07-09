import { Component, OnInit, Input } from '@angular/core';
import { SmileyModel } from './SmillyModel';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.css']
})
export class SmileyComponent implements OnInit {

  @Input() Model : SmileyModel;

  constructor() { }

  ngOnInit() {
  }

}
