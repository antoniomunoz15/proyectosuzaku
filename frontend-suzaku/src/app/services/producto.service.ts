import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos/';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error en la API:', error);
        return of([]);
      })
    );
  }

  getProducto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }

  crearProducto(producto: FormData): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }
  
  actualizarProducto(id: number, producto: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`).pipe(
      catchError((error) => {
        console.error('Error al eliminar el producto:', error);
        return of(null);
      })
    );
  }
}