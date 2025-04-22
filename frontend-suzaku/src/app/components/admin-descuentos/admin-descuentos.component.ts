import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DescuentoService } from '../../services/descuento.service';

@Component({
  selector: 'app-admin-descuentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-descuentos.component.html',
  styleUrls: ['./admin-descuentos.component.css']
})
export class AdminDescuentosComponent implements OnInit {
  descuentos: any[] = [];
  nuevoDescuento = { codigo: '', porcentaje_descuento: 0 };
  editando: any = null;

  constructor(private descuentoService: DescuentoService) {}

  ngOnInit(): void {
    this.cargarDescuentos();
  }

  cargarDescuentos() {
    this.descuentoService.getDescuentos().subscribe(data => {
      console.log('📦 Descuentos recibidos:', data);  // 👈 aquí vemos si viene el porcentaje
      this.descuentos = data;
    });
  }

  guardarDescuento() {
    if (this.editando) {
      this.descuentoService.actualizarDescuento(this.editando.id, this.nuevoDescuento).subscribe(() => {
        this.cancelar();
        this.cargarDescuentos();
      });
    } else {
      this.descuentoService.crearDescuento(this.nuevoDescuento).subscribe(() => {
        this.nuevoDescuento = { codigo: '', porcentaje_descuento: 0 };
        this.cargarDescuentos();
      });
    }
  }

  editar(d: any) {
    this.editando = d;
    this.nuevoDescuento = { ...d };
  }

  cancelar() {
    this.editando = null;
    this.nuevoDescuento = { codigo: '', porcentaje_descuento: 0 };
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar este descuento?')) {
      this.descuentoService.eliminarDescuento(id).subscribe(() => this.cargarDescuentos());
    }
  }
} 