import { CellModel } from "../cell/CellModel";
import { BoardModel } from "../board/BoardModel";

export class GridModel{

    public CellArray : CellModel[][];
    public MineCount : number = 0;
    public Board : BoardModel;
    public Rows : number = 0;
    public Columns : number = 0;

    constructor(rows : number, columns : number, board : BoardModel){
        this.InitCells(rows, columns);
        this.Board = board;
        this.Rows = rows;
        this.Columns = columns;
    }

    InitCells(rows : number, columns : number){

        this.CellArray = [];

        for(let i = 0; i < rows; i++){

            let row : CellModel[] = [];

            for(let j = 0; j < columns; j++){
                let cell : CellModel = new CellModel(this, i, j);
                row.push(cell);
            }

            this.CellArray.push(row);
        }
    }

    public GenerateMines(mineCount : number, avoidRow : number, avoidColumn : number){

        this.MineCount = mineCount;
            //console.log("mine count: " + mineCount);

        let counter : number = 0;

        while(counter < this.MineCount){

            let rowIndex : number = Math.floor((Math.random() * this.Rows) + 1);
            let columnIndex : number = Math.floor((Math.random() * this.Columns) + 1);
            //console.log("generated row: " + rowIndex + " generated column: " + columnIndex);

            if(this.IsValidMineLocation(rowIndex, columnIndex, avoidRow, avoidColumn)){
                let cell : CellModel = this.GetCell(rowIndex, columnIndex);
                cell.IsMine = true;
                counter++;
                    //console.log("counter: " + counter);
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

    public GetCell(rowIndex: number, columnIndex : number) : CellModel{
        let row = this.CellArray[rowIndex-1];
        let cell : CellModel = row[columnIndex-1];
        return cell;
    }

    public GetAdjacentMineCount(rowIndex : number, columnIndex : number) : number {
        return 3;
    }
}