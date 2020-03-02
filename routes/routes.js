const express = require('express');
const keyValues = require('../reports/KeyValue');
const router = express.Router();

router.use('/key-values' , keyValues);

module.exports=router;