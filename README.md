## Tienda Online

Este es un proyecto de tienda online que consta de un backend desarrollado en PHP con XAMPP y un frontend desarrollado en React con Vite. A continuación se detallan los pasos para poner en funcionamiento el proyecto.

### Requisitos

- XAMPP con PHPMyAdmin
- Node.js
- npm

### Instalación

1. Clonar el repositorio en la carpeta `htdocs/apps` de XAMPP ('cree le carpeta apps de ser necesario'):


   ```bash
   git clone https://github.com/tu_usuario/tu_proyecto.git
   ```

2. Iniciar los servicios de Apache y MySQL en XAMPP.

3. Instalar las dependencias del frontend:

   ```bash
   cd tienda-online
   npm install
   ```

### Configuración

1. La conexion de la base de datos es automatica cada vez que se llama a un script del backend esto es gracias al archivo `conexion_bd.php`.

2. Configurar la URL del backend en el archivo `api.js` del frontend.

### Ejecución

1. Iniciar el servidor de desarrollo del frontend:

   ```bash
   cd tienda-online
   npm run dev
   ```

2. Acceder a la URL del frontend (por lo general, `http://localhost:5173`) en un navegador web.

### Uso

Una vez que el proyecto esté en funcionamiento, los usuarios podrán acceder a la tienda online, registrarse, iniciar sesión, ver productos, agregar productos al carrito y realizar pedidos.


Citations:
[1] https://www.youtube.com/watch?v=5L9UhOnuos0
[2] https://www.edureka.co/community/92606/how-to-create-a-database-using-pdo-in-php
[3] https://www.phptutorial.net/php-pdo/php-pdo-mysql/
[4] https://phppot.com/php/user-registration-in-php-with-login-form-with-mysql-and-code-download/
[5] https://stackoverflow.com/questions/2583707/can-i-create-a-database-using-pdo-in-php