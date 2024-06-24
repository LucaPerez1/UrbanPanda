# E-commerce - Urnban panda 

Este proyecto es una aplicación web de comercio electronico de ropa desarrollada con React. El objetivo de esta aplicaion es brindar una experiencia de compra completa y facil de utilizar para el usuario. cuyas funcionalidades principales son las sigueintes: 

## Funciones principales 

### Listado de productos

Al ingresar a la pagina se realiza un render del listado de los productos en carts con nombre, foto y precio. Al hacer click en "ver mas", se navega hacia la pantalla de detalles del producto

### Detalles del producto 

Al hacer clic en "Ver más", se navega a la página de detalle del producto. En esta página, se proporciona información completa del producto, incluyendo el precio, una imagen del producto y su descripción detallada. Además, se ofrece la opción de agregar el producto al carrito de compras. Los usuarios también pueden seleccionar la cantidad de unidades que desean agregar utilizando un contador intuitivo.  

### Carrito de compras 

Se puede navegar al carrito a traves del icono del mismo ubicado en el extremo derecho de la navbar. Una vez en el carrito se proporciona una descripcion del producto donde se detallan la foto del producto el nombre, la cantidad y el precio unitario. Tambien se proporciona cuanto es el total de la compra y se le ofrece en el caso de que el usuario lo necite la posibilidad de elimnar los productos o el carrito entero. 

### Checkout 

Una vez clickeado en "terminar compra" navega al usuario hacia el checkout donde se le pide que ingrese su nombre numero de telefono y email. Una vez finalizado el formulario se envia el detalle de la compra hacia la base de datos de firebase y se le devuelve al usuario el id de la compra y se lo redireccion hacia ordenes donde se puestra el historial de compras. 

## Navegacion

<img src="./public/assets/img/proyecto-react.gif" width="300" >

## Tecnologia utilizada 

- **React:** Biblioteca de JavaScript para construir interfaces de usuario con componentes reutilizables.
- **Firebase:** Plataforma de Google que ofrece servicios backend como bases de datos, autenticación y almacenamiento.
- **React Router DOM:** Biblioteca para gestionar la navegación y las rutas en aplicaciones web de React.
- **Sweetalert 2:** Biblioteca para crear alertas y cuadros de diálogo personalizados.
- **Boostrap:** Framework de CSS para diseñar sitios web responsivos y móviles con estilos y componentes predefinidos.

## Instalacion y ejecucion

1. **Clonar el repositorio:** `git clone https://github.com/LucaPerez1/Proyecto-React.git`
2. **Instalar las dependencias:** `npm i`
3. **Ejecutar la aplicacion** `npm run dev`

