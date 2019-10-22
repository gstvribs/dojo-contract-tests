const joiAssert = require("joi-assert");
const schema = require("./store.schema");
const request = require("supertest");

it("Joi - Validar resposta sucesso", done => {
    request(global.baseStore)
      .get(global.endpointExternal.storeBasePath)      
      .expect("Content-type", /json/)
      .expect(200)
      .end((error, response) => {
        joiAssert(response.body, schema.storeObject);
        done(error);
      });
  });