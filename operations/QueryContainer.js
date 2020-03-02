const dbClient = require("../operations/dbConnect");
const config = require("../config/config");

/**
* Query the cosmos DB container 
 */
async function queryContainer(key, timestamp) {
    
    let time = null;
    if(typeof timestamp === "undefined") {
        time = Math.floor((new Date()).getTime() / 1000);
    } else {
        time = +timestamp;
    }

    // query to get all data of a key
    const querySpec = {
       query: "SELECT c.key,c['value'] FROM c WHERE c.key = @key and c.time <= @timestamp ORDER BY c.time DESC",
       parameters: [
           {
               name: "@key",
               value: key
           },
           {
                name: "@timestamp",
                value: time
            }
       ]
   };
  
   try {
   const { resources } = await dbClient.database(config.database.id).container(config.container.id).items.query(querySpec, {enableCrossPartitionQuery:true}).fetchAll();
   // Logging for empty result set
   if (resources.length === 0) {
    console.warn(`No data found in the container: ${config.container.id}`);
    return 0;
    } else {
        return resources[0];
    } 
    } catch (e) {
        console.error(e);
        return 0;
     }
  };

  module.exports = queryContainer;