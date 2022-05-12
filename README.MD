## CODE CHALLENGE

### Dependencias que utilice en el proyecto:

- JEST
    Utilice jest para realizar pruebas unitarias a mi código.

- LINTER
    Utilice linter para darle formato y una mejor estructura a mi código.
    JS y cada lenguaje tienen herramientas para ayudarnos a cuidar la legibilidad en nuestro código, se les conoce como linters.

Instalacion de ESLint en el proyecto
´npm install eslint --save-dev´

Ejecute el comando para generar la configuración del linter:
´npm init @eslint/config´

Al finalizar esto te creará un archivo .eslintrc.js con la configuración del linter.

Agrega tu configuración, haz que tu archivo .eslintrc.js se parezca a este:
´
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
´

Automatizacion los comandos de eslint en el package.json:
´
  "scripts": {
    "test": "node ./node_modules/.bin/jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
  }
´
Ejecuta ´npm run linter´ para que el linter se ejecute y te diga todas las inconsistencias de escritura.

Corre npm run linter-fix y tus archivos ahora quedarán con el mejor formato.

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


### Diseño de mis componentes:

![Image text](https://github.com/jorgealexis07/codechallenge/blob/master/images/DiagramCodeChallenge.PNG)