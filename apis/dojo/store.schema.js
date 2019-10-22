const Joi = require("joi");

const storeObject = Joi.object().keys({
  storeFilterMatch: Joi.boolean(),
  stores: Joi.array().items({
    storeTypeId: Joi.number(),
    name: Joi.string(),
    photo: Joi.string(),
    phone: Joi.string(),
    eudoraCode: Joi.string(),
    googleBusinessLink: Joi.string(),
    address: Joi.string(),
    longitude: Joi.number(),
    latitude: Joi.number()
  })
});

module.exports = {
    storeObject
};