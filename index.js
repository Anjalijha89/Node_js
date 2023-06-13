/*
const chalk = require('chalk');
console.log(chalk.redBright.underline('Hello world!')); 
console.log(chalk.green.underline("success")); 
*/

/*
const validator = require("validator");
const res = validator.isEmail("thapa@thapa.com");
console.log(res);
*/

const chalk = require('chalk');
const validator = require("validator");
const res = validator.isEmail("thapa@thapa.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
