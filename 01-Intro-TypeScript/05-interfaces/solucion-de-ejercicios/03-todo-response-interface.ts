/**
 * Crear una interfaz para estructurar  la respuesta del endpoint  https://jsonplaceholder.typicode.com/todos
    [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        }
    ]
 */

interface TodoResponse {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// Ejemplo de uso de la interfaz TodoResponse
const exampleTodo: TodoResponse[] = [{
    userId: 1,
    id: 1,
    title: "Asistir al curso de TypeScript",
    completed: false
},
{
    userId: 1,
    id: 2,
    title: "Cenar",
    completed: false
}];



exampleTodo.forEach(todo => {
    console.log(`User ID: ${todo.userId}, ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`);
});





// Ejemplo de cómo podrías usar la interfaz para hacer una solicitud HTTP
// (Asegúrate de tener un entorno que soporte fetch, como un navegador o Node.js con node-fetch)
// Ejecutar con ts-node si estás usando TypeScript: // ts-node 03-todo-response-interface.ts


/* 
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((data: TodoResponse[]) => {
        data.forEach(todo => {
            console.log(`ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`);
        });
    })
    .catch(error => console.error('Error fetching todos:', error)); 
*/


