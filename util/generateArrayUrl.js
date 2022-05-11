const generateArrayUrl = (arrayLinks)=>{
    return arrayLinks.map(objLink => Object.values(objLink).join());
}

export default generateArrayUrl;