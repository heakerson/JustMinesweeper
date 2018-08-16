export class SmileyModel {
    public Icon : SmileyIcon = SmileyIcon.Smile;
    public Message : string = "LET'S PLAY!"
    public SmileyIconClasses : string = 'fas fa-smile';

    public PreviousMessage : string = "";
    public PreviousIcon : SmileyIcon = SmileyIcon.Smile;

    constructor(state : SmileyIcon, message : string){
        this.Icon = state;
        this.Message = message;
    }
}

export enum SmileyIcon{
    Smile = 'fas fa-smile',
    Upset = 'fas fa-dizzy',
    Blank = 'fas fa-meh-blank',
    Joyful = 'fas fa-laugh-beam',
    Wink = 'fas fa-grin-tongue-wink',
    Surprise = 'fas fa-surprise'
}