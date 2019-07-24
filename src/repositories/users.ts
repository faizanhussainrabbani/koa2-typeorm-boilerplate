import { getRepository } from 'typeorm';
import { Users } from '../entities/users';

export const save = async (user: Users) => {
    return getRepository(Users).insert(user);
};
