import * as repo from '../repositories/users';
import { Users } from '../entities/users';
import { IUserRequest } from '../interfaces/user';
import * as joi from 'joi';
import * as util from 'util';

import * as crypto from 'crypto';
import * as jsonwebtoken from 'jsonwebtoken';

export const addUser = async (user: IUserRequest) => {
    await joi.validate(user, {
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required()
    });
    const saveUser = new Users();
    saveUser.name = user.name;
    saveUser.email = user.email;
    saveUser.password = getHash(user.password);
    return repo.save(saveUser);
};

export const validateUser = async (user: IUserRequest) => {
    await joi.validate(user, {
        email: joi.string().required(),
        password: joi.string().required()
    });

    const getUserByEmail = new Users();
    getUserByEmail.email = user.email;
    getUserByEmail.password = getHash(user.password);

    const result = await repo.getUser(getUserByEmail);

    if (result !== null && result !== undefined) {
        console.info('services - getUser - ' + util.inspect(result, {showHidden: false, depth: null}));
        return  jsonwebtoken
        .sign({
            data: user.email,
            expiresIn: '1h'
          }, 'shared-secret');
    }
};

const getHash = (password: any) => {
    return crypto.pbkdf2Sync(password, 'salt', 1000, 64, `sha512`).toString(`hex`);
};
