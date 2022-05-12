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
