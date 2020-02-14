import User from "../../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import Bcrypt from '../../../class/bcrypt'

export default async function todoCreate(req, res) {
    User.findOne({login: req.body.login})
        .exec()
        .then(async user => {
            if (!user) {
                return res.status(401).json({message: 'Auth failed'});
            } else {
                let result = new Bcrypt(req.body.password, user.password, user.login, user._id, bcrypt, jwt);
                result.hashValidation(res);
            }
        })
        .catch(err => res.status(500).json(err));
}