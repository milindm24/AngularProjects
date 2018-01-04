import { Component, Output, EventEmitter } from '@angular/core';
import {InitialPosition} from './initial-position.model';
import {Position} from './position.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  row: number[] = [1,2,3,4,5,6,7,8];
  column: number[] = [1,2,3,4,5,6,7,8];

  initial_positions: InitialPosition[] = [new InitialPosition()];
  piece_positions: Position[] = this.initial_positions[0].init_positions;
  piece_count: number=0;
  current_row : number;
  current_column:  number;
  current_index: number;
  change_class: string ='';
  check: boolean = true;
  i: number =0;
  validity: boolean;
  valid: boolean;
  count: number;
  // @Output() click_change = new EventEmitter<{change_class: string}>();

  onClickPiece(piece_position: {piece_rowposition:number, piece_colposition: number,
    piece_name: string, piece_color: string, index: number}){
    this.current_index = piece_position.index;
    this.current_column = piece_position.piece_colposition;
    this.current_row = piece_position.piece_rowposition;
    this.piece_count=0;
    this.piece_count++;
    this.change_class="";
    //  console.log(piece_position.index+','+piece_position.piece_colposition+','
    //  +piece_position.piece_rowposition + ','+ this.piece_count)
} 


  onClickBox(piece_rowposition:number, piece_colposition: number){
    
    // if (this.piece_count==2){
    //  this.validity = this.onCheckValidity(this.piece_positions[this.current_index].name,
    //   this.piece_positions[this.current_index].color,
    //   this.piece_positions[this.current_index].rowposition,
    //   this.piece_positions[this.current_index].colposition,
    //   piece_rowposition,
    //   piece_colposition)

    //   if (this.validity){
      while(this.i<this.piece_positions.length){
      if(this.piece_positions[this.i].rowposition === piece_rowposition+1 &&
        this.piece_positions[this.i].colposition === piece_colposition+1 && this.current_index !=this.i){
        // console.log("i" + this.piece_positions[this.i].rowposition +','+ this.piece_positions[this.i].colposition );
         this.piece_positions[this.i].rowposition = 99;
         this.piece_positions[this.i].colposition = 99;
        }
        this.i++;
    }

    this.i=0;
    this.piece_positions[this.current_index].rowposition = piece_rowposition+1;
    this.piece_positions[this.current_index].colposition = piece_colposition+1; 
    this.check = !this.check;
  // }
  // }
  //   this.i=0;
  //   this.piece_count++;
  //   this.check = !this.check;   
     
    // console.log(this.piece_positions[this.current_index].rowposition 
    //   +','+ this.piece_positions[this.current_index].colposition + "index" + this.current_index);
    //   console.log(this.piece_positions);
    //  console.log(this.validity);
    }

    onClickRestart(){
      this.piece_positions.length = 0;
      this.initial_positions = [new InitialPosition()];
      this.piece_positions = this.initial_positions[0].init_positions;
      // console.log("on Click restart called");
    }

  //   onCheckValidity(piece: string, color:string,ori_rowpos: number, ori_colpos: number, rowpos: number, colpos: number){
  //     //console.log(piece + ',' + color + ',' + (rowpos+1) + ',' + (colpos+1) + ',' + ori_rowpos + ',' + ori_colpos);
  //     rowpos = rowpos+1;
  //     colpos = colpos+1;
  //     if (piece.includes("pawn") && color==="black"){
  //         if(rowpos === (ori_rowpos+1) && (colpos==ori_colpos))
  //             return true;
  //             else 
  //             return false;
  //     } else  if (piece.includes("pawn") && color==="white"){
  //       if(rowpos === (ori_rowpos-1) && (colpos==ori_colpos))
  //             return true;
  //             else 
  //             return false;
  //     } else if ((piece==="bishop") && color==="white"){
  //       this.count=0;
  //       while(this.count<this.piece_positions.length){
  //         if ((ori_rowpos+1 === this.piece_positions[this.count].rowposition 
  //           && ori_colpos+1 ===  this.piece_positions[this.count].colposition) && 
  //           (ori_rowpos-1 === this.piece_positions[this.count].rowposition 
  //             && ori_colpos-1 ===  this.piece_positions[this.count].colposition) &&
  //             (ori_rowpos === this.piece_positions[this.count].rowposition 
  //               && ori_colpos-1 ===  this.piece_positions[this.count].colposition) &&
  //               (ori_rowpos === this.piece_positions[this.count].rowposition 
  //                 && ori_colpos-1 ===  this.piece_positions[this.count].colposition)
  //           ){

  //         }
  //       }
  //       return true;
  //     }
      
  // }

  }

