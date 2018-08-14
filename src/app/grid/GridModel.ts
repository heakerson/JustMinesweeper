import { CellModel } from "../cell/CellModel";
import { BoardModel } from "../board/BoardModel";
import { GameStateManager } from "../Services/game-state.service";
import { CellService } from "../cell/cell.service";
import { GridService } from "./grid.service";

export class GridModel{

    //public CellArray : CellModel[][];

    public Board : BoardModel;
    public Rows : number = 0;
    public Columns : number = 0;
    public MinesLocated : number = 0;
    //
    public Flags : number = 0;

    constructor(rows : number, columns : number, board : BoardModel, private gameStateManager : GameStateManager, private cellService : CellService, private gridService : GridService){
        this.Board = board;
        this.Rows = rows;
        this.Columns = columns;
        this.gridService.InitCells(rows, columns);
    }
}