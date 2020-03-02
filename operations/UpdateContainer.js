const dbClient = require("./dbConnect");
const config = require("../config/config");
const keyValues = require("../models/KeyValues.json");

/**
* Update the cosmos DB container 
 */
async function updateContainer(time,body) {
    
    try {
    if(typeof timestamp === "undefined") {
        keyValues.time = Math.floor((new Date()).getTime() / 1000);
    } else {
        keyValues.time = +timestamp;
    }
    console.log(body);
    if(typeof body === "undefined" || Object.entries(body).length === 0) {
        console.warn(`Invalid JSON`);
        return 0;    
    } else {
        keyValues.key = Object.keys(body)[0];
        keyValues.value = Object.values(body)[0];
    }
    // post to all data of a key
   const { resources } = await dbClient.database(config.database.id).container(config.container.id).items.upsert(keyValues);
        return keyValues;
    } catch (e) {
        console.error(e);
        return 0;
     }
  };

  module.exports = updateContainer;