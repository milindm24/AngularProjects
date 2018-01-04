import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';
import { BlackPositionsComponent } from './black/black-positions/black-positions.component';
import { WhitePositionsComponent } from './white/white-positions/white-positions.component';
import { InitialiseComponent } from './initialise/initialise.component';
import { TrackPositionComponent } from './track-position/track-position.component';
import { ChangeBackgroundComponent } from './change-background/change-background.component';


@NgModule({
  declarations: [
    AppComponent,
    BlackComponent,
    WhiteComponent,
    BlackPositionsComponent,
    WhitePositionsComponent,
    InitialiseComponent,
    TrackPositionComponent,
    ChangeBackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
