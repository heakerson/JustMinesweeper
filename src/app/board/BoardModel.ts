import { GridModel } from "../grid/GridModel";
// import { CounterModel } from "../counter/CounterModel";
// import { TimerModel } from "../timer/TimerModel";
import { DifficultyType, Difficulty } from "../new-game/DifficultyType";
import { CellModel } from "../cell/CellModel";
import { GameStatus } from "./GameStatus";
import { StatsService } from "../Services/stats.service";
// import { SmileyModel } from "../smiley/SmillyModel";
import { GameStateManager } from "../Services/game-state.service";
import { BoardService } from "../Services/board.service";
import { CounterService } from "../counter/counter.service";
import { TimerService } from "../timer/timer.service";
import { CellService } from "../cell/cell.service";

export class BoardModel{

    Grid : GridModel;
    // Counter : CounterModel;
    // Timer : TimerModel = new TimerModel(this);
    // Smiley : SmileyModel = new SmileyModel(this);
    //Difficulty : Difficulty;
    Flags : number = 0;
    //MinesLocated : number = 0;
    //GameStatus : GameStatus = GameStatus.Reset;
    //FlaggedCells : CellModel[] = [];
    //StatsLogged : boolean = false;

    constructor(
        difficulty : DifficultyType, 
        public Stats : StatsService, 
        private gameStateManager : GameStateManager,
        private boardService : BoardService,
        private counterService : CounterService,
        private timerService : TimerService,
        private cellService : CellService
    )
    {
        this.gameStateManager.Difficulty = new Difficulty(difficulty);
        this.Grid = new GridModel(this.gameStateManager.Difficulty.Rows, this.gameStateManager.Difficulty.Columns, this, this.gameStateManager, this.cellService);
        // this.Counter = new CounterModel(this.Difficulty.MineCount);
        this.gameStateManager.NewGame(difficulty);

        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        }, false);
    }

    public Reset(){

        if(!this.gameStateManager.StatsLogged){
            this.Stats.Update(this, this.timerService, false);
        }

        this.TogglePause();

        this.gameStateManager.GameStatus = GameStatus.Reset;
        this.Flags = 0;
        this.gameStateManager.MinesLocated = 0;
        this.gameStateManager.StatsLogged = false;

        this.timerService.Reset();
        this.counterService.Reset(this.gameStateManager.Difficulty.MineCount);
        this.Grid.Reset();
        this.gameStateManager.SetState(GameStatus.Reset);
    }

    public Stop(){
        this.timerService.Stop();
        this.gameStateManager.GameStatus = GameStatus.Stopped;
    }

    public TogglePause(){
        if(this.gameStateManager.GameStatus == GameStatus.Started){
            this.timerService.Stop();
            this.gameStateManager.GameStatus = GameStatus.Paused;
            this.Grid.Pause();
        }
        else if(this.gameStateManager.GameStatus == GameStatus.Paused){
            this.Start();
            this.Grid.Pause();
        }

        this.gameStateManager.SetState(this.gameStateManager.GameStatus);
    }

    public Start(){
        this.timerService.Start();
        this.gameStateManager.GameStatus = GameStatus.Started;
    }

    public Win(){
        this.Stop();
        this.gameStateManager.GameStatus = GameStatus.Win;
        this.Stats.Update(this, this.timerService, true);
    }

    public Lose(){
        this.Stop();
        this.gameStateManager.GameStatus = GameStatus.Lose;
        this.Grid.RevealMines();
        this.Stats.Update(this, this.timerService, false);
    }

    public UpdateLocatedMines(cell : CellModel){

        if(cell.IsFlagged){

            if(!this.IsInFlaggedList(cell)){
                this.gameStateManager.FlaggedCells.push(cell);
            }

            if(cell.IsMine){
                this.gameStateManager.MinesLocated++;
            }

            this.counterService.Decrement();
            this.Flags--;
        }
        else{

            if(cell.IsMine){
                this.gameStateManager.MinesLocated--;
            }

            this.counterService.Incrememnt();
            this.Flags++;
        }

        // console.log("cell: " + cell);
        // console.log("minesLocated: " + this.MinesLocated);
        // console.log("flagged count: " + this.GetFlaggedCount());

        if(this.gameStateManager.MinesLocated == this.gameStateManager.Difficulty.MineCount && this.gameStateManager.GetFlaggedCount() == this.gameStateManager.Difficulty.MineCount){
            this.Win();
        }
    }

    public IsInFlaggedList(cell : CellModel) : boolean{

        for(let aCell of this.gameStateManager.FlaggedCells){
            if(aCell.Id == cell.Id){
                return true;
            }
        }

        return false;
    }
}