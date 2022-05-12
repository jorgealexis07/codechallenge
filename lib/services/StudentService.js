class StudentService{
    static Students(students){
        const listStudents = students.map((student) => student);
        return listStudents;
    }
}
module.exports = StudentService;