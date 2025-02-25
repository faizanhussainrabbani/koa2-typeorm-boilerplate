import * as repo from '../repositories/heroes';
import { Heroes } from '../entities/heroes';
import { IHeroRequest } from '../interfaces/hero';
import * as joi from 'joi';

export const getAll = async () => {
    return repo.getAll();
};

export const addHero = async (hero: IHeroRequest) => {
    await joi.validate(hero, {
        name: joi.string().required(),
    });
    const saveHero = new Heroes();
    saveHero.name = hero.name;
    return repo.save(saveHero);
};

export const updateHero = async (hero: Heroes) => {
    await joi.validate(hero, {
        id: joi.number().required(),
        name: joi.string().required()
    });

    return repo.update(hero);
};

export const deleteHero = async (hero: Heroes) => {
    await joi.validate(hero, {
        id: joi.number().required()
    });

    return repo.del(hero);
};
