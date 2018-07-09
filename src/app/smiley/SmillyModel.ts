import { BoardModel } from "../board/BoardModel";
import { GameStatus } from "../board/GameStatus";

export class SmileyModel{
   
    // public Danger : boolean = this.Board.GameStatus == GameStatus.Lose;
    // public Warning : boolean = (this.Board.GameStatus == GameStatus.Started || this.Board.GameStatus == GameStatus.Stopped) && 
    //                             this.Board.GetFlaggedCount() >= this.Board.Difficulty.MineCount;
    // public Good : boolean = !(this.Danger && this.Warning);

    constructor(public Board : BoardModel){

    }

}