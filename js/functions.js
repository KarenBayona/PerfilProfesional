// alert("FUNTION ACTIVO")
// ######### tipo de variables
// const para valores constantes
const pi=3.1416;
const pul =2.54;

// var para variables globales
var days = 10;
var name= "Karen Marcela";
// let para variables de bloque o locales
let count =1;
// ######### formas de impresión
// alert
// alert(name);
// console.log
console.log(name);
//body - pantalla
document.write (name+ " # Karen Marcela");
document.getElementById("box_one").innerHTML = "<h1>Karen Bayona</h1>";
document.getElementById("box_two").innerText = "<h1>Karen Bayona</h1>";
// librerias
// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
// )
// Swal.fire({
//     icon:'error',
//     showConfirmButton:false,
//     title:name,
//     text:name,
//     footer:"footer: "+name,
//     background: 'write',
//     position: 'top-start'
// });
//############ tipos de datos
//numericos
var number_one=20;
var number_two=5.5;
//texto
var class_type = "Electiva tecnica ";
//booleanos
var boolean=true ;//false
var array_num=[1,2,3,4,5,3.4,1.2]
var array_tex=["Lunes"," Martes","Miercoles","Jueves","Viernes","Sábados", "Domingos"];
var array_mix=[1,"a",2,"c"];
var array_mul=[
    {name:"Karen",las_name:"Karen",age:"17"},
    {name:"Liceth",las_name:"Karen",age:"18"},
    {name:"Ana",las_name:"Karen",age:"18"},
    {name:"Karen",las_name:"Karen",age:"17"},
]
//###### operadores básicos
//suma
var suma=number_one+ number_two;
console.log("Suma "+suma);
//resta
var resta= number_one -number_two;
console.log("Resta "+resta);
//multiplicacion
var multiplicacion= number_one *number_two;
console.log("Multiplicacion "+multiplicacion);
//division
var division= number_one /number_two;
console.log("Division "+division.toFixed(2));
//mod
var modulo= number_one %number_two;
console.log("Modulo "+modulo);










