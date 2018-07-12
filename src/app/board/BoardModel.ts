import { GridModel } from "../grid/GridModel";
import { CounterModel } from "../counter/CounterModel";
import { TimerModel } from "../timer/TimerModel";
import { DifficultyType, Difficulty } from "../new-game/DifficultyType";
import { CellModel } from "../cell/CellModel";
import { GameStatus } from "./GameStatus";
import { StatsService } from "../stats.service";
import { SmileyModel } from "../smiley/SmillyModel";

export class BoardModel{

    Grid : GridModel;
    Counter : CounterModel;
    Timer : TimerModel = new TimerModel(this);
    Smiley : SmileyModel = new SmileyModel(this);
    Difficulty : Difficulty;
    Flags : number = 0;
    MinesLocated : number = 0;
    GameStatus : GameStatus = GameStatus.Reset;
    FlaggedCells : CellModel[] = [];
    StatsLogged : boolean = false;

    constructor(difficulty : DifficultyType, public Stats : StatsService){
        this.Difficulty = new Difficulty(difficulty);
        this.Grid = new GridModel(this.Difficulty.Rows, this.Difficulty.Columns, this);
        this.Counter = new CounterModel(this.Difficulty.MineCount, this);

        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        }, false);
    }

    public Reset(){

        if(!this.StatsLogged){
            this.Stats.Update(this, this.Timer, false);
        }

        this.TogglePause();

        this.GameStatus = GameStatus.Reset;
        this.Flags = 0;
        this.MinesLocated = 0;
        this.StatsLogged = false;
        this.FlaggedCells = [];

        this.Timer.Reset();
        this.Counter.Reset(this.Difficulty.MineCount);
        this.Grid.Reset();
    }

    public Stop(){
        this.Timer.Stop();
        this.GameStatus = GameStatus.Stopped;
    }

    public TogglePause(){
        if(this.GameStatus == GameStatus.Started){
            this.Timer.Stop();
            this.GameStatus = GameStatus.Paused;
            this.Grid.Pause();
        }
        else if(this.GameStatus == GameStatus.Paused){
            this.Start();
            this.Grid.Pause();
        }
    }

    public Start(){
        this.Timer.Start();
        this.GameStatus = GameStatus.Started;
    }

    public Win(){
        this.Stop();
        this.GameStatus = GameStatus.Win;
        this.Stats.Update(this, this.Timer, true);
    }

    public Lose(){
        this.Stop();
        this.GameStatus = GameStatus.Lose;
        this.Grid.RevealMines();
        this.Stats.Update(this, this.Timer, false);
    }

    public UpdateLocatedMines(cell : CellModel){

        if(cell.IsFlagged){

            if(!this.IsInFlaggedList(cell)){
                this.FlaggedCells.push(cell);
            }

            if(cell.IsMine){
                this.MinesLocated++;
            }

            this.Counter.Decrement();
            this.Flags--;
        }
        else{

            if(cell.IsMine){
                this.MinesLocated--;
            }

            this.Counter.Incrememnt();
            this.Flags++;
        }

        // console.log("cell: " + cell);
        // console.log("minesLocated: " + this.MinesLocated);
        // console.log("flagged count: " + this.GetFlaggedCount());

        if(this.MinesLocated == this.Difficulty.MineCount && this.GetFlaggedCount() == this.Difficulty.MineCount){
            this.Win();
        }
    }

    public IsInFlaggedList(cell : CellModel) : boolean{

        for(let aCell of this.FlaggedCells){
            if(aCell.Id == cell.Id){
                return true;
            }
        }

        return false;
    }

    public GetFlaggedCount() : number{
        let count : number = 0;
        for(let flag of this.FlaggedCells){
            if(flag.IsFlagged){
                count++;
            }
        }
        return count;
    }
}