import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';


@Injectable({
 providedIn: 'root'
})
export class ProductoService {
 private apiUrl = 'http://127.0.0.1:8000/api/productos/'; // 👈 Ajusta la URL si es diferente


 constructor(private http: HttpClient) {}


 getProductos(): Observable<any[]> {
   console.log('Llamando a la API:', this.apiUrl);
   return this.http.get<any[]>(this.apiUrl).pipe(
     catchError((error) => {
       console.error('Error en la API:', error);
       alert('Error al cargar los productos. Revisa la consola.');
       return of([]); // Devuelve un array vacío en caso de error
     })
   );
 }
 }



