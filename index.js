//modulos externos 
import inquirer from "inquirer";
import chalk from "chalk";

//modulos internos
import fs from "fs";
import createAccount from "./actions/createAccount.js";

operation()


function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que voce deseja fazer?',
            choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
        },
    ]).then((answer) => {
        const action = answer['action'];
        
        if(action === 'Criar Conta'){
            createAccount.createAccountInit(); 
        }
    })
    .catch((err)=> console.log(err))
}