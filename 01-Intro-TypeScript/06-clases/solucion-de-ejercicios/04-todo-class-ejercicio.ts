class Todo {
    // Propiedades de la clase Todo
    private readonly userId: number;
    readonly id: number;
    public title: string;
    private dueDate: Date; // Propiedad opcional para la fecha límite
    public completed: boolean;

  constructor(
    userId: number,
    id: number,
    title: string,
    dueDate: Date, // Propiedad opcional para la fecha límite deadLine
    completed: boolean = false, // Por defecto, una tarea no está completada
  ) 
  {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.dueDate = dueDate; // Inicialización de la fecha límite
    this.completed = completed;

    }

  // Método de ejemplo
  markAsCompleted(): void {
    this.completed = true;
  }

    // Getter para acceder a la propiedad privada deadLine
  getDueDate(): Date {
    return this.dueDate;
  }
}

// Ejemplo de uso de la clase Todo
let todo: Todo = new Todo(1, 1, "Aprender TypeScript", new Date("2023-12-31"));
todo.markAsCompleted(); // Marca la tarea como completada
console.log(`Tarea: ${todo.title}, Completada: ${todo.completed}`); // "Tarea: Aprender TypeScript, Completada: true"
console.log(`Fecha límite: ${todo.getDueDate().toLocaleDateString()}`); // Accediendo a la fecha límite mediante el getter
