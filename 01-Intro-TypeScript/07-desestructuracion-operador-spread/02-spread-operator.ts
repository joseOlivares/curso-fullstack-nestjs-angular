//#1 Operador spread en objetos
    interface Producto  {
    id: number;
    nombre: string;
    precio: number;
    };

    const producto1: Producto = { id: 1, nombre: "Laptop", precio: 1000 };

    // Copiar un objeto (nueva referencia)
    // TypeScript infiere el tipo Producto
    const productoActualizado = { ...producto1, precio: 999.99 }; //actualizamos el precio

    console.log(productoActualizado); // { id: 1, nombre: "Laptop", precio: 999.99 }

    console.log(producto1); // { id: 1, nombre: "Laptop", precio: 1000 }


//#2 Operador spread en arreglos
    const colors: string[] = ["rojo", "verde", "azul"];
    const nuevosColores = [...colors, "amarillo", "negro"]; //crea un nuevo arreglo 
    console.log(` colors: ${colors}`); // [ 'rojo', 'verde', 'azul' ]); 
    console.log(` nuevosColores: ${nuevosColores}`); // [ 'rojo', 'verde', 'azul', 'amarillo', 'negro' ]);


    // Modificando el arreglo original
    colors[0] = "negro";
    console.log(` colors: ${colors}`); // [ 'negro', 'verde', 'azul' ]); 
    console.log(` nuevosColores: ${nuevosColores}`); // [ 'negro', 'verde', 'azul', 'amarillo', 'negro' ]);

    // ¿Qué problema resolvemos con el operador spread?
    // Podemos copiar un arreglo y modificarlo sin afectar el original
    const copyColors=colors; // Error, esta copiando la referencia
    console.log(` copyColors: ${copyColors}`); // [ 'negro', 'verde', 'azul' ]);
    console.log(` colors: ${colors}`);
    colors[0] = "Morado";
    console.log(` copyColors: ${copyColors}`); // [ 'Morado', 'verde', 'azul' ]);
    console.log(` colors: ${colors}`);  // [ 'Morado', 'verde', 'azul' ]
    


