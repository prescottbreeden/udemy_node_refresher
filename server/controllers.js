const User = require('../models/user');

module.exports = {

    root: function(req, res) {
        User.findOne({}, function(err, doc) {
            if(err) {
                return res.send('Error!');
            }
            res.render('node', {title: 'Cool, huh!', user: doc});
        })
    },
    process: function(req, res) {
        console.log(req.body)
        var email = req.body.email;
        var newUser = new User ({
            first_name: 'Prescott',
            last_name: 'Breeden',
            password: 'supersecret',
            email: email
        });
        newUser.save(function(err, result) {
            if(err) {console.log('oops')}
            else{console.log(result)}
        });

        res.redirect('/')
    }
}