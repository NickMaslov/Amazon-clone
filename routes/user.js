var router = require('express').Router();

var User = require('./models/user');

router.post('/singup', function (req, res, next) {
    var user = new User();

    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;

    user.save(function (err) {
        if (err) return next(err);

        res.json('Successfully created a new user');

    });
});
