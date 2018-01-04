import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GetQuestionsService } from './shared/get-questions.service';
import { HttpModule } from '@angular/http';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { RouterModule } from '@angular/router';
import { SaveScoreChoiceComponent } from './save-score-choice/save-score-choice.component';
import { SaveScoreChoiceService } from './shared/save-score-choice.service';
import { HomeComponent } from './home/home.component';
// import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'start-quiz', component: HomeComponent},
  {path: 'question/:qno', component: ViewQuestionComponent},
  {path: 'completed', component: SaveScoreChoiceComponent},
  {path: '**', redirectTo : ''}
];

@NgModule({
  declarations: [
    AppComponent,
    ViewQuestionComponent,
    SaveScoreChoiceComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetQuestionsService, SaveScoreChoiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
