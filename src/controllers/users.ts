import * as service from '../services/users';
import { Context } from 'koa';
import { IUserRequest } from '../interfaces/user';

export const addUser = async (ctx: Context, next: () => void) => {
    const userPayload: IUserRequest = ctx.request.body;
    ctx.state.data = await service.addUser(userPayload);
    await next();
};

export const validateUser = async (ctx: Context, next: () => void) => {
    console.info('Sample Log - validateUser');
    const userPayload: IUserRequest = ctx.request.body;
    ctx.state.data = await service.validateUser(userPayload);
    await next();
};
