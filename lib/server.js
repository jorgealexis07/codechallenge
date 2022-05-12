const StudentController = require("./controllers/StudentController");
// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`App listening on port ${port}`)
})

app.get("/v1/students", (request, response) => {
    const ShowStudents = StudentController.getStudents();
    response.json(ShowStudents);
});

app.get("/v1/students/emails/:val", (request, response) => {

    let stringValue = request.params.val; 
    let boolValue = (stringValue == "true"); 
    const ShowEmailStudents = StudentController.getEmailsStudentsHaveCert(boolValue);
    response.json(ShowEmailStudents);
});

app.get("/", (request, response) => {
    response.json({message: "CODE_CHALLENGE Api welcome!"});
});