import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../Services/Stats Service/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'] 
})
export class StatsComponent implements OnInit { 

  constructor(public Stats : StatsService) { }

  ngOnInit() {}

}
