export class Position {
  public piece: string;
  public name: string;
  public color: string;
  public rowposition: number;
  public colposition:number;

    constructor(  piece: string, name:string, color: string, rowposition: number, colposition:number){
      this.piece = piece;
      this.name = name;
      this.color = color;
      this.rowposition = rowposition;
      this.colposition = colposition;
    }
  }