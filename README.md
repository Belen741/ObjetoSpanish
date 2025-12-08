# Spanish Objects Mastery

Una aplicación educativa para aprender y practicar los pronombres de objeto directo e indirecto en español.

## Características

- **Test Diagnóstico**: Evalúa tu nivel actual y recibe recomendaciones personalizadas
- **5 Categorías de Ejercicios**:
  - Objeto Directo
  - Objeto Indirecto
  - Objetos Combinados
  - Objetos Combinados con "se"
  - Tiempos Verbales
- **3 Páginas por Categoría**: 30 ejercicios por categoría (150 total)
- **Autoevaluación**: Los ejercicios de escritura usan un modelo de autoevaluación
- **Clases Avanzadas**: Información sobre clases 1:1 con Belén Martínez

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Wouter (routing)
- Radix UI (componentes)

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Despliegue en Vercel

### Opción 1: Desde GitHub

1. Sube el proyecto a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Haz clic en "Add New" → "Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente la configuración de `vercel.json`
6. Haz clic en "Deploy"

### Opción 2: Usando Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Dominio Personalizado

1. En el dashboard de Vercel, ve a tu proyecto
2. Haz clic en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones de Vercel

## Estructura del Proyecto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes UI
│   │   ├── data/          # Datos de ejercicios
│   │   ├── pages/         # Páginas de la aplicación
│   │   └── lib/           # Utilidades
│   └── index.html
├── attached_assets/        # Imágenes y recursos
├── vercel.json            # Configuración de Vercel
└── vite.config.ts         # Configuración de Vite
```

## Licencia

MIT
