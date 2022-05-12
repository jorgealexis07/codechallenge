const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

class StudentController{
    static getStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.Students(students) ;
    }

    
}
module.exports = StudentController;