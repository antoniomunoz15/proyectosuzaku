  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class PedidoService {
    private baseUrl = 'http://127.0.0.1:8000/api/pedidos/';
;

    constructor(private http: HttpClient) {}

    // Listar todos los pedidos de un usuario
    listarPedidosDelUsuario(usuarioId: number): Observable<any> {
      // Podrías tener un endpoint /api/pedidos/?usuario=usuarioId
      // o algo que devuelva solo los pedidos del user
      const url = `http://127.0.0.1:8000/api/mis-pedidos/?usuario=${usuarioId}`;
      return this.http.get(url);
    }

    getPedidos(): Observable<any> {
      return this.http.get<any>('http://127.0.0.1:8000/api/pedidos/');
    }

    actualizarEstado(id: number, estado: string): Observable<any> {
      return this.http.patch(`${this.baseUrl}${id}/`, { estado });
    }

    eliminarPedido(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/pedidos/${id}/`);
    }

  }
