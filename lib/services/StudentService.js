const Reader = require("./../utils/Reader");
class StudentService{
    static Students(){
        const students = Reader.readJsonFile("visualpartners.json");
        return students;
    }
}
module.exports = StudentService;


