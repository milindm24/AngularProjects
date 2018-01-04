import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges,OnChanges } from '@angular/core';
import { InitialPosition } from '../initial-position.model';
import { Position } from '../position.model';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-initialise',
  templateUrl: './initialise.component.html',
  styleUrls: ['./initialise.component.css']
})
export class InitialiseComponent implements OnInit,DoCheck {

  @Output() pieceClicked = new EventEmitter<{rowposition:number,colposition: number, name: string, color: string, index: number}>();

// initial_positions: InitialPosition[] = [new InitialPosition()];
@Input() piece_positions: Position[];
emit: boolean = true;
@Input() checked:boolean;
@Input() change_class : string;
@Input('rows') rowposition: number;
@Input('columns') colposition: number; 
 current_selection: {row: number, column: number}[] = [{row: 9,column : 9}];
turn_count: number = 0;


  constructor() {
    
   }

  ngOnInit() {
  }

  ngDoCheck() {
     if (!this.checked){
      this.change_class = ""
     }
  }

  onClickPiece(row:number,col: number, name: string, color: string, count: number){
    // this.current_selection.push({row: 9, column: 9});
    // this.current_selection.push({row: row, column: col});
    //  if ((this.current_selection[1].row === row) && (this.current_selection[1].column === col))
    //  {
         
  //  }
    // this.current_selection.push({row: row, column: col});
    //  this.current_selection.length=0;
    //  this.current_selection.push({row: 9, column: 9});
    this.checked = !this.checked;
    if (this.checked && this.rowposition+1===row && this.colposition+1===col){
      this.change_class = "change_background";
      this.pieceClicked.emit({
        rowposition : row,
        colposition : col,
        name: name,
        color:color,
        index: count
      }); 
      this.turn_count++;
    } else {
      this.change_class = "";
    }    
    // console.log(this.current_selection[0].row +","+ this.current_selection[0].column);
  }





}
