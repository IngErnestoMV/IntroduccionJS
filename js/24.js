// For Loop
//(donde va a iniciar; condición; incremento)
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// for(let i = 0; i < 101; i++){
//     if(i % 2 == 0){
//         console.log(`El número ${i} es par`)
//     } else{
//         console.log(`El número ${i} es impar`)      
//     }
// }

const carrito = [
    {nombre: 'Monitor de 20"', precio: 500},
    {nombre: 'Tlevisión 50"', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado"', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Lap Top"', precio: 800}
];

for (let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}


// While Loop



// Do While Loop