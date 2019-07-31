import * as repo from '../repositories/users';
import { Users } from '../entities/users';
import { IUserRequest } from '../interfaces/user';
import * as joi from 'joi';

import util = require('util');

export const addUser = async (user: IUserRequest) => {
    await joi.validate(user, {
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required()
    });
    const saveUser = new Users();
    saveUser.name = user.name;
    saveUser.email = user.email;
    saveUser.password = user.password;
    return repo.save(saveUser);
};

export const validateUser = async (user: IUserRequest) => {
    await joi.validate(user, {
        email: joi.string().required(),
        password: joi.string().required()
    });

    const getUserByEmail = new Users();
    getUserByEmail.email = user.email;

    const result = await repo.getUser(getUserByEmail);

    if (result !== null) {
        console.info('services - getUser - ' + util.inspect(result, {showHidden: false, depth: null}));
    }
};
