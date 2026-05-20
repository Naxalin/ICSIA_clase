# Gestor de Imágenes

Aplicación web con Next.js para gestión de imágenes con detección de contenido mediante IA (Groq).

## Tecnologías

- **Next.js 14** (App Router)
- **MongoDB Atlas** (base de datos)
- **Filebase / S3** (almacenamiento de imágenes)
- **Groq** (análisis de imágenes con LLaVA)

## Estructura de la base de datos

Colección `images` en MongoDB:

```json
{
  "_id": "ObjectId",
  "filename": "uuid.jpg",
  "url": "https://bucket.s3.filebase.com/uuid.jpg",
  "elements": ["cat", "chair", "window"],
  "createdAt": "ISODate"
}
```

## Configuración

1. Copia `.env.example` a `.env.local` y rellena los valores:

```bash
cp .env.example .env.local
```

### Variables de entorno necesarias

| Variable | Descripción |
|---|---|
| `MONGODB_URI` | Connection string de MongoDB Atlas |
| `MONGODB_DB` | Nombre de la base de datos (`image-manager`) |
| `GROQ_API_KEY` | API Key de Groq |
| `FILEBASE_ACCESS_KEY` | Access Key de Filebase |
| `FILEBASE_SECRET_KEY` | Secret Key de Filebase |
| `FILEBASE_BUCKET` | Nombre del bucket en Filebase |

### MongoDB Atlas

1. Crea una cuenta en [mongodb.com](https://www.mongodb.com)
2. Crea un cluster gratuito (M0)
3. Crea base de datos `image-manager` y colección `images`
4. Copia el connection string a `MONGODB_URI`
5. Permite acceso desde cualquier IP: `0.0.0.0/0`

### Filebase

1. Crea cuenta en [filebase.com](https://filebase.com)
2. Crea un bucket con acceso público
3. Ve a Access Keys y genera un par de claves
4. Copia `Access Key` y `Secret Key` al `.env.local`

### Groq

1. Crea cuenta en [console.groq.com](https://console.groq.com)
2. Genera una API Key
3. Cópiala a `GROQ_API_KEY`

## Instalación local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Despliegue en Vercel

1. Sube el proyecto a GitHub
2. Importa el repositorio en [vercel.com](https://vercel.com)
3. Añade las variables de entorno en el panel de Vercel
4. Despliega

## Funcionalidades

- ✅ Subida de imágenes renombradas con UUID
- ✅ Análisis automático del contenido con Groq (LLaVA)
- ✅ Guardado en MongoDB con elementos detectados
- ✅ Almacenamiento en Filebase/S3
- ✅ Visualización de imágenes con sus etiquetas
- ✅ Búsqueda por hasta 3 términos simultáneos
