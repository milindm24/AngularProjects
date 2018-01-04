import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-position',
  templateUrl: './track-position.component.html',
  styleUrls: ['./track-position.component.css']
})
export class TrackPositionComponent implements OnInit {


  valid_moves: {piece: string, rowposition: number, colposition: number}[] = []

  constructor() { }

  ngOnInit() {
  }

  checkValidMove(){
    
  }



}
