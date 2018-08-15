import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public Time : number = 0;
  public Started : boolean = false;

  constructor(){
      setInterval(() => { 
          if(this.Started){
              this.Time++; 
          }
      }, 1000);
  }

  public Reset(){
      this.Stop();
      this.Time = 0;
  }

  public Start(){
      this.Started = true;
  }

  public Stop(){
      this.Started = false;
  }
}
