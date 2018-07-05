import { Component, OnInit, Input } from '@angular/core';
import { CounterModel } from './CounterModel';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() Model : CounterModel;

  constructor() { }

  ngOnInit() {
  }

}
