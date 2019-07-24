import * as ctrl from '../controllers/users';
import * as Router from 'koa-router';

import config from '../../config';

import * as compose from 'koa-compose';

const router = new Router({
    prefix: `${config.api.baseURL}/users`,
  });

router.post('/', ctrl.addUser);

const routes = router.routes();
export default compose([routes]);
