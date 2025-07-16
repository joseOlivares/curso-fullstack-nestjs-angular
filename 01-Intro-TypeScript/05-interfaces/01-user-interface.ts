
    interface Usuario {
        nombre: string;
        apellidos: string;
        email: string;
        telefono?: string; // Propiedad opcional
        nombreCompleto(): string; // Método
    }

    let usuario: Usuario = {
        nombre: "Luis",
        apellidos: "Olivares",
        email: "luis.olivares@gbm.com",
        telefono: "123456789",  
            nombreCompleto: function() {
                return `${this.nombre} ${this.apellidos}`;
            }
    };  

    console.log(usuario.nombreCompleto()); // "Luis Olivares"
    console.log(usuario.telefono); // "123456789"
    console.log(usuario.email); // "luis.olivares@gbm.com"