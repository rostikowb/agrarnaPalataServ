import {Schema, model} from 'mongoose';

const NewsSchema = Schema(
    {
        login: {type: String, required: true},
        password: {type: String, required: true},
    }
    // {timestamps: {}},
);

export default model('User', NewsSchema);
