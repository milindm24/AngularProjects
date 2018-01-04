import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.css']
})
export class WhiteComponent implements OnInit {

checked:boolean = false;
change_class : string ='';
@Input() rowposition: number;
@Input() colposition: number; 



  constructor() { 
    console.log(this.rowposition)
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
