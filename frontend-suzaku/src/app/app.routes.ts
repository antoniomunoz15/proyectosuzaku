// routes.ts
import { Routes, CanActivateFn, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { PerfilLayoutComponent } from './components/perfil-layout/perfil-layout.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MisPedidosComponent } from './components/mis-pedidos/mis-pedidos.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';
import { MetodosPagoComponent } from './components/metodos-pago/metodos-pago.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { inject } from '@angular/core';

const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.estaAutenticado()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'perfil',
    canActivate: [AuthGuard],
    component: PerfilLayoutComponent,
    children: [
      { path: '', component: PerfilComponent },             // Mi Perfil
      { path: 'mis-pedidos', component: MisPedidosComponent }, // Mis Pedidos
      { path: 'direcciones', component: DireccionesComponent }, // Direcciones
      { path: 'metodos-pago', component: MetodosPagoComponent },// Métodos de Pago
      { path: 'configuracion', component: ConfiguracionComponent }, // Preferencias
      { path: 'seguridad', component: SeguridadComponent },     // Seguridad
    ]
  },
];
