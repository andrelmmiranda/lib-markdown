import generateArrayUrl from "./generateArrayUrl.js";
import statusCheck from "./statusCheck.js";

const validateUrls = async (arrayLinks)=>{
    const links = generateArrayUrl(arrayLinks);
    const status = await statusCheck(links);

    const result = links.map((link, i) => ({link, 'status': status[i]}));

    return result;
}

export default validateUrls;