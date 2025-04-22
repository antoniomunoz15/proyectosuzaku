import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarruselService {
  private apiUrl = 'http://localhost:8000/api/carrusel/';

  constructor(private http: HttpClient) {}

  getCarrusel(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearImagen(data: FormData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  actualizarImagen(id: number, data: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  eliminarImagen(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
