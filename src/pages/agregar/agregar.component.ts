import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { ListaItem, Lista } from "../../app/clases/index";
import { ListaDeseosService } from "../../app/services/lista-deseos.sevice";

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];

  constructor(
    public alertCtrl:AlertController,
    public navCtrl:NavController,
    public _listaDeseos:ListaDeseosService
  ) { }

  ngOnInit() { }

  agregarItem() {

    if(this.nombreItem.length == 0 ){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = "";

  }

  borrarItem(index:number) {

    this.items.splice(index, 1)

  }

  agregarLista() {

    if(this.nombreLista.length == 0 ){
      let alert = this.alertCtrl.create({
        title: 'Nombre de Lista',
        subTitle: 'El nombre de la lista no puede estar vacio',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista = new Lista( this.nombreLista );
    lista.items = this.items;

    //this._listaDeseos.listas.push( lista );
    this._listaDeseos.agregarLista( lista );
    this.navCtrl.pop();

  }

}
