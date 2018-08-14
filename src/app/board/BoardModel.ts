import { GridModel } from "../grid/GridModel";
import { DifficultyType } from "../new-game/DifficultyType";
import { GameStatus } from "./GameStatus";
import { GameStateManager } from "../Services/game-state.service";
import { TimerService } from "../timer/timer.service";
import { CellService } from "../cell/cell.service";
import { GridService } from "../grid/grid.service";

export class BoardModel{

    Grid : GridModel;

    constructor(
        private gameStateManager : GameStateManager,
        private cellService : CellService,
        private gridService : GridService
    )
    {
        this.Grid = new GridModel(this.gameStateManager.Difficulty.Rows, this.gameStateManager.Difficulty.Columns, this, this.gameStateManager, this.cellService, this.gridService);
    }
}