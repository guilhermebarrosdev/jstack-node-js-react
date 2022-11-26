// Módulos são conjuntos de código.

// 3 tipos de módulos:

// -> TODOS OS ARQUIVOS JAVASCRIPT SÃO  MÓDULOS.
// -> Nativos.
// -> npm (node package manager).

// ---------------------------------------------

// Modo 1
const modules = require('./printName');

modules.printName(`Guilherme ${modules.lastName}`);

// Modo 2
const { printName2, lastName2 } = require('./printName');

printName2(`Guilherme ${lastName2}`);

// ---------------------------------------------

const os = require('os');

console.log(os.type());
