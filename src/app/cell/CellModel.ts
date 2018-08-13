import { GridModel } from "../grid/GridModel";
import { GameStatus } from "../board/GameStatus";
import { GameStateManager } from "../Services/game-state.service";
import { CellService } from "./cell.service";
import { GridService } from "../grid/grid.service";

export class CellModel{

    private static IdIndex : number = 0;
    public Id : number = 0;
    public IsSelected : boolean = false;
    public IsMine : boolean = false;
    public IsFlagged : boolean = false;
    public IsRevealed : boolean = false;
    public IsPaused : boolean = false;
    public Row : number = -1;
    public Column : number = -1;
    public Count : number = 0;
    public AdjancentCellLocations : number[][] = [];
    public AdjacentCells : CellModel[] = [];
    public Grid : GridModel;
    public AddedToFlaggedList : boolean = false;

    constructor(grid : GridModel, row : number, column : number){
        this.Id = CellModel.IdIndex;
        CellModel.IdIndex++;
        this.Grid = grid;
        this.Row = row;
        this.Column = column;
    }
}