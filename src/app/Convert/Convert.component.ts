import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Convert',
  templateUrl: './Convert.component.html',
  styleUrls: ['./Convert.component.css']
})
export class ConvertComponent implements OnInit {

    valor: number;
    valor2: string;
    valor8: string;
    valor10: string;
    valor16: string;

  constructor() { }
  ngOnInit() {
  }

  calcular(){
    console.log(this.valor);
    this.valor2 = (this.valor >>> 0).toString(2);
    this.valor8 = (this.valor >>> 0).toString(8);
    this.valor10 = (this.valor >>> 0).toString(10);
    this.valor16 = (this.valor >>> 0).toString(16);
    console.log(this.valor2);
    console.log(this.valor8);
    console.log(this.valor10);
    console.log(this.valor16);
  }


}
