// Conocidos como mutators porque alteran la estructura del Array
// push, pop, shift, unshift
// push : Permite agregar elementos al array

var arrayNumeros = [];

arrayNumeros.push(10);
console.log(arrayNumeros);

arrayNumeros.push(20);
console.log(arrayNumeros);

arrayNumeros.push(30);
console.log(arrayNumeros);

arrayNumeros.push(40);
console.log(arrayNumeros);

arrayNumeros.push(50);
console.log(arrayNumeros);

arrayNumeros.push(60, 70, 80);
console.log(arrayNumeros);


// Metodo pop: Obtiene el ultimo elemento del arreglo

console.log(arrayNumeros.pop());
console.log(arrayNumeros);

// Metodo shift: Obtiene el primer elemento del arreglo
console.log(arrayNumeros.shift());
console.log(arrayNumeros);

// Metodo unshift: Agrega elementos al principio del arreglo
console.log(arrayNumeros.unshift(3));
console.log(arrayNumeros);
console.log(arrayNumeros.unshift(2));
console.log(arrayNumeros);
console.log(arrayNumeros.unshift(1));
console.log(arrayNumeros);