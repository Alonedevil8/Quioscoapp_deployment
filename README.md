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
Vistas:

![Screenshot_3](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/458a5a86-5fab-4111-94ea-a8cc96d237d5)

![Screenshot_4](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/2ae0e150-b10d-402c-946f-410691418e8c)

![Screenshot_5](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/0a542b64-eceb-47d7-b08a-a6e5438721a7)

![Screenshot_6](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/d38a7012-e3c0-490d-a2d4-40e404814491)

![Screenshot_7](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/56795efc-8353-4e10-9dfe-c541c1dd8d42)

Vista En Dispositivo Mobil:

![Imagen de WhatsApp 2024-01-09 a las 20 06 36_01afa5e8](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/656d2a96-61bc-4f22-801a-eb9f5a35d605)

![Imagen de WhatsApp 2024-01-09 a las 20 06 36_829d8006](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/11d5167c-a249-45d3-b8b8-fb715ba183a4)

![Imagen de WhatsApp 2024-01-09 a las 20 06 36_0ae2673c](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/8b118628-7ff1-4f6f-b4a9-4f01613fd3db)

![Imagen de WhatsApp 2024-01-09 a las 20 06 36_b73cbc0d](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/183555f5-d5ee-4089-b75b-b71f91da492b)

![Imagen de WhatsApp 2024-01-09 a las 20 06 36_780d67d6](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/67457b09-a6de-490d-b7aa-ce5525855106)

![Imagen de WhatsApp 2024-01-09 a las 20 06 35_14787db2](https://github.com/Alonedevil8/quioscoapp_deployment/assets/6482729/e95811d5-acb1-4ed0-8725-2f98e8947b23)



Asegúrate de tener las dependencias y el entorno necesario instalado antes de ejecutar estos comandos.

Licencia:
Este proyecto está bajo la Licencia MIT - ve el archivo LICENSE.md para detalles.
