 
 /* Funcion tradicional */
 function sumar(a: number, b: number): number {
   return a + b;
 }
 
 console.log(sumar(1, 2));


 /* Función con parametros opcionales usando ? */
 function sumar2(a: number, b: number, c?:number): number {
   if(c) return a+b+c;

   return a+b; 
 }

 sumar2(5, 10); // 15
 sumar2(5, 10, 15); // 30


 /* Función con parametros por defecto */
 //Cuando no se devolverá un valor, se puede usar el tipo void
  function mensajeError(mensaje: string, codigo: number = 500): void {
   console.log(`Error ${codigo}: ${mensaje}`);
  }

 mensajeError("Error en la conexión"); // Error 500: Error en la conexión
 mensajeError("Error en la conexión", 404); // Error 404: Error en la conexión
