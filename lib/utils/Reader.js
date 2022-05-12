const { Console } = require("console");
const fs = require("fs");
class Reader{
    static readJsonFile(path){
        if(path == "visualpartners.json"){
            const rawdata = fs.readFileSync(path);
            return JSON.parse(rawdata);
        }
        else{
            return path 
        }
        
    }
}
module.exports = Reader;
