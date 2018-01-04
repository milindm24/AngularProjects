import { Component, OnInit } from '@angular/core';
import { SaveScoreChoiceService } from '../shared/save-score-choice.service';

@Component({
  selector: 'app-save-score-choice',
  templateUrl: './save-score-choice.component.html',
  styleUrls: ['./save-score-choice.component.css']
})
export class SaveScoreChoiceComponent implements OnInit {

  totalScore: number = 0;
  percentScore : any ;
  constructor(private saveScoreChoiceService: SaveScoreChoiceService) { }

  ngOnInit() {
    for (var i=0; i<this.saveScoreChoiceService.score_choice.length; i++){
    this.totalScore = this.totalScore + this.saveScoreChoiceService.score_choice[i].score;
    }
    this.percentScore = (this.totalScore/30 * 100).toFixed(2);
  }

}
