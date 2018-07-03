export enum DifficultyType {
    Easy = "Easy",
    Intermediate = "Intermediate",
    Expert = "Expert",
    Custom = "Custom"
  }

export class Difficulty {

    Type : DifficultyType;
    Rows : number;
    Columns : number;
    MineCount : number;

    constructor(difficultyType : DifficultyType, rows?:number, columns?:number, mineCount?:number){

        this.Type = difficultyType;

        switch(this.Type){
            case DifficultyType.Easy:
                this.Rows = 9;
                this.Columns = 9;
                this.MineCount = 10;
                break;
            case DifficultyType.Intermediate:
                this.Rows = 16;
                this.Columns = 16;
                this.MineCount = 40;
                break;
            case DifficultyType.Expert:
                this.Rows = 16;
                this.Columns = 30;
                break;
            case DifficultyType.Custom:
                this.Rows = rows;
                this.Columns = columns;
                this.MineCount = mineCount;
                break;
        }
    }
}