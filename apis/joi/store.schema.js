const Joi = require("joi");

const storeObject = Joi.object(
  {
    storeFilterMatch: Joi.boolean().required(),
    stores: Joi.array().items(
      Joi.object({
        name: Joi.string(),
        photo: Joi.string(),
        phone: Joi.string(),
        eudoraCode: Joi.string(),
        googleBusinessLink: Joi.string(),
        address: Joi.string(),
        latitude: Joi.number(),
        longitude: Joi.number(),
        distance: Joi.number(),
        storeType: Joi.string(),
        storeFilters: Joi.array()
      })
    )
  }
)

module.exports = {
  storeObject
};