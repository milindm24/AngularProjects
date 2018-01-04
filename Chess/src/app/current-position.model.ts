export class CurrentPosition {

    public current_rowposition: number;
    public current_colposition: number;

    getCurrentRow(){
      return this.current_rowposition;
    }

    setCurrentRow(row: number){
      this.current_rowposition = row;
    }

    getCurrentColumn(){
      return this.current_colposition;
    }

    setCurrentColumn(col:number){
      this.current_colposition = col;
    }

    }