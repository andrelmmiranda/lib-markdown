import fetch from 'node-fetch';
import manageError from '../error/manageError.js';

const statusCheck = async (arrayUrl)=>{
    try{
        const arrayStatus = await Promise.all(
            arrayUrl.map(async (url) => {
                const response = await fetch(url);
    
            return `${response.status} - ${response.statusText}`;
        }));
        return arrayStatus;
    } catch(erro){
        manageError(erro);
    }
    
}

export default statusCheck;