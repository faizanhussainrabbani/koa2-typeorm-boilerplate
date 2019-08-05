import * as ctrl from '../controllers/heroes';
import * as Router from 'koa-router';

import config from '../../config';

import * as compose from 'koa-compose';
import * as jwt from 'koa-jwt';

const router = new Router({
    prefix: `${config.api.baseURL}/heroes`,
  });

router.get('/'/*, jwt({ secret: 'shared-secret' })*/, ctrl.getAll);

router.post('/', ctrl.addhero);

router.put('/', ctrl.updatehero);

router.delete('/', ctrl.deletehero);

const routes = router.routes();
export default compose([routes]);
