import { GameStatus } from "../Services/Game State Service/GameStatus";
import { GameStateManager } from "../Services/Game State Service/game-state.service";

export interface IUpdateable {

    Reset():void;
    Start():void;
    Stop():void;
    Pause():void;
    Win():void;
    Lose():void;
    Warning():void;
}