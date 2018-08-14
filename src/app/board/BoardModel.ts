import { GridModel } from "../grid/GridModel";
import { GameStateManager } from "../Services/game-state.service";
import { GridService } from "../grid/grid.service";

export class BoardModel{

    Grid : GridModel;

    constructor(
        private gameStateManager : GameStateManager,
        private gridService : GridService
    )
    {
        this.Grid = new GridModel(this.gameStateManager.Difficulty.Rows, this.gameStateManager.Difficulty.Columns,this.gridService);
    }
}