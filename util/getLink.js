const getLink = (text)=>{
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const texTMatch = text.match(regex);
    const match = [];

    for(let i = 0; i < texTMatch.length; i++){
        const execRegex = regex.exec(text);
        if(execRegex !== null){
            const [_, key, value] = execRegex;
            match.push({ [key]: value });
        }
    }
    return match.length !== 0 ? match : 'Não há links para retornar';
}

export default  getLink;