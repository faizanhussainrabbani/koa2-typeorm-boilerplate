import { getRepository } from 'typeorm';
import { Heroes } from '../entities/heroes';

export const getAll = async () => {
    return getRepository(Heroes).find({
        where: {
            isActive: true,
        }
    });
};

export const save = async (hero: Heroes) => {
     return getRepository(Heroes).insert(hero);
};

export const update = async (hero: Heroes) => {
    return getRepository(Heroes).save(hero);
};

export const del = async (hero: Heroes) => {
    return getRepository(Heroes).delete(hero.id);
};
