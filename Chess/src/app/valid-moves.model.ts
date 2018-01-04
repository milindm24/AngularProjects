export class ValidMoves{
    
    public valid: boolean;

    onCheckValidity(piece: string, color:string, rowpos: number, colpos: number){
        if (piece.includes("pawns") && color==="black"){
            if(rowpos === (rowpos+1) && (colpos==colpos))
                return this.valid = true;
                else 
                return this.valid = false;
        }
    }
}