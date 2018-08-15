import { GameStatus } from "../Services/GameStatus";
import { GameStateManager } from "../Services/game-state.service";

export interface IUpdateable {

    Reset():void;
    Start():void;
    Stop():void;
    Pause():void;
    Win():void;
    Lose():void;
}