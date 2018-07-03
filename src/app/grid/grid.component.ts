import { Component, OnInit, Input } from '@angular/core';
import { GridModel } from './GridModel';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() Model : GridModel;

  constructor() {}

  ngOnInit() {
  }

}
