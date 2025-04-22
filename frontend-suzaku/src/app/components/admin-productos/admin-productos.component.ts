import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit {
  productos: any[] = [];
  nuevoProducto: any = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,         // 👈 asegurarte de incluir esto
    foto: null        // 👈 si no vas a subir imagen, puedes dejarlo null
  };

  imagenSeleccionada: File | null = null;

  editandoProducto: any = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  seleccionarImagen(event: any) {
    this.imagenSeleccionada = event.target.files[0];
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(data => this.productos = data);
  }

  guardarProducto() {
    const formData = new FormData();
    formData.append('nombre', this.nuevoProducto.nombre);
    formData.append('descripcion', this.nuevoProducto.descripcion);
    formData.append('precio', this.nuevoProducto.precio);
    formData.append('stock', this.nuevoProducto.stock);
  
    if (this.imagenSeleccionada) {
      formData.append('foto', this.imagenSeleccionada);
    }
  
    if (this.editandoProducto) {
      this.productoService.actualizarProducto(this.editandoProducto.id, formData).subscribe(() => {
        this.cancelarEdicion();
        this.cargarProductos();
      });
    } else {
      this.productoService.crearProducto(formData).subscribe(() => {
        this.nuevoProducto = { nombre: '', descripcion: '', precio: 0, stock: 0 };
        this.imagenSeleccionada = null;
        this.cargarProductos();
      });
    }
  }

  
  editarProducto(producto: any) {
    this.editandoProducto = producto;
    this.nuevoProducto = { ...producto };
  }

  cancelarEdicion() {
    this.editandoProducto = null;
    this.nuevoProducto = { nombre: '', descripcion: '', precio: 0 };
  }

  eliminarProducto(id: number) {
    if (confirm('¿Seguro que quieres eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe(() => this.cargarProductos());
    }
  }

  getRutaFoto(foto: string): string {
    if (!foto) return 'assets/default-producto.jpg'; // imagen por defecto si no hay foto
    return foto.startsWith('http') ? foto : `http://127.0.0.1:8000${foto}`;
  }
}