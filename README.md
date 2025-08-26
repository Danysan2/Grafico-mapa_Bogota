📍 Mapa Interactivo de Bogotá con Apache ECharts

Este proyecto muestra cómo integrar un mapa interactivo de Bogotá segmentado por localidades utilizando Apache ECharts.
La idea es que cualquier persona o negocio pueda visualizar datos georreferenciados (ejemplo: ventas, métricas clave, registros, etc.) en un dashboard o sitio web.

🚀 Características

✅ Visualización de Bogotá por localidades.
✅ Personalización para mostrar datos como ventas, métricas o transacciones.
✅ Basado en HTML, CSS y JavaScript (fácil de integrar en cualquier proyecto web).
✅ Utiliza Apache ECharts, una librería potente, gratuita y open-source.
✅ Datos obtenidos de Datos Abiertos Bogotá.

🗂️ Estructura del Proyecto
/Grafico-mapa_Bogota
│── index.html      # Página principal con el gráfico
│── style.css       # Estilos básicos
│── script.js       # Lógica en JavaScript con ECharts
│── README.md       # Documentación del proyecto

⚙️ Instalación y Uso

1. Clonar el repositorio
git clone https://github.com/Danysan2/Grafico-mapa_Bogota.git
2. Abrir el archivo index.html en el navegado
No se necesita servidor, basta con abrir el archivo para visualizar el mapa.
3. Modificar los datos en script.js
Dentro del archivo puedes cambiar los valores de cada localidad para visualizar tus propias métricas.

📊 Ejemplo de uso

Imagina que tienes las ventas por localidad:
data: [
  { name: 'Chapinero', value: 1200 },
  { name: 'Suba', value: 3400 },
  { name: 'Usaquén', value: 2100 },
  { name: 'Bosa', value: 800 },
  
]

Esto se verá automáticamente reflejado en el mapa.

🌍 Fuente de datos
Los mapas de Bogotá se pueden descargar en diferentes formatos desde Datos Abiertos Bogotá:
🔗 Localidades de Bogotá D.C.

🛠️ Tecnologías utilizadas
Apache ECharts
HTML5
CSS3
JavaScript

🤝 Contribuciones
¡Las contribuciones son bienvenidas! Puedes hacer un fork del repositorio y enviar un pull request con mejoras, ejemplos o nuevas funcionalidades.
