const argv = require('./config/yargs').argv;
const colors = require('colors');
        
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
console.log(argv);

let commando = argv._[0];
console.log(argv);
switch(commando) {
  case 'listar':
    console.log('listar');
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
      console.log('crear');
      crearArchivo(argv.base, argv.limite)
        .then((result) => {
          console.log(`Archivo creado: tabla-${argv.base}.txt`.green);
        }).catch((err) => {
          console.log(err);
      });
      break;
  default: 
    console.log('commando no reconocido');
    break;
}
// let param = argv[2];
// let base = param.split('=')[1];