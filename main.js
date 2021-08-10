

const informacionPersonal = [];


informacionPersonal['Nombre'] = "Cristian";
informacionPersonal['Apellido'] = "Suarez";
informacionPersonal['Edad'] = 32;
informacionPersonal['Instructor'] = false;

// for(let [indice, value] of Object.entries(informacionPersonal)){
//     console.log(`Asociativo: ${indice}, Valor: ${value}`);
// }
// console.warn("");
// Object.values(informacionPersonal).forEach(element => {
//     console.log(element);
// });



console.log(informacionPersonal);


// let arrayBloqueo = [];
// for (let i = 0; i < 3; i++) {
//     arrayBloqueo[i] = undefined;
// }
// // Object.freeze(arrayBloqueo);
// Object.preventExtensions(arrayBloqueo);
// // console.log(Object.isExtensible(arrayBloqueo));
// arrayBloqueo[4] = undefined;
// arrayBloqueo[1] = "Felipe";
// console.log(arrayBloqueo);


// let lista = [];
// for (let i = 0; i <= 6; i++) {
//     lista[i] = undefined;
// }
// // for (let i = 0; i < 6; lista[i++] = undefined);

// lista[0] = "Cristian Felipe"
// lista[1] = "Suarez";
// lista[2] = 32;
// lista[3] = false;
// lista[4] = "Bucaramanga";
// lista[5] = "crisfelipesuarez@gmail.com";
// lista[6] = "Diplomado JavasScript Nivel 1";

// console.log(lista);



// let array = [];
// for (let i = 0; i < 5; i++) {
//     array[i] = undefined;
// }
// console.log(array);

// let arrayObjeto = new Array(5).fill(undefined,0,5);
// console.log(arrayObjeto);