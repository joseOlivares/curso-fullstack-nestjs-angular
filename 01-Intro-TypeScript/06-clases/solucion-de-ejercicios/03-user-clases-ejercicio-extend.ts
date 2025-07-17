import { Usuario } from "../01-user-class";


class UsuarioConEdad extends Usuario {
    private fechaNacimiento: Date; // Propiedad para la fecha de nacimiento
    constructor(nombre: string, apellidos: string, email: string,  fechaNacimiento: Date, telefono?: string,) {
        super(nombre, apellidos, email, telefono); // Llamada al constructor de la clase base
        this.fechaNacimiento = fechaNacimiento; // Inicialización de la fecha de nacimiento
    }  

    // Método para calcular la edad del usuario
    calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
}


// Ejemplo de uso de la clase UsuarioConEdad
let usuarioConEdad: UsuarioConEdad = new UsuarioConEdad("Juan", "Ruiz", "juan@gbm.com", new Date(1987, 1, 20), "987654321");
console.log(usuarioConEdad.nombreCompleto()); // "Jose Olivares"
console.log(`Edad: ${usuarioConEdad.calcularEdad()}`); // 30