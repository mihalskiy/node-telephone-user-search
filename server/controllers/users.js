

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
    create (req, res) {
        return User
            .create({
                userName: req.body.username,
                telephoneNumber: req.body.telephoneNumber,
                password: req.body.password
            })
        .then((users) => res.status(201).send(users))
        .catch((error) => res.status(400).send(error));
    },
    login (req, res) {
        const username = req.body.username,
            password = req.body.password;
        return User
            .findOne({ where: { username: username } }).then(function (user) {
                if (!user) {
                    return res.status(404).send({
                        message: 'user Not Found',
                    });
                } else if (!user.validPassword(password)) {
                    return res.status(404).send({
                        message: 'password Not Found',
                    });
                } else {
                    req.session.user = user.dataValues;
                }
            })
            .then((users) => res.status(201).send(users))
            .catch((error) => res.status(400).send(error));
    },
    logout (req, res) {

        if (req.session.user && req.cookies.user_sid) {
            res.clearCookie('user_sid');
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
        return User
            .then((users) => res.status(201).send(users))
            .catch((error) => res.status(400).send(error));
    },



};
