import * as ctrl from '../controllers/users';
import * as Router from 'koa-router';

import config from '../../config';

import * as compose from 'koa-compose';

// import jwt = require('../middlewares/jwt');

const router = new Router({
    prefix: `${config.api.baseURL}/users`,
  });

router.post('/add', ctrl.addUser);

router.post('/login', ctrl.validateUser);

const routes = router.routes();
export default compose([routes]);
