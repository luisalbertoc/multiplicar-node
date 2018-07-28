
const argv = require("./config/yargs").argv;
const multiplicar = require("./multiplicar/multiplicar");
const color = require("colors");

let comando = argv._[0];
switch (comando) {
    case "listar":
        multiplicar.listarTabla(argv.base,argv.limite);
        break;
    case "crear":
        multiplicar.crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Àrchivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
        break;
}

//const { crearArchivo } = require("./multiplicar/multiplicar"); Para llamar directamente a la función

//console.log(process.argv);
let argv2 = process.argv;

//console.log(argv.limite);

//let parametro = argv[2];
//let base = parametro.split("=")[1];
//console.log(base);

//multiplicar.crearArchivo(base)
//    .then( archivo => console.log(`Àrchivo creado: ${ archivo }`))
//    .catch(e => console.log(e));