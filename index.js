#!/usr/bin/env node
const program = require('commander');
const clipboardy = require('clipboardy');
const chalk = require('chalk');
const log = console.log;
const createPassword = require('./utils/createPassword.js');
const savePassword = require('./utils/savePassword.js');

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse();

const {length, save, numbers, symbols} = program.opts();

//Get generated password

const generatedPassword = createPassword(length, numbers, symbols);

if(save){
    savePassword(generatedPassword)
}

//Copy to clipboard
clipboardy.writeSync(generatedPassword);

//Output generated password
log(chalk.blue('Generated password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied to clipboard.'));