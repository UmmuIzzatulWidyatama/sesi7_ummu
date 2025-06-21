const { expect } = require("chai");
const Ajv = require("ajv");

// Inisialisasi AJV dengan opsi untuk menampilkan semua error
const ajv = new Ajv({ allErrors: true });

describe("Validasi JSON Schema", () => {
  it("should validate response against schema", () => {
    // Data respons yang akan divalidasi
    const responseData = {
      name: "Izza",
      job: "Leader",
    };

    // Definisi skema JSON
    const schema = {
      type: "object",
      properties: {
        name: { type: "string" },
        job: { type: "string" }
      },
      required: ["name", "job"],
    };

    // Kompilasi dan validasi skema
    const validate = ajv.compile(schema);
    const isValid = validate(responseData);

    // Cetak error jika tidak valid
    if (!isValid) {
      console.error("Schema validation errors:", validate.errors);
    }

    // Assertion
    expect(isValid, JSON.stringify(validate.errors, null, 2)).to.be.true;
  });
});
