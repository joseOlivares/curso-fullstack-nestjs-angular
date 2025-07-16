
    class Usuario {
        // Propiedades.
        nombre: string;
        apellidos: string;  
        email: string;
        telefono?: string; // Propiedad opcional    
        // Constructor.
        constructor(nombre: string, apellidos: string, email: string, telefono?: string) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.email = email;
            this.telefono = telefono;
        }   
        // Método para obtener el nombre completo.
        nombreCompleto(): string {
            return `${this.nombre} ${this.apellidos}`;
        }
    }

    // Ejemplo de uso de la clase Usuario
    
    let usuario: Usuario = new Usuario("Jose", "Olivares", "jose.olivares@gbm.com");
    usuario.telefono = "987654321"; // Asignación de un valor a la propiedad opcional
    console.log(usuario.nombreCompleto()); // "Jose Olivares"
    console.log(usuario.telefono); // "987654321"
    console.log(usuario.email); // "   jose.olivares@gbm.com"