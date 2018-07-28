const fs = require('fs'); //Es un paquete nativo
// const fs = require('express'); No es un paquete nativo
// const fs = require('./miPaquete'); Son librerías propias

let listarTabla  = (base,limite) => {

    console.log("===========".red);
    console.log("===tabla===".green);
    console.log("===========".red);
    

    

    for (let i = 1; i < limite; i++) {
        console.log(`${i} * ${base}  = ${i * base} `.blue);
    }
}

let crearArchivo = (base,limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = "";

        for (let i = 0; i < limite; i++) {
            //console.log(`${i} * 2 = ` + i * 2);
            data += `${i} * ${base}  = ` + i * base + `\n`;
        }

        fs.writeFile('tablas/tabla-' + base + '.txt', data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${ base }.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}