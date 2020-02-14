import mongoose from 'mongoose';
import User from '../../models/UserModel';
import bcrypt from 'bcryptjs';

export default async function todoCreate(req, res) {
    User.find({login: req.body.login}).then(result => {
        if (result.length === 1) {
            return res.status(409).json({message: 'You already signup'});
        }
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({error: err});
            } else {
                const user = new User({
                    _id: mongoose.Types.ObjectId(),
                    login: req.body.login,
                    password: hash,
                });
                user
                    .save()
                    .then(result => res.status(201).json({result: result}))
                    .catch(err => res.status(500).json({result: err}));
            }
        });
    });
}
