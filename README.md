NOTE
-----------------

[![Greenkeeper badge](https://badges.greenkeeper.io/mwittig/restler-when.svg)](https://greenkeeper.io/)
This library is a fork of Troupe's [restler-q](https://github.com/troupe/restler-q), but using [when](https://github.com/cujojs/when) instead.

Installing
-----------------

    npm install restler-when


Using
-----------------

The interface is similar to Restler's interface:

    var rest = require('restler-when');

    rest.get('https://api.github.com/orgs/Troupe/repos')
      .then(function(repos) {
        assert(Array.isArray(repos));
      })
      .then(done);

Running the tests
-----------------

    npm install
    make test