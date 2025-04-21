import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrl: './lista-pedido.component.scss'
})
export class ListaPedidoComponent {
  mostrar_pedido:boolean=false
detalle_pedido: any


  pedidos: any[] = [{
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
        cantidad: 2,
      },
      {
        id: 5,
        cantidad: 1,
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
        cantidad: 22,
      },
      {
        id: 15,
        cantidad: 15,
      }
    ]
  }];

  

  
  getPedidos() {
  }

  showDialogPedido(pedido: any){
    this.mostrar_pedido=true
    this.detalle_pedido=pedido
  }
  

}
