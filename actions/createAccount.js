import chalk from "chalk";

function createAccountInit() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!')); 
    console.log(chalk.green('Defina as opções da sua conta a seguir')); 
}

export default {
    createAccountInit
}