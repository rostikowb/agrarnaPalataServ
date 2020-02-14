import {Schema, model} from 'mongoose';

const NewsSchema = Schema(
    {
        _id: Schema.Types.ObjectId,
        title: {type: String, required: true},
        short: {type: String, required: true},
        content: {type: String, required: true},
        key: {type: String, required: true},
        date: {type: Number, required: true},
    },
    // {timestamps: {}},
);

export default model('News', NewsSchema);
