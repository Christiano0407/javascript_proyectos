var random = Math.ceil(Math.random()*3);
var randomPlay = Math.ceil(Math.random()*3);

var luisa = {
    nombre: "Luisa",
    piedra: false,
    papel: false,
    tijera: false
}

var computer = {
    nombre: "pc",
    piedra: false,
    papel: false,
    tijera: false
}

function jugador(persona){
 if(random === 1) {
     persona.piedra = true;
     console.log(`${persona.nombre} sacó piedra`);
 }else if (random === 2){
     persona.tijera = true;
     console.log(`${persona.nombre} sacó tijera`);
 }else if(random === 3){
     persona.papel = true;
     console.log(`${persona.nombre} sacó papel`);
 }
}

function computers(persona){
  if(randomPlay === 1){
    persona.piedra = true;
    console.log(`${persona.nombre} sacó piedra`);
  }else if(randomPlay === 2){
      persona.tijera = true;
      console.log(`${persona.nombre} sacó tijera`);
  }else if(randomPlay === 3){
      persona.papel = true;
      console.log(`${persona.nombre} sacó papel`);
  }
}

setTimeout(() => {jugador(luisa)},1000);
setTimeout(() => {computers(computer)},1500);
setTimeout(() => {
 if(jugador.piedra && computer.tijera) {
     console.log(`Luisa ganó!`);
 }else if(luisa.piedra && computer.papel){
     console.log(`computer ganó`);
 }else if(luisa.piedra && computer.piedra){
     console.log(`empate!`);
 }else if(luisa.tijera && computer.tijera){
     console.log(`empate!`);
 }else if(luisa.tijera && computer.piedra){
     console.log(`ganó computer`);
 }else if(luisa.tijera && computer.papel){
     console.log(`Luisa, ganó!`);
 }else if(luisa.papel && computer.papel){
     console.log(`empate!`);
 }else if(luisa.papel && computer.tijera){
     console.log(`ganó computer`);
 }else if(luisa.papel && computer.piedra){
     console.log(`ganó Luisa`);
 }
}, 3000);
