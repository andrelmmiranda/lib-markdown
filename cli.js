import chalk from "chalk";
import getFile from "./util/getFile.js";

const [a, b, filepath] = process.argv;

const cli = async (filepath)=>{
    const list = await getFile(filepath);

    console.log(chalk.yellow('Lista de links '), list);
}

cli(filepath);