import { Position } from './position.model';

export class InitialPosition {

    public init_positions : Position[];

    constructor(){
     this.init_positions =  [
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
            new Position("../../assets/pieces/black_pawn.png",'pawn8','black',2,8),
            new Position("../../assets/pieces/white_rook.png",'rook_left','white',8,1),
            new Position("../../assets/pieces/white_knight.png",'knight_left','white',8,2),
           new Position("../../assets/pieces/white_bishop.png",'bishop_left','white',8,3),
           new Position("../../assets/pieces/white_king.png",'king','white',8,4),
           new Position("../../assets/pieces/white_queen.png",'queen','white',8,5),
           new Position("../../assets/pieces/white_bishop.png",'bishop_right','white',8,6),
           new Position("../../assets/pieces/white_knight.png",'knight_right','white',8,7),
           new Position("../../assets/pieces/white_rook.png",'rook_right','white',8,8),
           new Position("../../assets/pieces/white_pawn.png",'pawn1','white',7,1),
           new Position("../../assets/pieces/white_pawn.png",'pawn2','white',7,2),
           new Position("../../assets/pieces/white_pawn.png",'pawn3','white',7,3),
           new Position("../../assets/pieces/white_pawn.png",'pawn6','white',7,4),
           new Position("../../assets/pieces/white_pawn.png",'pawn4','white',7,5),
           new Position("../../assets/pieces/white_pawn.png",'pawn7','white',7,6),
           new Position("../../assets/pieces/white_pawn.png",'pawn5','white',7,7),
           new Position("../../assets/pieces/white_pawn.png",'pawn8','white',7,8)
        ];
    }
}