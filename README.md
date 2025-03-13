# 📌 Portfolio de Pablo Orbea Benitez

Este es el repositorio del **portfolio personal** de Pablo Orbea Benitez, un sitio web desarrollado con **React.js** y **Material UI** para mostrar proyectos y experiencia en desarrollo web y diseño UI/UX.

---

## 🚀 Tecnologías Utilizadas

- **React.js** → Para la estructura del frontend.
- **Material UI** → Para los estilos y componentes.
- **CSS con Media Queries** → Para la responsividad.
- **JSON y JavaScript** → Para la carga dinámica de datos.

---

## 📂 Estructura del Proyecto

```

│── src/
    ├── componentes/ # Componentes usados para tener todo mas estructurado
    ├── css/        # Estilos CSS para cada sección
    ├── datos/      # Archivos JSON y JS con datos dinámicos
    ├── Utils.js      # Componente principal
    ├── App.js      # Componente principal
    └── index.js    # Punto de entrada de la app

```

---

## 🎨 Componentes Principales

### 1️⃣ **Navbar** (`src/components/Navbar.jsx`)
- Barra de navegación con enlaces a las secciones del portfolio.
- Implementado con **Material UI**.

### 2️⃣ **Proyectos** (`src/pages/Proyectos.jsx`)
- Renderiza una lista de proyectos desde un **JSON externo**.
- Usa `map()` para recorrer y mostrar cada proyecto dinámicamente.

### 3️⃣ **Contacto** (`src/pages/Contacto.jsx`)
- Muestra iconos de redes sociales con enlaces.
- Importa los datos de contacto desde `src/datos/contactos.js`.

---

## 📱 Responsividad y Media Queries

Se han implementado **Media Queries** en varios archivos para adaptar la web a distintos dispositivos.

Ejemplo:
```css
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }
}
```


## 📊 Carga de Datos desde JSON y JS

El portfolio usa **archivos JSON y JS** para obtener información dinámica:

### **Ejemplo: `src/datos/proyectos.json`**
```json
[
  {
    "id": 1,
    "nombre": "Proyecto 1",
    "descripcion": "Descripción del proyecto.",
    "link": "https://github.com/Pabloob/proyecto1"
  }
]
```

### **Cómo se lee en `Proyectos.jsx`**
```jsx
import proyectos from "../datos/proyectos.json";

function Proyectos() {
  return (
    <div>
      {proyectos.map(proyecto => (
        <div key={proyecto.id}>
          <h2>{proyecto.nombre}</h2>
          <p>{proyecto.descripcion}</p>
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
      ))}
    </div>
  );
}
```

También se utiliza un archivo `contactos.js` para manejar datos de contacto.

---

## 💻 Instalación y Uso

1️⃣ Clona este repositorio:
```sh
git clone https://github.com/Pabloob/Pabloob.github.io.git
```

2️⃣ Instala las dependencias:
```sh
cd porfolio
npm install
```

3️⃣ Inicia el servidor local:
```sh
npm start
```

---

## 📢 Despliegue en GitHub Pages

El proyecto se despliega automáticamente en **GitHub Pages**:

Puedes verlo en: **[https://Pabloob.github.io](https://Pabloob.github.io)**

---

## 📌 Autor
**Pablo Orbea Benitez** – [GitHub](https://github.com/Pabloob) | [LinkedIn](https://www.linkedin.com/in/pabloob5)

🚀 ¡Gracias por visitar mi portfolio! ✨
