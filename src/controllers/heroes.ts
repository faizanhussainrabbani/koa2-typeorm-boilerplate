import * as service from '../services/heroes';
import { Context } from 'koa';
import { IHeroRequest } from '../interfaces/hero';
import { Heroes } from '../entities/heroes';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await service.getAll();
    await next();
};

export const addhero = async (ctx: Context, next: () => void) => {
    const heroPayload: IHeroRequest = ctx.request.body;
    ctx.state.data = await service.addHero(heroPayload);
    await next();
};

export const updatehero = async (ctx: Context, next: () => void) => {
    const heroPayload: Heroes = ctx.request.body;
    ctx.state.data = await service.updateHero(heroPayload);
    await next();
};
