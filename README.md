# 📌 Parcial Next.js - Aplicaciones Híbridas

Este proyecto es el desarrollo del parcial utilizando **Next.js** y **TailwindCSS**, cumpliendo con los requisitos de tener **3 módulos relacionados**, navegación entre páginas y uso de componentes.

---

## 🚀 Tecnologías usadas
- [Next.js 13+](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)

---

## 📂 Estructura del proyecto

```
app/
├─ page.tsx               → Página principal (Home)
├─ formulario/page.tsx    → Módulo 1: Formulario
├─ Contador/page.tsx       → Módulo 2: Contador de clics
├─ texto/page.tsx       → Módulo 3: Texto dinámico
components/
├─ Navbar.tsx             → Barra de navegación
public/
└─ ...                    → Archivos públicos
```

---

## 🧩 Descripción de los módulos

1. **Formulario**  
   - Contiene 3 campos (`nombre`, `email`, `mensaje`).  
   - Los datos se capturan con `useState`.  
   - Al enviar, se muestran en un `alert`.

2. **Contador**  
   - Un botón que aumenta el número de clics.  
   - Ejemplo sencillo de manejo de estado.

3. **Texto dinámico**  
   - Muestra un mensaje inicial.  
   - Al presionar un botón, el texto cambia.  

---

## 🎨 Características de diseño

- Estilos implementados con **TailwindCSS**.  
- Diseño **responsive** (se adapta a pantallas grandes y móviles).  
- Cohesión de colores con tonos **indigo** y **gris**.  
- Componentes reutilizables como `Navbar`.

---

## ▶️ Ejecución del proyecto

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
   cd my-parcial
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   👉 [http://localhost:3000](http://localhost:3000)

---

## ✨ Autores

* **Hans Stein Dussich Saza**
* **César Camilo Romero Cruz**

Parcial de Aplicaciones Híbridas - Jueves

