const contactsController = require('../controllers').contacts;
const usersController = require('../controllers').users;


module.exports = (app) => {

    // route for user signup
    //app.get('/register', usersController.signup);
    app.post('/register', usersController.create);
        /*.get(sessionChecker, (req, res) => {
            res.sendFile(__dirname + '/views/signup.html');
        })
        .post((req, res) => {
            User.create({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password
            })
                .then(user => {
                    req.session.user = user.dataValues;
                    res.redirect('/dashboard');
                })
                .catch(error => {
                    res.redirect('/signup');
                });
        });*/


/*// route for user Login
    app.route('/login')
        .get(sessionChecker, (req, res) => {
            res.sendFile(__dirname +'/views/login.html');
        })
        .post((req, res) => {
            let userName = req.body.userName,
                password = req.body.password;

            User.findOne({ where: { userName: userName } }).then(function (user) {
                if (!user) {
                    res.redirect('/login');
                } else if (!user.validPassword(password)) {
                    res.redirect('/login');
                } else {
                    req.session.user = user.dataValues;
                    res.redirect('/dashboard');
                }
            });
        });


// route for user's dashboard
    app.get('/dashboard', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            res.sendFile(__dirname + '/views/dashboard.html');
        } else {
            res.redirect('/login');
        }
    });



// route for user logout
    app.get('/logout', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            res.clearCookie('user_sid');
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    });


// route for handling 404 requests(unavailable routes)
    app.use(function (req, res, next) {
        res.status(404).send("Sorry can't find that!")
    });

    // start the express server
    app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));





// route for handling 404 requests(unavailable routes)
    app.use(function (req, res, next) {
        res.status(404).send("Sorry can't find that!")
    });*/

    // start the express server
    //app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));



    app.post('/contacts', contactsController.create);
  app.get('/contacts', contactsController.list);
};

