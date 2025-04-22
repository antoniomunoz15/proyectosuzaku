import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DescuentoService {
  private apiUrl = 'http://localhost:8000/api/descuentos/';

  constructor(private http: HttpClient) {}

  getDescuentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearDescuento(descuento: any): Observable<any> {
    return this.http.post(this.apiUrl, descuento);
  }

  actualizarDescuento(id: number, descuento: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, descuento);
  }

  eliminarDescuento(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}