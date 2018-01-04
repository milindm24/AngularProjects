import { Component, OnInit } from '@angular/core';
import { GetQuestionsService } from '../shared/get-questions.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SaveScoreChoiceService } from '../shared/save-score-choice.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css'],
  providers: []
})
export class ViewQuestionComponent implements OnInit {

  totalQuestions: number;
  questions: any = {}; 
  qno: number;
  current_choice: any[] = [];
  checked : boolean = false;
  current_qno ;
  new_choice; 
  timer: number = 120;
  secs: number;
  mins: number;
  mytimer: any;
  ret: boolean = false;
  count: number = 0;

  constructor(private getQuestionsService: GetQuestionsService,
     private route: ActivatedRoute,
     private saveScoreChoiceService: SaveScoreChoiceService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.qno  = params['qno'];
        this.getQuestionsService.getData().subscribe(
          (response: any[]) =>{
            this.totalQuestions = response.length;
            this.questions= response[this.qno-1];
            this.current_choice = this.saveScoreChoiceService.getCurrentChoice();
            for (var i=0; i<this.current_choice.length ; i++){
            if (this.current_choice[i].qno === this.questions.qno){ 
              this.current_qno = this.current_choice[i].qno;
              this.new_choice = this.current_choice[i].choice;
              break;
            }
            }
         }
        );
      }
    )
    this.onSetTimer();
    
  }

  onClickChoice(qno: number, choice: string, score: number[], index:number){
    this.saveScoreChoiceService.saveScoreChoice(qno,score[index],choice );
  }
    

  onSetTimer(){
    this.mytimer = setInterval(()=>{
      if (this.timer!==0){
        this.secs = this.timer % 60;
        this.mins= Math.floor(this.timer/60)
        this.timer = this.timer - 1;
      } else if (this.timer=== 0){
        this.secs = 0;
        this.mins=0;
        setTimeout(()=> {
          alert("Sorry your time is up!");
          this.router.navigate(['/completed']);
          clearInterval(this.mytimer)
        },500);
    }   
  },1000)
}

onClickLast() {
  if (this.questions.qno<=this.totalQuestions-1){
    // console.log(this.count);
    return ['/question',this.questions.qno+1];
  }else {
    return ['/completed'];
    // console.log(this.count)
  }
 // return ['/question',this.totalQuestions]
}

// [routerLink]="questions.qno<=totalQuestions-1 ? ['/question',questions.qno+1] : onClickLast()">
}
