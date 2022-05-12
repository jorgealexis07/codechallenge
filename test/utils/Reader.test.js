const Reader = require("./../../lib/utils/Reader");


describe("Tests para Reader", () => {
    test("Requerimiento 1: probar cuando se envia una ruta invalida", () => {
        const explorers = Reader.readJsonFile("visualpartner.json");
        expect(explorers).toBe("visualpartner.json");
    });

    test("Requerimiento 2: probar cuando se envia una ruta valida", () => {
        const explorers = Reader.readJsonFile("visualpartners.json");
        expect(explorers);
    });

});
