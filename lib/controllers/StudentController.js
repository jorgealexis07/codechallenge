const StudentService = require("./../../lib/services/StudentService");


class StudentController{
    static getStudents(){
        return StudentService.Students();
    }
    
    static getEmailsStudentsHaveCert(val){
       return StudentService.getStudentsEmailHaveCertification(val);
    }

    static getStunentsNamecreditsmore500(val){
        return StudentService.getStudentsCreditsMore500(val)
    }

    
}
module.exports = StudentController;