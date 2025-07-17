
    class Usuario {
        // Propiedades.
        private nombre: string;
        private apellidos: string;  
        public email: string; //si no definimos el modificador de acceso, por defecto es public
        public telefono?: string; // Propiedad opcional   

        private fechaNacimiento: Date; // Propiedad opcional para la fecha de nacimiento

        // Constructor se llama cuando se crea una instancia de la clase.
        // Se utiliza para inicializar las propiedades de la clase.
        constructor(nombre: string, apellidos: string, email: string, fechaNacimiento: Date, telefono?: string ) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.email = email;
            this.telefono = telefono;
            this.fechaNacimiento = fechaNacimiento; // Inicialización de la fecha de nacimiento
        }   
        // Método para obtener el nombre completo.
        public nombreCompleto(): string {
            return `${this.nombre} ${this.apellidos}`;
        }

        // Método para calcular la edad del usuario
        public calcularEdad(): number {
            if (!this.fechaNacimiento) {
                return 0; // Si no se ha proporcionado fecha de nacimiento, retornamos 0
            }
            const hoy = new Date();
            let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
            const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
            if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
                edad--;
            }
            return edad;
        }


    }

    // Ejemplo de uso de la clase Usuario
    
    let usuario: Usuario = new Usuario("Juan", "Ruiz", "juan@gbm.com",  new Date(1987, 1, 20));
    console.log(usuario.nombreCompleto()); // "Juan Ruiz"
    console.log(`Edad: ${usuario.calcularEdad()}`); // 0


    //Intentanto acceder a las propiedades privadas
    //console.log(usuario.nombre); // Error: Property 'nombre' is private and only accessible
