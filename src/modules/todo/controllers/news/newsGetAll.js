import News from '../../models/NewsModel';

const newsGetAll = (req, res) => {
    News.find()
        .limit(6)
        .skip(req.body.skip)
        .select('-__v')
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

export default newsGetAll;
