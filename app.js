// const fs = require('fs');
// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes')
const log = console.log;

// Chalk things
const error = chalk.bold.red;

// This would be a good thing to export with 404 and 500 errors
log(error('Error!'));

log(chalk.cyan.dim('Should emit small amount of light'))

log(chalk.green(
  'Here are green words ' +
  chalk.red.underline.bgGray.bold('then more stuff happens') + ' then sorcery happens'));

log(chalk.bold(getNotes))

