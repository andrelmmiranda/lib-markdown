import chalk from "chalk";
import getFile from "./util/getFile.js";
import validateUrls from "./util/validateUrls.js";

const [a, b, filepath, valida] = process.argv;

const cli = async (filepath, valida)=>{
    const list = await getFile(filepath);

    if(valida === 'validar'){
        console.log(chalk.yellow('links validados'), await validateUrls(list));
    } else{
        console.log(chalk.yellow('Lista de links '), list);
    } 
}

cli(filepath, valida);