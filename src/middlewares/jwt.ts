import * as compose from 'koa-compose';
import * as koaJwt from 'koa-jwt';
import { Context } from 'koa';

const handler = koaJwt({
    secret: 'Secret Key!'
});

export default () => compose([handler]);

// import koaJwt = require('koa-jwt');

// module.exports = koaJwt({
//   secret: 'A very secret key', // Should not be hardcoded
// });
