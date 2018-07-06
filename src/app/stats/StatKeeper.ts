import { TimerModel } from "../timer/TimerModel";

export class StatKeeper{

    public Won : number = 0;
    public Attempted : number = 0;
    public PercentWon : number = 0;
    public BestTime : number = 0;
    public SumWinTime : number = 0;
    public AverageWinTime : number = this.Attempted == 0 ? 0 : this.SumWinTime/this.Attempted;

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
    }
}