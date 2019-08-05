import * as service from '../services/users';
import { Context } from 'koa';
import { IUserRequest } from '../interfaces/user';

export const addUser = async (ctx: Context, next: () => void) => {
    const userPayload: IUserRequest = ctx.request.body;
    ctx.state.data = await service.addUser(userPayload);
    await next();
};

export const validateUser = async (ctx: Context, next: () => void) => {
    const userPayload: IUserRequest = ctx.request.body;
    const result = await service.validateUser(userPayload);
    if (result !== null && result !== undefined) {
        console.info('CTRL - Result found!');
        ctx.state.data = result;
    } else {
        console.info('CTRL - Result not found!');
        ctx.state.meta = {
            status: 401
          };
    }
    await next();
};
