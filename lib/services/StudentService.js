const Reader = require("./../utils/Reader");
class StudentService{
    static Students(){
        const students = Reader.readJsonFile("visualpartners.json");
        return students;
    }

    static filterByHaveCertification( valuebool ){
        const students = StudentService.Students();
        const studentsByHaveCert = students.filter((student) => student.haveCertification == valuebool );
        console.log(studentsByHaveCert);
        return studentsByHaveCert;
    }

    static getStudentsEmailHaveCertification(valuebool){
        const students = StudentService.filterByHaveCertification(valuebool);
        const EmailHaveCertification = students.map((student) => student.email);
        return EmailHaveCertification;
    }

    static getStudentsCreditsMore500(value){
        const students = StudentService.Students();
        const studentscredmore500 = students.filter((student) => student.credits > value );
        const getnamestudents = studentscredmore500.map((student) => student.name);
        return getnamestudents;
    }
}
module.exports = StudentService;


