import { GridModel } from "../grid/GridModel";
import { CounterModel } from "../counter/CounterModel";
import { TimerModel } from "../timer/TimerModel";
import { DifficultyType, Difficulty } from "../new-game/DifficultyType";
import { CellModel } from "../cell/CellModel";
import { GameStatus } from "./GameStatus";

export class BoardModel{

    Grid : GridModel;
    Counter : CounterModel;
    Timer : TimerModel = new TimerModel();
    Difficulty : Difficulty;
    Flags : number = 0;
    MinesLocated : number = 0;
    GameStatus : GameStatus = GameStatus.Reset;

    constructor(difficulty : DifficultyType){
        this.Difficulty = new Difficulty(difficulty);
        this.Grid = new GridModel(this.Difficulty.Rows, this.Difficulty.Columns, this);
        this.Counter = new CounterModel(this.Difficulty.MineCount);
    }

    public Reset(){
        this.GameStatus = GameStatus.Reset;
        this.Flags = 0;
        this.MinesLocated = 0;

        this.Timer.Reset();
        this.Counter.Reset(this.Difficulty.MineCount);
        this.Grid.Reset();
    }

    public Stop(){
        this.Timer.Stop();
        this.GameStatus = GameStatus.Stopped;
    }

    public Start(){
        this.Timer.Start();
        this.GameStatus = GameStatus.Started;
    }

    public Win(){
        this.Stop();
        this.GameStatus = GameStatus.Win;
        alert('You win!');
    }

    public Lose(){
        this.Stop();
        this.GameStatus = GameStatus.Lose;
        alert('You lose!');
    }

    public UpdateLocatedMines(flaggedCell : CellModel){

        this.Counter.Decrement();
        this.Flags++;

        if(flaggedCell.IsMine){
            this.MinesLocated++;
        }

        if(this.MinesLocated == this.Difficulty.MineCount){
            this.Win();
        }
    }
}