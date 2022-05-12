const Reader = require("./../utils/Reader");
class StudentService{
    static Students(){
        const students = Reader.readJsonFile("visualpartners.json");
        const listStudents = students.map((student) => student.students);
        return listStudents;
    }
}
module.exports = StudentService;