import { TimerModel } from "../timer/TimerModel";
import { DifficultyType } from "../new-game/DifficultyType";

export class StatKeeper{

    public Won : number = 0;
    public Attempted : number = 0;
    public PercentWon : number = 0;
    public BestTime : number = 0;
    public SumWinTime : number = 0;
    public AverageWinTime : number = 0;

    constructor(public difficulty : DifficultyType){
        this.InitStats();
    }


    public InitStats(){
        this.Won = parseInt(localStorage.getItem(`${this.difficulty}Won`)) ? parseInt(localStorage.getItem(`${this.difficulty}Won`)) : 0;
        this.Attempted = parseInt(localStorage.getItem(`${this.difficulty}Attempted`)) ? parseInt(localStorage.getItem(`${this.difficulty}Attempted`)) : 0;
        this.PercentWon = parseFloat(localStorage.getItem(`${this.difficulty}PercentWon`)) ? parseFloat(localStorage.getItem(`${this.difficulty}PercentWon`)) : 0;
        this.BestTime = parseInt(localStorage.getItem(`${this.difficulty}BestTime`)) ? parseInt(localStorage.getItem(`${this.difficulty}BestTime`)) : 0;
        this.SumWinTime = parseInt(localStorage.getItem(`${this.difficulty}SumWinTime`)) ? parseInt(localStorage.getItem(`${this.difficulty}SumWinTime`)) : 0;
        this.AverageWinTime = parseInt(localStorage.getItem(`${this.difficulty}AverageWinTime`)) ? parseInt(localStorage.getItem(`${this.difficulty}AverageWinTime`)) : 0;
    }


    public SaveStats(){
        localStorage.setItem(`${this.difficulty}Won`, this.Won.toString());
        localStorage.setItem(`${this.difficulty}Attempted`, this.Attempted.toString());
        localStorage.setItem(`${this.difficulty}PercentWon`, this.PercentWon.toString());
        localStorage.setItem(`${this.difficulty}BestTime`, this.BestTime.toString());
        localStorage.setItem(`${this.difficulty}SumWinTime`, this.SumWinTime.toString());
        localStorage.setItem(`${this.difficulty}AverageWinTime`, this.AverageWinTime.toString());
    }


    public UpdateStats(timer : TimerModel, win : boolean){

        this.Attempted++;
        
        if(win){
            this.Won++;
            this.SumWinTime+= timer.Time;
            this.AverageWinTime = this.SumWinTime/this.Won;
        }

        if((timer.Time < this.BestTime || this.BestTime == 0) && win){
            this.BestTime = timer.Time;
        }

        this.PercentWon = this.Won/this.Attempted;

        this.SaveStats();
    }


    public ClearStats(){
        this.Won = 0;
        this.Attempted = 0;
        this.PercentWon = 0;
        this.BestTime = 0;
        this.SumWinTime = 0;
        this.AverageWinTime = 0;

        this.SaveStats();
    }
}