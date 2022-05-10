import chalk from "chalk";

function launchError(erro){
    throw new Error(chalk.red(erro.code, 'deu ruim'));
}

export default launchError;