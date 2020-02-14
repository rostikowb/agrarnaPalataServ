import Todo from '../../models/NewsModel';
import mongoose from 'mongoose';

const newsGetById = (req, res) => {
    const id = req.params.newsId;
    if (mongoose.Types.ObjectId.isValid(id)) {
        Todo.findById(id)
            .select('-__v')
            .exec()
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json('Новини з таким id не існує');
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: err});
            });
    } else {
        res.status(404).json('Новини з таким id не існує');
    }
};
export default newsGetById;
