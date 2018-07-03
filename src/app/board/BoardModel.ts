import { GridModel } from "../grid/GridModel";
import { CounterModel } from "../counter/CounterModel";
import { TimerModel } from "../timer/TimerModel";
import { DifficultyType, Difficulty } from "../new-game/DifficultyType";

export class BoardModel{

    Grid : GridModel;
    Counter : CounterModel = new CounterModel();
    Timer : TimerModel = new TimerModel();
    Difficulty : Difficulty;

    constructor(difficulty : DifficultyType){
        this.Difficulty = new Difficulty(difficulty);
        this.Grid = new GridModel(this.Difficulty.Rows, this.Difficulty.Columns, this);
            console.log("CellArray: " + this.Grid.CellArray);
    }

    public Reset(){

    }

    public Stop(){

    }

    public Start(){

    }

}