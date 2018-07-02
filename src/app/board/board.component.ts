import { Component, OnInit, Input } from '@angular/core';
import { Difficulty } from '../new-game/new-game.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() Difficulty : Difficulty;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Difficulty = <Difficulty>params.get('difficulty');
    });

    //this.Difficulty = this.route.snapshot.params.difficulty;
  }

}
