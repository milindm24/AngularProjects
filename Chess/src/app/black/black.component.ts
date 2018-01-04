import { Component, OnInit, Output, Input } from '@angular/core';
import { Position } from '../position.model';

@Component({
  selector: 'app-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.css']
})
export class BlackComponent implements OnInit {

  piece_positions : Position[] = [
      new Position("../../assets/pieces/black_rook.png",'rook_left','black',1,1),
      new Position("../../assets/pieces/black_knight.png",'knight_left','black',1,2),
      new Position("../../assets/pieces/black_bishop.png",'bishop_left','black',1,3),
      new Position("../../assets/pieces/black_king.png",'king','black',1,4),
      new Position("../../assets/pieces/black_queen.png",'queen','black',1,5),
      new Position("../../assets/pieces/black_bishop.png",'bishop_right','black',1,6),
      new Position("../../assets/pieces/black_knight.png",'knight_right','black',1,7),
      new Position("../../assets/pieces/black_rook.png",'rook_right','black',1,8),
      new Position("../../assets/pieces/black_pawn.png",'pawn1','black',2,1),
      new Position("../../assets/pieces/black_pawn.png",'pawn2','black',2,2),
      new Position("../../assets/pieces/black_pawn.png",'pawn3','black',2,3),
      new Position("../../assets/pieces/black_pawn.png",'pawn4','black',2,4),
      new Position("../../assets/pieces/black_pawn.png",'pawn5','black',2,5),
      new Position("../../assets/pieces/black_pawn.png",'pawn6','black',2,6),
      new Position("../../assets/pieces/black_pawn.png",'pawn7','black',2,7),
      new Position("../../assets/pieces/black_pawn.png",'pawn8','black',2,8)
  ];
  checked:boolean = false;
  change_class : string ='';


  @Input('rows') rowposition: number;
  @Input('columns') colposition: number; 


  constructor() {

   }

  ngOnInit() {

  }

  onClickPiece(){
    this.checked = !this.checked;
    if (this.checked == true){
      this.change_class = "change_background";
    } else {
      this.change_class = "";
    }
  }

}
