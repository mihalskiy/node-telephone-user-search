const contactsController = require('../controllers').contacts;

module.exports = (app) => {
      app.get('/', function(req, res){
      if(req.session.page_views){
          req.session.page_views++;
          res.send("You visited this page " + req.session.page_views + " times");
      } else {
          req.session.page_views = 1;
          res.send("Welcome to this page for the first time!");

      }
      });

    const Users = [];

    app.get('/signup', function(req, res){
        res.render('signup');
    });

    app.post('/signup', function(req, res){
        if(!req.body.id || !req.body.password){
            res.status("400");
            res.send("Invalid details!");
        } else {
            Users.filter(function(user){
                if(user.id === req.body.id){
                    res.render('signup', {
                        message: "User Already Exists! Login or choose another user id"});
                }
            });
            let newUser = {id: req.body.id, password: req.body.password};
            Users.push(newUser);
            req.session.user = newUser;
            res.redirect('/protected_page');
        }
    });

    function checkSignIn(req, res){
        if(req.session.user){
            next();     //If session exists, proceed to page
        } else {
            var err = new Error("Not logged in!");
            console.log(req.session.user);
            next(err);  //Error, trying to access unauthorized page!
        }
    }
    app.get('/protected_page', checkSignIn, function(req, res){
        res.render('protected_page', {id: req.session.user.id})
    });

    app.get('/login', function(req, res){
        res.render('login');
    });

    app.get('/logout', function(req, res){
        req.session.destroy(function(){
            console.log("user logged out.")
        });
        res.redirect('/login');
    });

  app.post('/contacts', contactsController.create);
  app.get('/contacts', contactsController.list);
/*
  app.get('/contacts/:contactId', contactsController.retrieve);
*/
};

