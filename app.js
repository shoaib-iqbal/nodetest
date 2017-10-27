const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var path = require('path');
var routes = require('./server/routes/index');


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// ==================ALL ROUTES GO HERE========================================
// app.use('/card', require('./server/controller/cards.js'));
routes(app);

// ============================================================================

app.use(express.static('client'));
app.set('view engine', 'jade')
// ==================== this will link node to angular========================
app.get('/*', (req, res) => 
  		res.sendFile('index.html', {
		root: path.join(__dirname, './client/')
	}));
// ============================================================================
module.exports = app;