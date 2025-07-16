import { Usuario } from "../01-user-interface";
interface UsuarioSistema extends Usuario {
    rol: rolUsuario; // Nueva propiedad
}  

type rolUsuario = "Administrador" | "Usuario" | "Invitado"; // Definición de roles


let usuarioSistema: UsuarioSistema = {
    nombre: "Ana",
    apellidos: "Gómez",
    email: "ana.gomez@gbm.com",
    telefono: "987654321",
    rol: "Administrador",
    nombreCompleto: function (): string {
        return `${this.nombre} ${this.apellidos}`;
    }
};

console.log(usuarioSistema.nombreCompleto()); // "Ana Gómez"
console.log(usuarioSistema.telefono); // "987654321"
console.log(usuarioSistema.email); // " ana.gomez@gbm.com"
console.log(usuarioSistema.rol); // "Administrador"     


//TODO: Recordar que las interfaces no se transforman a JavaScript, son solo para el desarrollo y la validación de tipos en TypeScript.
// Para ejecutar el código TypeScript para pruebas de desarrollo, usaremos ts-node
// Instalación de ts-node: npm install -g ts-node
// Ejecución del archivo: ts-node 02-extend-user-interface.ts