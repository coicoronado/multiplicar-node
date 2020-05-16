// requireds
const fs = require('fs');
const colors = require('colors');
// const fs = require('express'); // not standard node 
// const fs = require('./'); //local file in our project

let listarTabla = (base, limite) => {
  console.log('======================'.green);
  console.log(`tabla de ${base}`.green);
  console.log(multiplicar(base, limite).green);
  console.log('======================'.green);
};

let multiplicar = (base, limite) => {
  let result = '';
  for(let i=1; i<=limite; i++) {
    result += `${base} * ${i} = ${base*i}\n`;
  }
  return result;
}

let crearArchivo = (base, limite) => {
  return new Promise((resolve,reject) => {
    if (!Number(base)) {
      reject(`El valor ${base} no es un número`);
      return;
    }
    let data = '';

    data+=multiplicar(base, limite ? limite : 10);

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err)
        reject (err);
      else 
        resolve('el archivo fue creado');
    });

  });
}

module.exports = {
  crearArchivo,
  listarTabla
}