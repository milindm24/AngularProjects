import { Component, OnInit } from '@angular/core';
import { GetQuestionsService } from '../shared/get-questions.service';
import { Router } from '@angular/router';
import { SaveScoreChoiceService } from '../shared/save-score-choice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})

export class HomeComponent implements OnInit  {

  constructor(private getQuestionsService: GetQuestionsService, private router: Router,
     private saveScoreService: SaveScoreChoiceService){

  }

  ngOnInit(){
    this.saveScoreService.score_choice=[];
  }

  onStartQuiz(){
    this.router.navigate(['question',1]);
  }

}
