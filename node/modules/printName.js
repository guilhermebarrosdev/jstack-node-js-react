// Modo 1
function printName(name) {
  console.log(name);
}

const lastName = 'Barros';

module.exports = { printName, lastName };

// Modo 2
exports.printName2 = (name) => {
  console.log(name);
};

exports.lastName2 = 'Barros2';
