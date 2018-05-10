var controller = require('../server/controllers')
var User = require('../models/user');

module.exports = function(app) {
    
    app.get('/', function(req, res) {
        controller.root(req, res);
    })

    app.post('/process', function(req, res) {
        controller.process(req, res);
    })
}

