const CosmosClient = require('@azure/cosmos').CosmosClient;
const config = require('../config/config');

const endpoint = config.endpoint;
const key = config.key;

// Azure Cosmos DB database connections
const client = new CosmosClient({ endpoint, key });

module.exports = client;