import fs from 'fs';
import chalk from 'chalk';
import launchError from '../error/launchError.js';
import getLink from './getLink.js';

const getFile = async (filepath)=>{
    try {
        const texto = await fs.promises.readFile(filepath, 'utf-8');
         
        return getLink(texto);
    } catch (error) {
        launchError(error);
    }
}

export default getFile; 

// const getFile = (filepath)=>{
//     fs.promises
//     .readFile(filepath, 'utf-8')
//     .then(text => console.log(text))
//     .catch(erro => launchError(erro));
// }

// function getFile(filepath){
//     fs.readFile(filepath, 'utf-8', (erro, data)=>{
//         if(erro){
//             launchError(erro);
//         }
//         console.log(chalk.green(data));
//     });
// }