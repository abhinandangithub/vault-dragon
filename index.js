const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const port = process.env.PORT || '3000';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Calling routes for various endpoints
app.use('/api', routes);
// Root node app status
app.get('/', (req, res) => {
  res.send('App is Live!!!!!!!!!!!').status(404);
});
// Error for unavailable endpoints
app.get('*', (req, res) => {
  res.send('Not found').status(404);
});

// App listening on port 3000
app.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app; // for testing