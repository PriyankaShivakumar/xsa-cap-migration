/*eslint no-console: 0, no-unused-vars: 0*/
'use strict';

var async_xsjs = require('@sap/async-xsjs');
var xsenv = require('@sap/xsenv');
var port = process.env.PORT || 3000;

var options = {
    anonymous: true,
     // remove to authenticate calls
    redirectUrl: '/index.xsjs'
};

// configure HANA
try {
    options = Object.assign(options, xsenv.getServices({ hana: { tag: 'hana' } }));
} catch (err) {
    console.log('[WARN]', err.message);
}

// configure UAA
try {
    options = Object.assign(options, xsenv.getServices({ uaa: { tag: 'xsuaa' } }));
} catch (err) {
    console.log('[WARN]', err.message);
}

// start server
async_xsjs(options).then(async_xsjs_server => {
    async_xsjs_server.listen(port, err => {
        if (!err) {
            console.log('Node XS server listening on port %d', port);
        } else {
            console.log('Node XS server failed to start on port %d', port);
        }
    });
});
export default {async_xsjs,xsenv,port,options};
