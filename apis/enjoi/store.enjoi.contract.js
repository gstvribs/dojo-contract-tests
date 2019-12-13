const joiAssert = require("joi-assert");
const schema = require("./store.enjoi.schema");
const request = require("supertest");

it("Enjoi - Validar resposta sucesso", done => {
  request(global.baseStore)
    .get(global.endpointExternal.storeBasePath)
    .expect(200)
    .end(function(error, response) {
      if (error) {
        console.log(response.body);
        return done(error);
      }
      joiAssert(response.body, schema.storeObject);
      done();
    });
});
