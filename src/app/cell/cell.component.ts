import { Component, OnInit, Input } from '@angular/core';
import { CellModel } from './CellModel';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() Model : CellModel;

  constructor() { }

  ngOnInit() {
  }

  ClickCell(){
    this.Model.ClickCell();
  }

}
