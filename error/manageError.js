const manageError = (erro)=>{
    throw new Error(erro.message);
}

export default manageError;