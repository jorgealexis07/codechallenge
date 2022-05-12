## CODE CHALLENGE

### Dependencias que utilice en el proyecto:

- JEST:
       Utilice jest para realizar pruebas unitarias a mi código.

- LINTER:
        Utilice linter para darle formato y una mejor estructura a mi código.
    JS y cada lenguaje tienen herramientas para ayudarnos a cuidar la legibilidad en nuestro código, se les conoce como linters.

Instalacion de ESLint en el proyecto
~~~ 
npm install eslint --save-dev 
~~~

Ejecute el comando para generar la configuración del linter:
~~~
npm init @eslint/config
~~~

Al finalizar esto te creará un archivo ` .eslintrc.js ` con la configuración del linter.

Agrega tu configuración, haz que tu archivo `.eslintrc.js` se parezca a este:

~~~
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};
~~~

Automatizacion los comandos de eslint en el `package.json`:
~~~
  "scripts": {
    "test": "node ./node_modules/.bin/jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
  }
~~~
Ejecuta `npm run linter` para que el linter se ejecute y te diga todas las inconsistencias de escritura.

Corre `npm run linter-fix` y tus archivos ahora quedarán con el mejor formato.

- EXPRESS (SERVIDOR)
    Express lo utilice para la creacion de mi API.

### Github Actions 

Cree un nuevo archivo en la ruta: .github/workflows/test.yml
Con el siguiente contenido:

~~~
´
name: Run Tests in my project every push on GitHub

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Run Jest
      uses: stefanoeb/jest-action@1.0.3

´
~~~

Ya implemente GitHub Actions que automatizará la ejecución de las pruebas cada vez que haga PUSH al repositorio en GitHub.

Vamos a la sección de actions y verificamos que exista un workflow en ejecución.
![Image text](https://github.com/jorgealexis07/codechallenge/blob/master/images/actionsgit.PNG)


### Diseño de mis componentes:

![Image text](https://github.com/jorgealexis07/codechallenge/blob/master/images/DiagramCodeChallenge.PNG)


### Codigo y testeo de nuestro Reader de nuestro JSON.
`Reader.js`
~~~
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
~~~
Aqui realizamos la lectura de nuestro archivo `visualpartners.json`.


En el `reader.test.js` hice las siguientes pruebas.
~~~
const Reader = require("./../../lib/utils/Reader");

describe("Tests para Reader", () => {
    test("Requerimiento 1: probar cuando se envia una ruta invalida", () => {
        const students = Reader.readJsonFile("visualpartner.json");
        expect(students).toBe("visualpartner.json");
    });

    test("Requerimiento 2: probar cuando se envia una ruta valida", () => {
        const students = Reader.readJsonFile("visualpartners.json");
        expect(students);
    });
});
~~~

### Creacion y testeo de nuestro `StudentService.js` .
Importo el Reader para leer los datos que contiene el JSON y asi obtener los requerimientos solicitados.

~~~
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
~~~

### Creacion y testeo de nuestro `StudentController.js` .
Importacion del `StudentService` para pasar los parametros del servidor o API.
~~~
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
~~~

### Creacion del `server.js` y sus metodos GET.
Importacion del `StudentService` para pasar los parametros del servidor o API.
Y obtenemos los requerimientos solicitados por Visual Partner Ship:
~~~
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

app.get("/v1/students/credits/:credit", (request, response) => {
    let credit = request.params.credit; 
    const ShowStudents = StudentController.getStunentsNamecreditsmore500(credit);
    response.json(ShowStudents);
});

app.get("/", (request, response) => {
    response.json({message: "CODE_CHALLENGE Api welcome!"});
});
~~~

### LISTO YA TENEMOS NUESTRA API LISTA Y OPERANDO.

Funcionalidad de los Requerimientos:

1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
ruta: `localhost:3000/v1/students`
![Image text](https://github.com/jorgealexis07/codechallenge/blob/master/images/Requerimiento1.PNG)

2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
ruta: `localhost:3000/v1/students/emails/:val`
![Image text](https://github.com/jorgealexis07/codechallenge/blob/master/images/Requerimiento2.PNG)

3. Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
ruta: `localhost:3000/v1/students/credits/600`
![Image text](https://github.com/jorgealexis07/codechallenge/blob/master/images/Requerimiento3.PNG)