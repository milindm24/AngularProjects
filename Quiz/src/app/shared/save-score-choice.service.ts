export class SaveScoreChoiceService {
    score_choice: {qno:number, score: number, choice: string}[]=[];

    saveScoreChoice(qno:number, score: number, choice: string){
        for (var i = 0 ; i<this.score_choice.length; i++){
        if (this.score_choice[i].qno === qno){
            this.score_choice.splice(i,1);
            break;
        }
        }
        this.score_choice.push({qno: qno, score: score, choice: choice});
    }

    getCurrentChoice(){
        return this.score_choice;
    }
}