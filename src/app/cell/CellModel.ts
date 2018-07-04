import { GridModel } from "../grid/GridModel";
import { GameStatus } from "../board/GameStatus";

export class CellModel{

    public IsSelected : boolean = false;
    public IsMine : boolean = false;
    public IsFlagged : boolean = false;
    public IsInitialCell : boolean = false;
    public Row : number = -1;
    public Column : number = -1;
    public Count : number = 0;
    public Contents : string = "-";
    public AdjancentCellLocations : number[][] = [];
    public AdjacentCells : CellModel[] = [];
    private Grid : GridModel;

    constructor(grid : GridModel, row : number, column : number){
        this.Grid = grid;
        this.Row = row;
        this.Column = column;

        this.InitAdjacentCellLocations();
    }

    private InitAdjacentCellLocations(){

        let InitAdjancentCellLocations : number[][] = [
            [this.Row-1, this.Column-1],
            [this.Row-1, this.Column],
            [this.Row-1, this.Column+1],
            [this.Row, this.Column-1],
            [this.Row, this.Column+1],
            [this.Row+1, this.Column-1],
            [this.Row+1, this.Column],
            [this.Row+1, this.Column+1],
        ]

        for(let location of InitAdjancentCellLocations){
            let row : number = location[0];
            let column : number = location[1];

            if(this.Grid.IsValidCellLocation(row, column)){
                this.AdjancentCellLocations.push(location)
            }
        }
    }

    public ClickCell(){

        if(this.IsClickable()){
            this.IsSelected = true;
            
            if(this.Grid.Board.GameStatus == GameStatus.Reset){
                this.Grid.GenerateMines(this.Grid.Board.Difficulty.MineCount, this.Row, this.Column);
                this.Grid.MinesGenerated = true;
                this.IsInitialCell = true;
                this.Grid.Board.Start();
            }

            this.Count = this.GetAdjacentMineCount();
            
            if(this.IsMine){
                this.Grid.Board.Lose();
            }
            else{
    
                this.Contents = this.Count.toString();
    
                if(this.Count == 0){
    
                    for(let cell of this.AdjacentCells){
                        if(!cell.IsMine && !cell.IsSelected){
                            cell.ClickCell();
                        }
                    }
                }
            }
        }
    }

    public IsClickable() : boolean{
        return !this.IsSelected && 
                !this.IsFlagged &&
                (this.Grid.Board.GameStatus == GameStatus.Reset || this.Grid.Board.GameStatus == GameStatus.Started)
    }

    public RightClickCell(){

        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        }, false);

        if(!this.IsSelected){
            this.IsFlagged = !this.IsFlagged;
            this.Grid.UpdateLocatedMines(this);
        }
    }

    public GetAdjacentCells() : CellModel[]{
        let adjCells : CellModel[] = [];
        
        for(let location of this.AdjancentCellLocations){
            let cell : CellModel = this.Grid.GetCell(location[0], location[1]);
            this.AdjacentCells.push(cell);
        }

        return this.AdjacentCells;
    }

    public GetAdjacentMineCount() : number{

        let count : number = 0;
        let adjCells : CellModel[] = this.GetAdjacentCells();
        
        for(let cell of adjCells){
            if(cell.IsMine){
                count++;
            }
        }

        return count;
    }
}