import * as service from '../services/users';
import { Context } from 'koa';
import { IUserRequest } from '../interfaces/user';
// import { Users } from '../entities/users';

export const addUser = async (ctx: Context, next: () => void) => {
    const userPayload: IUserRequest = ctx.request.body;
    ctx.state.data = await service.addUser(userPayload);
    await next();
};
