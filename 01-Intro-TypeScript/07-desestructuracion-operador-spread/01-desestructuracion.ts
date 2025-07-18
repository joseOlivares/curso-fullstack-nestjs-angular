// Definimos una interface para el tipo de usuario
interface Usuario  {
  id: number;
  nombre: string;
  edad: number;
  direccion?: string; // Opcional
};

const usuario: Usuario = {
  id: 1,
  nombre: "Adrian Contreras",
  edad: 30,
};

//#1  Desestructuración con tipado
    const { id, nombre } = usuario; // TypeScript infiere los tipos: id(number), nombre(string)

    console.log(`id es de tipo: ${typeof id}`); //  number
    console.log(`nombre es de tipo: ${typeof nombre}`); // string


//#2 Es posible también renombrar las variables al desestructurar
    const { id: userId, nombre: userName } = usuario;
    console.log(`id: ${userId}`); // number
    console.log(`userName: ${userName}`); // string


// #3 Desestructuración de arreglos 
    const colores: string[] = ["rojo", "verde", "azul"];

    // Desestructuración con tipos inferidos
    const [primero, segundo] = colores; // primero y segundo son de tipo string

    console.log(primero); // "rojo" (string)
    console.log(segundo); // "verde" (string)

    // ¿y si solo necesitamos el ultimo elmento?
    const [, , ultimoColor] = colores; //Utilizamos comas para saltar los primeros elementos y renombrar el último
    console.log(ultimoColor); // "azul"

//TODO: Desestructurar los elementos faltantes de la interface Usuario
    //Es posible asignar un valor por defecto a las variables desestructuradas
    //const { id: userId2, nombre: userName2, edad = 18, direccion = "Desconocida" } = usuario; // edad y direccion tienen valores por defecto
//TODO Desetructurar el segundo elemento del arreglo colores