

// middleware function to check for logged-in users
/*const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }
};*/

const User = require('../models/index').User;

module.exports = {
    /*signup (req, res, next) {

        res.redirect('/login');
        if (req.session.user && req.cookies.user_sid) {
            res.redirect('/dashboard');
        } else {
            next();
        }
        return User
        .then((contacts) => res.status(201).send(contacts))
        .catch((error) => res.status(400).send(error));
    },*/
    create (req, res, next) {
        return User
            .create({
                userName: req.body.username,
                telephoneNumber: req.body.telephoneNumber,
                password: req.body.password
            })
        .then((contacts) => res.status(201).send(contacts))
        .catch((error) => res.status(400).send(error));
    },


};
