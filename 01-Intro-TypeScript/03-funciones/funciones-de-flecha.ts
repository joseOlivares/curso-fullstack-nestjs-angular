// Función tradicional
function suma1(a: number, b: number): number {
  return a + b;
};

// Arrow function equivalente
const suma2 = (a: number, b: number): number => {
  return a + b;
};



// Forma más concisa (cuando el cuerpo es una sola expresión)
// Si la función solo tiene una línea de retorno, puedes omitir las llaves {} y la palabra return.
const suma3 = (a: number, b: number): number => a + b;