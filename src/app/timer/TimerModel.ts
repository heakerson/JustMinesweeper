import { BoardModel } from "../board/BoardModel";

export class TimerModel{

    public Time : number = 0;
    private Started : boolean = false;

    constructor(public Board : BoardModel){
        setInterval(() => { 
            if(this.Started){
                this.Time++; 
                console.log("count");
            }
        }, 1000);
    }

    public Reset(){
        this.Started = false;
        this.Time = 0;
    }

    public Start(){
        this.Started = true;
    }

    public Stop(){
        this.Started = false;
    }
}