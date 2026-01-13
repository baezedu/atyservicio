# atyservicio

Plantilla mínima creada para el sitio `atyservicio`.

## Dominio
Este proyecto está configurado para el dominio: `https://atyservicio.com`

## Archivos
- `index.html` — página de entrada
- `src/styles.css` — estilos
- `src/main.js` — script mínimo
- `CNAME` — contiene el dominio para despliegue en GitHub Pages

## Ejecutar localmente (PowerShell)
Opciones:

1) Abrir `index.html` directamente en el navegador (arrastrar/abrir archivo).

2) Usar `live-server` vía `npx` (sin instalar globalmente):

```powershell
npx live-server --port=3000 --open=./index.html
```

3) Si prefieres usar el script npm:

```powershell
cd .\atyservicio
npm install
npm start
```

(El `package.json` incluye un script `start` que usa `npx live-server`.)

## Siguientes pasos sugeridos
- Personalizar contenido y estilos
- Añadir bundler (Vite, webpack) si necesitas módulos/asset pipeline
- Inicializar `git` y crear el primer commit
