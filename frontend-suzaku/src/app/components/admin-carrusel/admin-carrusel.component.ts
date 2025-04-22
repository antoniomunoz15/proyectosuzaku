import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarruselService } from '../../services/carrusel.service';

@Component({
  selector: 'app-admin-carrusel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-carrusel.component.html',
  styleUrls: ['./admin-carrusel.component.css']
})
export class AdminCarruselComponent implements OnInit {
  imagenes: any[] = [];
  nuevaImagen = { titulo: '', activo: true };
  imagenSeleccionada: File | null = null;
  editando: any = null;

  constructor(private carruselService: CarruselService) {}

  ngOnInit(): void {
    this.cargarImagenes();
  }

  cargarImagenes() {
    this.carruselService.getCarrusel().subscribe(data => this.imagenes = data);
  }

  seleccionarImagen(event: any) {
    this.imagenSeleccionada = event.target.files[0];
  }

  guardarImagen() {
    const formData = new FormData();
    formData.append('titulo', this.nuevaImagen.titulo);
    formData.append('activo', String(this.nuevaImagen.activo));
    if (this.imagenSeleccionada) {
      formData.append('imagen', this.imagenSeleccionada);
    }

    if (this.editando) {
      this.carruselService.actualizarImagen(this.editando.id, formData).subscribe(() => {
        this.cancelar();
        this.cargarImagenes();
      });
    } else {
      this.carruselService.crearImagen(formData).subscribe(() => {
        this.cancelar();
        this.cargarImagenes();
      });
    }
  }

  editar(imagen: any) {
    this.editando = imagen;
    this.nuevaImagen = { titulo: imagen.titulo, activo: imagen.activo };
  }

  cancelar() {
    this.editando = null;
    this.imagenSeleccionada = null;
    this.nuevaImagen = { titulo: '', activo: true };
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar esta imagen del carrusel?')) {
      this.carruselService.eliminarImagen(id).subscribe(() => this.cargarImagenes());
    }
  }

  getRutaImagen(imagen: string): string {
    return imagen?.startsWith('http') ? imagen : `http://127.0.0.1:8000${imagen}`;
  }
}
