import * as ctrl from '../controllers/heroes';
import * as Router from 'koa-router';

import config from '../../config';

import * as compose from 'koa-compose';

const router = new Router({
    prefix: `${config.api.baseURL}/heroes`,
  });

router.get('/', ctrl.getAll);

router.post('/', ctrl.addhero);

router.put('/', ctrl.updatehero);

const routes = router.routes();
export default compose([routes]);
