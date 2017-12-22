import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from "../../app/clases/index";

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string;
  nombreItem:string = "";

  

  constructor() { }

  ngOnInit() { }

  agregar() {

    if(this.nombreItem.length == 0 ){
      return;
    }

  }
}
