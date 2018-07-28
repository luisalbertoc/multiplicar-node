const opts = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: "10"
    }
};

const argv = require("yargs")
    .command('listar', 'Imprime en consola la table de multiplicar', opts)
    .command('crear', 'Crea el archivo por parámetros por consola', opts)
    .help()
    .argv;

module.exports = {
    argv
}