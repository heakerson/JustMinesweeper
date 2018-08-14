import { GridService } from "./grid.service";

export class GridModel{

    public Rows : number = 0;
    public Columns : number = 0;
    public MinesLocated : number = 0;
    public Flags : number = 0;

    constructor(rows : number, columns : number, private gridService : GridService){
        this.Rows = rows;
        this.Columns = columns;
        this.gridService.InitCells();
    }
}