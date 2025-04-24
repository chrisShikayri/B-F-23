import { Component } from '@angular/core';
import { PedidoService } from '../../service/pedido.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrl: './lista-pedido.component.scss'
})
export class ListaPedidoComponent {
  mostrar_pedido: boolean = false;
  detalle_pedido: any;

  pedidos: any[] = [
    {
      id: 3,
      fecha: "2024-01-01",
      cliente: {
        nombre_completo: "Christopher D. Jimenez",
        dni: 123456789,
        telefono: 157554245
      },
      productos: [
        {
          id: 2,
          nombre: "Cerveza",
          cantidad: 2
        },
        {
          id: 5,
          cantidad: 1
        }
      ]
    },
    {
      id: 4,
      fecha: "2024-01-01",
      cliente: {
        nombre_completo: "Melarosano P. Pedromaster",
        dni: 123456789,
        telefono: 1245332578
      },
      productos: [
        {
          id: 6,
          nombre: "Cerveza",
          cantidad: 22
        },
        {
          id: 15,
          cantidad: 15
        }
      ]
    },
    {
      id: 1,
      fecha: "2024-01-01",
      cliente: {
        nombre_completo: "lufi D. Dregon",
        dni: 123456789,
        telefono: 157554245
      },
      productos: [
        {
          id: 6,
          nombre: "Cerveza",
          cantidad: 2
        },
        {
          id: 9,
          cantidad: 7
        }
      ]
    }
  ];

  constructor(private _pedidoService: PedidoService) {
    this.getPedidos();
  }
  async getPedidos() {
    this._pedidoService.funListar().subscribe(
      ((res: any) => {this.pedidos = res})
    )
  }

  showDialogPedido(pedido: any) {
    this.mostrar_pedido = true;
    this.detalle_pedido = pedido;
  }
}
