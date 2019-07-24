import * as repo from '../repositories/users';
import { Users } from '../entities/users';
import { IUserRequest } from '../interfaces/user';
import * as joi from 'joi';

export const addUser = async (user: IUserRequest) => {
    await joi.validate(user, {
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required()
    });
    const saveUser = new Users();
    saveUser.name = user.name;
    saveUser.email = user.name;
    saveUser.password = user.password;
    return repo.save(saveUser);
};
