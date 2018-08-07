import { GameStatus } from "../board/GameStatus";
import { GameStateService } from "../Services/game-state.service";

export interface IUpdateable {
    
    gameStateService : GameStateService;

    Reset():void;
    Start():void;
    Stop():void;
    Pause():void;
    Win():void;
    Lose():void;
}