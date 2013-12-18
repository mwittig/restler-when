var assert  = require('assert');
var rest    = require('../index');

describe('restler-when', function(){
  describe('#get()', function() {
    it('should resolve correctly', function(done) {
      rest.get('https://api.github.com/orgs/joyent/repos')
        .then(function(repos) {
          assert(Array.isArray(repos));
        })
        .then(done);
    });

    it('should fail correctly', function(done) {
      rest.get('https://api.github.com/orgs/joyent123897123897123879132789123DOES_NOT_EXIST/repos')
        .then(function() {
          assert(false, 'Expected a failure');
        })
        .otherwise(function(err) {
          assert(!(err instanceof Error));
        })
        .then(done);
    });

    it('should handle errors correctly', function(done) {
      rest.get('https://hostname_does_not_exist.11298371/')
        .then(function() {
          assert(false, 'Expected an error');
        })
        .otherwise(function(err) {
          assert(err instanceof Error);
        })
        .then(done);
    });

  });
});