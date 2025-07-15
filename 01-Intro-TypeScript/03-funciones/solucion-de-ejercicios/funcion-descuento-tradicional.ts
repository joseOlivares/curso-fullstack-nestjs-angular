/**
 *Ejercicio 01: Crear una función tradicional que reciba como parámetros de entrada el precio
  de un producto y el descuento a aplicar (por ejemplo para el 10%  usar como entrada 10,  
  para el 30%  usar  30 , etc). La función debe retornar el total en concepto de descuento.
 */

function calcularDescuento( precio:number, descuento:number):number{
    let nuevoPrecio=precio*(descuento/100);
    return nuevoPrecio;
}


const precio=100;
const descuento=calcularDescuento(precio,10);
const total=precio-descuento;


console.log(`Precio del producto $ ${precio}`)
console.log(`Descuento $ ${descuento}`);
console.log(`Total a pagar $ ${total}`)
