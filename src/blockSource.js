import { BASE_URL } from "./apiConfig";

function getBlockCount(){
    function treatHTTPResponseACB(response){
        if(!response.ok) throw new Error("API Error");
        return response.json();
    }
    function extractResultACB(data){
        return data[0].level;
    }
    return fetch(BASE_URL+'/blocks?sort.desc=level&limit=1').then(treatHTTPResponseACB).then(extractResultACB);
}

/* work in progress
function getBlocks(){
    return fetch(BASE_URL+'/blocks?')
}
*/

function getTransactions(){}

export {getBlockCount};
