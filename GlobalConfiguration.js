const Joi = require("joi");
const joiAssert = require("joi-assert");
const processArgs = require("yargs").argv;

global.Joi = Joi;
global.joiAssert = joiAssert;
global.baseStore = processArgs.baseStore;

global.endpointExternal = {
  storeBasePath: "/api/v1/Store"
};
