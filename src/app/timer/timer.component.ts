import { Component, OnInit, Input } from '@angular/core';
import { TimerModel } from './TimerModel';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() Model : TimerModel;

  constructor() { }

  ngOnInit() {
  }

}
