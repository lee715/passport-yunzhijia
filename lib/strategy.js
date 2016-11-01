// Load modules.
var util = require('util')
  , OAuthStrategy = require('passport-oauth1');

function Strategy(options, verify) {
  options = options || {};
  options.requestTokenURL = options.requestTokenURL || 'http://kdweibo.com/snsapi/oauth/request_token';
  options.accessTokenURL = options.accessTokenURL || 'http://kdweibo.com/snsapi/oauth/access_token';
  options.userAuthorizationURL = options.userAuthorizationURL || 'http://kdweibo.com/snsapi/oauth/authorize';
  options.sessionKey = options.sessionKey || 'oauth:yunzhijia';

  OAuthStrategy.call(this, options, verify);
  this.name = 'yunzhijia';
}

util.inherits(Strategy, OAuthStrategy);

Strategy.prototype.userProfile = function(token, tokenSecret, params, done) {
  return done(null, params);
}

module.exports = Strategy;
