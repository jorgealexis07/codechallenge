const StudentService = require("./../../lib/services/StudentService");


class StudentController{
    static getStudents(){
        return StudentService.Students() ;
    }

    
}
module.exports = StudentController;