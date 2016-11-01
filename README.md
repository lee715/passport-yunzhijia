# passport-yunzhijia


[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with yunzhijia

## Install

    $ npm install passport-yunzhijia

## Usage

#### Create an Application

Before using `passport-evernote`, you must first get an Evernote API key. If you
have not already done so, an API key can be requested at [Evernote Developers](https://dev.evernote.com/).
Your will be issued an API key and secret, which need to be provided to the
strategy.

#### Configure Strategy

The Evernote authentication strategy authenticates users using an Evernote
account and OAuth tokens.  The API key secret obtained from Evernote are
supplied as options when creating the strategy.  The strategy also requires a
`verify` callback, which receives the access token and corresponding secret as
arguments, as well as `profile` which contains the authenticated user's Evernote
profile.   The `verify` callback must call `cb` providing a user to complete
authentication.

    passport.use(new YunzhijiaStrategy({
        consumerKey: Yunzhijia_CONSUMER_KEY,
        consumerSecret: Yunzhijia_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/yunzhijia/callback"
      },
      function(token, tokenSecret, profile, cb) {
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'yunzhijia'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/yunzhijia/login',
      passport.authenticate('yunzhijia'));

    app.get('/yunzhijia/callback',
      passport.authenticate('yunzhijia', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2016 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
