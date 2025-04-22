  // admin-pedidos.component.ts
  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { PedidoService } from '../../services/pedido.service';

  @Component({
    selector: 'app-admin-pedidos',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-pedidos.component.html',
    styleUrls: ['./admin-pedidos.component.css']
  })
  export class AdminPedidosComponent implements OnInit {
    pedidos: any[] = [];
    estados = ['pendiente', 'procesando', 'enviado', 'entregado', 'cancelado'];
    pedidoEditando: any = null;
    estadoSeleccionado: string = '';

    constructor(private pedidoService: PedidoService) {}

    ngOnInit(): void {
      this.cargarPedidos();
    }

    cargarPedidos() {
      this.pedidoService.getPedidos().subscribe((data: any) => {
        console.log('📦 Datos recibidos:', data);
        this.pedidos = Array.isArray(data) ? data : data.results || [];
      });
    }

    editarEstado(pedido: any) {
      this.pedidoEditando = pedido;
      this.estadoSeleccionado = pedido.estado;
    }

    guardarEstado() {
      if (!this.pedidoEditando) return;
    
      console.log('📤 Actualizando pedido:', this.pedidoEditando.id, 'con estado:', this.estadoSeleccionado);
    
      this.pedidoService.actualizarEstado(this.pedidoEditando.id, this.estadoSeleccionado)
        .subscribe({
          next: () => {
            this.pedidoEditando = null;
            this.estadoSeleccionado = '';
            this.cargarPedidos();
          },
          error: (err) => {
            console.error('❌ Error al actualizar el estado del pedido:', err);
            console.warn('💥 Contenido del error.error:', JSON.stringify(err.error, null, 2));
          }
        });
    }

    cancelarEdicion() {
      this.pedidoEditando = null;
      this.estadoSeleccionado = '';
    }

    eliminarPedido(id: number) {
      if (confirm('¿Seguro que deseas eliminar este pedido?')) {
        this.pedidoService.eliminarPedido(id).subscribe(() => this.cargarPedidos());
      }
    }

    getRutaFoto(foto: string): string {
      if (!foto) return 'assets/default-producto.jpg';
      return foto.startsWith('http') ? foto : `http://127.0.0.1:8000${foto}`;
    }
  }