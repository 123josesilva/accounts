# Setup inicial

```
npm init  
```

```
npm install chalk inquirer  
```
no package.js configuramos o start da aplicação: 
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },

```

no index.js precisamos importar os modulos que vamos utlizar. 
```
//modulos externos 
const inquirer = require("inquirer"); 
const chalk = require("chalk");


//modulos internos
const fs = require("fs"); 

```