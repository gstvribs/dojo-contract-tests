const Enjoi = require("enjoi");

const storeObject = Enjoi.schema(
  JSON.parse(`{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "storeFilterMatch",
    "stores"
  ],
  "properties": {
    "storeFilterMatch": {
      "$id": "#/properties/storeFilterMatch",
      "type": "boolean",
      "title": "The Storefiltermatch Schema",
      "default": false,
      "examples": [
        true
      ]
    },
    "stores": {
      "$id": "#/properties/stores",
      "type": "array",
      "title": "The Stores Schema",
      "items": {
        "$id": "#/properties/stores/items",
        "type": "object",
        "title": "The Items Schema",
        "required": [
          "name",
          "photo",
          "phone",
          "eudoraCode",
          "googleBusinessLink",
          "address",
          "latitude",
          "longitude",
          "distance",
          "storeType",
          "storeFilters"
        ],
        "properties": {
          "name": {
            "$id": "#/properties/stores/items/properties/name",
            "type": "string",
            "title": "The Name Schema",
            "default": "",
            "examples": [
              "Loja 1"
            ],
            "pattern": "^(.*)$"
          },
          "photo": {
            "$id": "#/properties/stores/items/properties/photo",
            "type": "string",
            "title": "The Photo Schema",
            "default": "",
            "examples": [
              "loja1.png"
            ],
            "pattern": "^(.*)$"
          },
          "phone": {
            "$id": "#/properties/stores/items/properties/phone",
            "type": "string",
            "title": "The Phone Schema",
            "default": "",
            "examples": [
              "656651961"
            ],
            "pattern": "^(.*)$"
          },
          "eudoraCode": {
            "$id": "#/properties/stores/items/properties/eudoraCode",
            "type": "string",
            "title": "The Eudoracode Schema",
            "default": "",
            "examples": [
              "2030"
            ],
            "pattern": "^(.*)$"
          },
          "googleBusinessLink": {
            "$id": "#/properties/stores/items/properties/googleBusinessLink",
            "type": "string",
            "title": "The Googlebusinesslink Schema",
            "default": "",
            "examples": [
              "https://goo.gl/maps/4DpSybZXugjasBR68"
            ],
            "pattern": "^(.*)$"
          },
          "address": {
            "$id": "#/properties/stores/items/properties/address",
            "type": "string",
            "title": "The Address Schema",
            "default": "",
            "examples": [
              "Av. Profa. Ana Maria Silvestre Adade, 485"
            ],
            "pattern": "^(.*)$"
          },
          "latitude": {
            "$id": "#/properties/stores/items/properties/latitude",
            "type": "number",
            "title": "The Latitude Schema",
            "default": 0.0,
            "examples": [
              -22.8278624
            ]
          },
          "longitude": {
            "$id": "#/properties/stores/items/properties/longitude",
            "type": "number",
            "title": "The Longitude Schema",
            "default": 0.0,
            "examples": [
              -47.0459628
            ]
          },
          "distance": {
            "$id": "#/properties/stores/items/properties/distance",
            "type": "number",
            "title": "The Distance Schema",
            "default": 0,
            "examples": [
              4
            ]
          },
          "storeType": {
            "$id": "#/properties/stores/items/properties/storeType",
            "type": "string",
            "title": "The Storetype Schema",
            "default": "",
            "examples": [
              "Eudora"
            ],
            "pattern": "^(.*)$"
          },
          "storeFilters": {
            "$id": "#/properties/stores/items/properties/storeFilters",
            "type": "array",
            "title": "The Storefilters Schema"
          }
        }
      }
    }
  }
}`)
);

module.exports = {
    storeObject
};