import { GameStatus } from "../Services/GameStatus";
import { GameStateManager } from "../Services/game-state.service";
import { CellService } from "../Services/cell.service";
import { GridService } from "../Services/grid.service";

export class CellModel{

    private static IdIndex : number = 0;
    public Id : number = 0;
    public IsSelected : boolean = false;
    public IsMine : boolean = false;
    public IsFlagged : boolean = false;
    public IsRevealed : boolean = false;
    public IsPaused : boolean = false;
    public Won : boolean = false;
    public Row : number = -1;
    public Column : number = -1;
    public Count : number = 0;
    public AdjancentCellLocations : number[][] = [];
    public AdjacentCells : CellModel[] = [];
    public AddedToFlaggedList : boolean = false;

    constructor(row : number, column : number){
        this.Id = CellModel.IdIndex;
        CellModel.IdIndex++;
        this.Row = row;
        this.Column = column;
    }
}