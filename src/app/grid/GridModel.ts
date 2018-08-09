import { CellModel } from "../cell/CellModel";
import { BoardModel } from "../board/BoardModel";
import { GameStateManager } from "../Services/game-state.service";
import { CellService } from "../cell/cell.service";

export class GridModel{

    public CellArray : CellModel[][];
    public MineCount : number = 0;
    public Board : BoardModel;
    public Rows : number = 0;
    public Columns : number = 0;
    public MinesLocated : number = 0;
    public MineCells : CellModel[];
    public Flags : number = 0;

    constructor(rows : number, columns : number, board : BoardModel, private gameStateManager : GameStateManager, private cellService : CellService){
        this.Board = board;
        this.Rows = rows;
        this.Columns = columns;
        this.InitCells(rows, columns);
    }

    InitCells(rows : number, columns : number){

        this.CellArray = [];

        for(let i = 0; i < rows; i++){

            let row : CellModel[] = [];

            for(let j = 0; j < columns; j++){
                let cell : CellModel = new CellModel(this, i, j, this.gameStateManager, this.cellService);
                row.push(cell);
            }

            this.CellArray.push(row);
        }
    }

    public GenerateMines(mineCount : number, avoidRow : number, avoidColumn : number){

        this.MineCount = mineCount;
        let counter : number = 0;
        this.MineCells = [];
        
        while(counter < this.MineCount){

            let rowIndex : number = Math.floor((Math.random() * this.Rows));
            let columnIndex : number = Math.floor((Math.random() * this.Columns));

            if(this.IsValidMineLocation(rowIndex, columnIndex, avoidRow, avoidColumn)){
                let cell : CellModel = this.GetCell(rowIndex, columnIndex);
                cell.IsMine = true;
                counter++;
                this.MineCells.push(cell);
            }
        }
    }

    private IsValidMineLocation(rowIndex: number, columnIndex : number, avoidRow : number, avoidColumn : number) : boolean {
        
        if(rowIndex == avoidRow && columnIndex == avoidColumn){
            return false;
        }

        let cell : CellModel = this.GetCell(rowIndex, columnIndex);
        if(cell.IsMine){
            return false;
        }

        return true;
    }

    public IsValidCellLocation(rowIndex: number, columnIndex: number) : boolean{
        
        if(rowIndex < 0 || columnIndex < 0){
            return false;
        }
        else if(rowIndex > (this.Rows-1)){
            return false;
        }
        else if(columnIndex > (this.Columns-1)){
            return false;
        }

        return true;
    }

    public GetCell(rowIndex: number, columnIndex : number) : CellModel{
        let row = this.CellArray[rowIndex];
        let cell : CellModel = row[columnIndex];
        return cell;
    }

    // public UpdateLocatedMines(flaggedCell : CellModel){
    //     this.Board.UpdateLocatedMines(flaggedCell);
    // }

    public Reset(){
        // for(let row of this.CellArray){
        //     for(let cell of row){
        //         this.cellService.Reset(cell);
        //     }
        // }
    }

    public RevealMines(){

        for(let cell of this.MineCells){
            this.cellService.RevealMineStatus(cell);
        }

        for(let cell of this.gameStateManager.FlaggedCells){
            if(!cell.IsMine){
                this.cellService.RevealMineStatus(cell);
            }
        }
    }

    public Pause(){    
        for(let row of this.CellArray){
            for(let cell of row){
                this.cellService.Pause(cell);
            }
        }
    }
}