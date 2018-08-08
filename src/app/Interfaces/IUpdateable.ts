import { GameStatus } from "../board/GameStatus";
import { GameStateManager } from "../Services/game-state.service";

export interface IUpdateable {

    gameStateManager : GameStateManager;

    Reset():void;
    Start():void;
    Stop():void;
    Pause():void;
    Win():void;
    Lose():void;
}