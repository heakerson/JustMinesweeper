import { GridModel } from "../grid/GridModel";

export class CellModel{
    public IsSelected : boolean = false;
    public IsMine : boolean = false;
    public Row : number = -1;
    public Column : number = -1;
    public Count : number = 0;
    public Contents : string = " ";

    private AdjacentCells : CellModel[];
    private Grid : GridModel;

    constructor(grid : GridModel, row : number, column : number){
        this.Grid = grid;
        this.Row = row;
        this.Column = column;
    }

    public ClickCell(){

        if(this.Grid.MineCount == 0){
            this.Grid.GenerateMines(this.Grid.Board.Difficulty.MineCount, this.Row, this.Column);
        }

        this.IsSelected = true;
        this.Count = this.Grid.GetAdjacentMineCount(this.Row, this.Column);

        if(this.IsMine){
            this.Contents = "X"
        }
        else if(this.Count != 0){
            this.Contents = this.Count.toString();
        }
    }
}