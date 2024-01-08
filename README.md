QuioscoApp

QuioscoApp es una aplicación de quiosco virtual construida con Next.js y Prisma para la gestión de productos y pedidos de una cafetería. Permite a los usuarios explorar categorías de productos, personalizar sus pedidos y revisar el resumen antes de confirmar la compra.
Configuración
Requisitos Previos

Asegúrate de tener Node.js instalado en tu sistema.

## Instalación

1. Clona este repositorio:
git clone https://github.com/tuusuario/quioscoapp.git

2. Entra en el directorio del proyecto:
cd quioscoapp

3. Instala las dependencias:
npm install

4. Configura la base de datos:
npx prisma migrate dev

5. Ejecuta las semillas para poblar la base de datos:
npm run prisma:seed

6. Iniciar el Servidor de Desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev

Abre http://localhost:3000 en tu navegador para ver el resultado. La página se actualizará automáticamente mientras editas los archivos.

Este proyecto utiliza next/font para optimizar y cargar automáticamente la fuente Inter, una fuente personalizada de Google.

## Scripts Disponibles
    npm run dev: Inicia el servidor de desarrollo Next.js.
    npm run build: Construye la aplicación para producción.
    npm start: Inicia la aplicación en modo de producción.
    npm run lint: Ejecuta el linter para mantener el código limpio.

Tecnologías Utilizadas
    Next.js
    Prisma
    React
    React Modal
    React Toastify
    Axios
    Tailwind CSS
    TypeScript
    Swr

Estructura del Proyecto
    /pages: Contiene las páginas principales de Next.js.
    /components: Componentes React reutilizables.
    /context: Contexto de la aplicación.
    /hooks: Ganchos personalizados utilizados en la aplicación.
    /layout: Diseño principal de la aplicación.
    /prisma: Archivos relacionados con la configuración de Prisma y las semillas.

Contribución:
Contribuciones son bienvenidas! Abre un issue o envía un pull request para discutir y mejorar la aplicación.

## Comandos de Prisma

    1. `npx prisma migrate dev`
    Este comando ejecuta las migraciones de la base de datos en modo de desarrollo. Las migraciones describen los cambios en la estructura de la base de datos a lo largo del tiempo.

    1.5 `npx prisma migrate deploy` 
    Este proceso de migración asegurará que los cambios en tu modelo de datos se reflejen en la base de datos.

    2. `npx prisma db seed`
    Utiliza este comando para ejecutar scripts de semillas que llenan la base de datos con datos iniciales. Los scripts de semillas son útiles para poblar la base de datos con datos de prueba o valores predeterminados.

    3. `npx prisma generate`
    Genera archivos TypeScript basados en tu modelo de datos definido en el esquema Prisma. Estos archivos facilitan el acceso a la base de datos desde tu aplicación TypeScript.

    4. `npx prisma studio`
    Abre Prisma Studio, una interfaz gráfica para interactuar y explorar tu base de datos visualmente. Puedes ver y editar datos directamente desde Prisma Studio.

    5. `npx ts-node prisma/seed.ts`
    Este comando ejecuta un archivo TypeScript llamado `seed.ts` en el directorio `prisma`. Asegúrate de tener `ts-node` instalado para ejecutar scripts TypeScript directamente.

    6. `npx prisma init`
    Inicializa un nuevo proyecto Prisma. Este comando te guiará a través del proceso de configuración inicial, incluyendo la creación de archivos de configuración necesarios para tu proyecto Prisma.

-------------------------------------------------------------------------------------------------------
Asegúrate de tener las dependencias y el entorno necesario instalado antes de ejecutar estos comandos.

Licencia:
Este proyecto está bajo la Licencia MIT - ve el archivo LICENSE.md para detalles.