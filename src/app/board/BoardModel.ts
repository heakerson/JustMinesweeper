import { GridModel } from "../grid/GridModel";
import { DifficultyType, Difficulty } from "../new-game/DifficultyType";
import { CellModel } from "../cell/CellModel";
import { GameStatus } from "./GameStatus";
import { StatsService } from "../Services/stats.service";
import { GameStateManager } from "../Services/game-state.service";
import { CounterService } from "../counter/counter.service";
import { TimerService } from "../timer/timer.service";
import { CellService } from "../cell/cell.service";

export class BoardModel{

    Grid : GridModel;

    constructor(
        difficulty : DifficultyType, 
        public Stats : StatsService, 
        private gameStateManager : GameStateManager,
        private counterService : CounterService,
        private timerService : TimerService,
        private cellService : CellService
    )
    {
        this.gameStateManager.Difficulty = new Difficulty(difficulty);
        this.Grid = new GridModel(this.gameStateManager.Difficulty.Rows, this.gameStateManager.Difficulty.Columns, this, this.gameStateManager, this.cellService);
        this.gameStateManager.NewGame(difficulty);

        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        }, false);
    }

    // public Stop(){
    //     //this.gameStateManager.GameStatus = GameStatus.Stopped;
    // }

    public TogglePause(){
        if(this.gameStateManager.GameStatus == GameStatus.Started){
            //this.timerService.Stop();
            //this.gameStateManager.GameStatus = GameStatus.Paused;
            this.Grid.Pause();
            this.gameStateManager.SetState(GameStatus.Paused);
        }
        else if(this.gameStateManager.GameStatus == GameStatus.Paused){
            this.Start();
            this.Grid.Pause();
            this.gameStateManager.SetState(GameStatus.Started);
        }

        
    }

    public Start(){
        this.timerService.Start();
        this.gameStateManager.GameStatus = GameStatus.Started;
    }

    // public Win(){
    //     this.Stop();
    // }

    // public Lose(){
    //     this.Stop();
       
    // }
}