import chalk from "chalk";
import inquirer from "inquirer";
import fs from "fs";

function createAccountInit() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!')); 
    console.log(chalk.green('Defina as opções da sua conta a seguir')); 
    bildAccount(); 
}

function bildAccount(){
    inquirer.prompt([
        {
            name: 'accountName', 
            message: 'Digite um nome para a sua conta:'
        }
    ]).then(answer => {
        const accountName = answer['accountName'];

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts');
        }

        if (fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta consta já existe, por favor escolha outro nome')); 
            // usuário retorna para escolher outro accountName
            bildAccount(); 
            return; 
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance" : 0}', (err)=>console.log(err));
        console.log('Parabéns a sua conta foi criada com sucesso!'); 
    }).catch(err => console.log('bildAccount say:', err)); 
}

export default {
    createAccountInit
}