//requires
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');


let listarTabla = (base, limite = 10) => {


    console.log('====================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('====================='.green);

    for (let i = 1; i <= 10; i++)[
        console.log(base * i + ' ')
    ]

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++)[
            data += base * i + '  '
        ]

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}