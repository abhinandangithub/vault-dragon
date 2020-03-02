const express = require("express");
const dbClient = require("../operations/dbConnect");
const config = require("../config/config");
const router = express.Router();
const queryContainer = require('../operations/QueryContainer');
const updateContainer = require('../operations/UpdateContainer');
/**
 * @description Query to return number of over exposures based on time period
 * @url /api/key-values/
 */
// Return values for the key
router.get("/:id", async (req, res) => {
    console.log(`Querying container:\n${config.container.id}`);
    try {
        let resources = await queryContainer(req.params.id,req.query.timestamp);
        if(resources === 0) {
            res.send("No values found for the key").status(400);
        } else {
            res.send(resources).status(200);        
        }
    } catch (e) {
        console.error(e);
        res.send("Internal server error! Contact the admin").status(500);
    }
  });

// Return value for the key based on history
  router.post("/", async (req, res) => {
    console.log(`Inserting to container:\n${config.container.id}`);
    try {
        let resources = await updateContainer(req.headers.Time, req.body);
        if(resources === 0) {
            res.send({"message":"Update unsuccessful"}).status(400);
        } else {
            res.send(resources).status(200);        
        }
    } catch (e) {
        console.error(e);
        res.send("Internal server error! Contact the admin").status(500);
    }
  });
  
  module.exports = router;


