//Otro ejemplo de uso de tipos personalizados
type Producto = {
  nombre: string;
  precio: number;
  descuento?: number; // Propiedad opcional
};

//Uso del tipo Producto
let producto: Producto[] = [
  { nombre: 'Camiseta', precio: 20 },
  { nombre: 'Pantalón', precio: 30, descuento: 5 },
  { nombre: 'Zapatos', precio: 50, descuento: 10 }
];

//Función que calcula el precio final de un producto con descuento
function calcularPrecioFinal(producto: Producto): number {
  if (producto.descuento) {
    return producto.precio - (producto.precio * producto.descuento / 100);
  }
  return producto.precio;
}

//Uso de la función calcularPrecioFinal
producto.forEach(p => {
  const precioFinal = calcularPrecioFinal(p);
  console.log(`El precio final de ${p.nombre} es $${precioFinal}`);
});