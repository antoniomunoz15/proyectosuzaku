# 🛍️ Proyecto Integrado: Tienda Virtual Suzaku

Este proyecto forma parte del módulo de Proyecto Integrado del ciclo de **Desarrollo de Aplicaciones Web (DAW)**. Se trata de una tienda online desarrollada con **Angular** (frontend) y **Django REST Framework** (backend), que permite a los usuarios registrarse, comprar productos, gestionar pedidos y administrarlos desde un panel privado.

---

## 🛠 Tecnologías Utilizadas

### 🔙 Backend (API REST)
- Python 3.x  
- Django 5.1  
- Django REST Framework  
- PostgreSQL (base de datos relacional)  
- CORS Headers (conexión segura con frontend)  
- Autenticación con Token  
- Sistema de usuarios personalizado (`AbstractBaseUser`)  
- Gestión de pedidos, productos, direcciones y descuentos  

### 🌐 Frontend
- Angular  
- SPA modular con rutas protegidas  
- Componentes reutilizables (carrito, perfil, checkout, etc.)  
- Consumo de API REST mediante `HttpClient`  
- Gestión de estado básico para el carrito de compras  
- Estilos personalizados con CSS  

---

## 🧩 Funcionalidades Implementadas

### 👤 Usuario
- Registro con foto, email, contraseña y dirección  
- Iniciar y cerrar sesión (token)  
- Edición de perfil y foto de perfil  
- Gestión de direcciones (crear, eliminar, activar)  
- Gestión de seguridad (cambio de contraseña)  

### 🛒 Carrito y Compras
- Añadir productos al carrito desde la vista principal  
- Visualizar y modificar cantidades en el carrito  
- Aplicar códigos de descuento  
- Seleccionar dirección de envío en checkout  
- Confirmación de pedido con resumen total y productos  

### 📦 Pedidos
- Visualización de pedidos anteriores en el perfil  
- Resumen del pedido con productos, descuentos y estado  
- Integración básica con vista de métodos de pago  

### 🛍️ Productos
- Filtro por nombre y precio  
- Visualización con imagen, descripción y precio  
- Sistema de stock por producto  
- CRUD de productos en panel de administrador (WIP)  

---

## 🚀 Próximas Mejoras
- Integración real de pagos con PayPal API  
- Panel de administración avanzado en Angular  
- Validación de stock en tiempo real  
- Sistema de reseñas y valoraciones  
- Despliegue en producción (Render/Vercel)  

---

## 🧑‍💻 Autor

**Nombre del autor:** Antonio Muñoz Reinoso  
**Centro educativo:** IES POLÍGONO SUR  
**Ciclo:** Desarrollo de Aplicaciones Web (DAW)  
**Curso:** 2024 - 2025  

---

## 📬 Contacto

- **Email:** soporte@suzakutienda.com  
- **Instagram:** [@suzaku_esports](https://www.instagram.com/suzaku_esports)  
- **Twitter:** [@SuzakuEsports](https://x.com/SuzakuEsports)
