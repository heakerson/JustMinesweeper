export class CounterModel{
    public Count : number = 0;

    constructor(startingCount : number){
        this.Count = startingCount;
    }

    public Reset(initCount : number){
        this.Count = initCount;
    }

    public Decrement(){
        this.Count -= 1;
    }

    public Incrememnt(){
        this.Count += 1;
    }
}