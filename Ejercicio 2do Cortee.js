
let nombre = prompt("Introduzca nombre del empleado:");

let apellido = prompt("Introduzca apellido del empleado:");

let cedula = prompt("Introduzca cédula del empleado:");

let horasDiurnas = prompt("Introduzca cantidad de horas trabajadas diurnas:");

let horasVespertinas = prompt("Introduzca cantidad de horas trabajadas vespertinas:");

let horasNocturnas = prompt("Introduzca cantidad de horas trabajadas nocturnas:");


const costoHoraDiurna = 675;

const costoHoraVespertina = 700;

const costoHoraNocturna = 956.23;


let remuneracionBase = (horasDiurnas * costoHoraDiurna) + (horasVespertinas * costoHoraVespertina) + (horasNocturnas * costoHoraNocturna);

let sueldoQuincenalSinDeduccion = remuneracionBase * 15;


let ahorroHabitacional;
let seguroSocial;
if (remuneracionBase < 85000) {
  ahorroHabitacional = remuneracionBase * 0.001;
  
  seguroSocial = remuneracionBase * 0.0015;
} else if (remuneracionBase >= 85000 && remuneracionBase <= 150000) {
  ahorroHabitacional = remuneracionBase * 0.0015;
  seguroSocial = remuneracionBase * 0.002;
} else {
  ahorroHabitacional = remuneracionBase * 0.003;
  
  seguroSocial = remuneracionBase * 0.0025;
}


let sueldoQuincenalConDeduccion = sueldoQuincenalSinDeduccion - (ahorroHabitacional * 2) - (seguroSocial * 2);


console.log(`Nombre: ${nombre}`);

console.log(`Apellido: ${apellido}`);

console.log(`Cédula: ${cedula}`);

console.log(`Sueldo quincenal sin deducción: ${sueldoQuincenalSinDeduccion} Bs. F.`);

console.log(`Descuento de ahorro habitacional: ${ahorroHabitacional * 2} Bs. F. (0.1% si el sueldo es menor a 85.000, 0.15% si está entre 85.000 y 150.000, 0.3% si es mayor a 150.000)`);

console.log(`Descuento de seguro social: ${seguroSocial * 2} Bs. F. (0.15% si el sueldo es menor a 85.000, 0.2% si está entre 85.000 y 150.000, 0.25% si es mayor a 150.000)`);

console.log(`Sueldo quincenal con deducción: ${sueldoQuincenalConDeduccion} Bs. F.`);