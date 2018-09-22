var router = require('express').Router();
var User = require('../models/user');

router.get('/signup', function (req, res, next) {
    res.render('accounts/signup');
});


router.post('/signup', function (req, res, next) {
    var user = new User();

    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;

    User.findOne({
        email: req.body.email
    }, function (err, existingUser) {
        if (existingUser) {
            if (err) next(err); //? eslint probl
            console.log(req.body.email + ' is already exist');
            return res.redirect('/signup');
        } else {
            user.save(function (err, user) {
                if (err) next(err);

                res.json('New user has been created');
            });
        }
    });
Í
});

module.exports = router;