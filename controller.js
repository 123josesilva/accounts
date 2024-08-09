import index from './index.js';
import createAccount from './services/createAccount.js'; 

let initMessage = {
    type: 'list',
    name: 'action',
    message: 'O que voce deseja fazer?',
    choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
}

function controllerCreateAccount(){
    const bildAccount = createAccount.createAccountInit();
    if(bildAccount){
        //fazer o update do array index  0 de "criar conta" para opçoes da conta 
    }
}