const Enjoi = require("enjoi");

const storeObject = Enjoi.schema(
  JSON.parse(`
  {
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
            "storeTypeId",
            "name",
            "photo",
            "phone",
            "eudoraCode",
            "googleBusinessLink",
            "address",
            "longitude",
            "latitude"
          ],
          "properties": {
            "storeTypeId": {
              "$id": "#/properties/stores/items/properties/storeTypeId",
              "type": "integer",
              "title": "The Storetypeid Schema",
              "default": 0,
              "examples": [
                1
              ]
            },
            "name": {
              "$id": "#/properties/stores/items/properties/name",
              "type": "string",
              "title": "The Name Schema",
              "default": "",
              "examples": [
                "Marina"
              ],
              "pattern": "^(.*)$"
            },
            "photo": {
              "$id": "#/properties/stores/items/properties/photo",
              "type": "string",
              "title": "The Photo Schema",
              "default": "",
              "examples": [
                "https://encontrareudora.blob.core.windows.net/dev/foto-perfil/marina.jpg"
              ],
              "pattern": "^(.*)$"
            },
            "phone": {
              "$id": "#/properties/stores/items/properties/phone",
              "type": "string",
              "title": "The Phone Schema",
              "default": "",
              "examples": [
                "19981021674"
              ],
              "pattern": "^(.*)$"
            },
            "eudoraCode": {
              "$id": "#/properties/stores/items/properties/eudoraCode",
              "type": "string",
              "title": "The Eudoracode Schema",
              "default": "",
              "examples": [
                "12345"
              ],
              "pattern": "^(.*)$"
            },
            "googleBusinessLink": {
              "$id": "#/properties/stores/items/properties/googleBusinessLink",
              "type": "string",
              "title": "The Googlebusinesslink Schema",
              "default": "",
              "examples": [
                "https://goo.gl/maps/pebts6FL7oJBREYd9"
              ],
              "pattern": "^(.*)$"
            },
            "address": {
              "$id": "#/properties/stores/items/properties/address",
              "type": "string",
              "title": "The Address Schema",
              "default": "",
              "examples": [
                "R. Vicente Stancato, 175 - Chácara Santa Margarida, Campinas - SP"
              ],
              "pattern": "^(.*)$"
            },
            "longitude": {
              "$id": "#/properties/stores/items/properties/longitude",
              "type": "number",
              "title": "The Longitude Schema",
              "default": 0.0,
              "examples": [
                -47.071664
              ]
            },
            "latitude": {
              "$id": "#/properties/stores/items/properties/latitude",
              "type": "number",
              "title": "The Latitude Schema",
              "default": 0.0,
              "examples": [
                -22.795257
              ]
            }
          }
        }
      }
    }
  }
  `)
);

module.exports = {
    storeObject
};