import { Component, OnInit, Input } from '@angular/core';
import { DifficultyType } from '../new-game/DifficultyType';
import { ActivatedRoute } from '@angular/router';
import { BoardModel } from './BoardModel';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  Model : BoardModel;

  constructor(private route : ActivatedRoute, private Stats : StatsService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let difficulty : DifficultyType = <DifficultyType>params.get('difficulty');
      this.Model = new BoardModel(difficulty, this.Stats);
    });
    
  }

}
