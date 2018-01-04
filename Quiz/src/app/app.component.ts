import { Component } from '@angular/core';
import { GetQuestionsService } from './shared/get-questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private getQuestionsService: GetQuestionsService, private router: Router){

  }
}
