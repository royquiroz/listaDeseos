import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ListaItem } from '../../app/clases/lista-item';
import { ListaDeseosService } from './../../app/services/lista-deseos.sevice';


@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: any;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public _listaDeseos: ListaDeseosService
  ) {
    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");
    console.log(this.lista)
  }

  ngOnInit() {

  }

  actualizar(item:ListaItem) {
    item.completado = !item.completado;

    let todosMarcados = true;
    for(let item of this.lista.items) {
      if (!item.completado) {
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;
    this._listaDeseos.actualizarData();
  }

  borrarItem() {

    let confirm = this.alertCtrl.create({
      title: 'Borrar Lista',
      message: '¿Estas seguro de eliminar esta lista?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            //console.log('Click Eliminar');
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }

}
