import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public Count : number = 0;

  constructor(){}

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
