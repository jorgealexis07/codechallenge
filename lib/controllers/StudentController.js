const StudentService = require("./../../lib/services/StudentService");


class StudentController{
    static getStudents(){
        return StudentService.Students();
    }
    
    static getEmailsStudentsHaveCert(val){
       return StudentService.getStudentsEmailHaveCertification(val);
    }

    
}
module.exports = StudentController;