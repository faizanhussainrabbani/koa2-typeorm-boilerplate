import { getRepository } from 'typeorm';
import { Users } from '../entities/users';

export const save = async (user: Users) => {
    return getRepository(Users).insert(user);
};

export const getUser = async (user: Users) => {
    console.info('repo - getUser - Email - ' + user.email);
    return getRepository(Users).findOne({ email: user.email, password: user.password });
};
