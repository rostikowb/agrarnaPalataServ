import { Router } from 'express';
import checkAuth from '../middleware/checkAuth';
import newsGetAll from './controllers/news/newsGetAll';
import newsGetById from './controllers/news/newsGetById';
import newsUpdateById from './controllers/news/newsUpdateById';
import newsCreate from './controllers/news/newsCreate';
import newsDeleteById from './controllers/news/newsDeleteById';
import newsUploadFile from './controllers/news/uploadFile/newsUploadFile';

const router = Router();

router.post('/', newsGetAll);
router.post('/news', checkAuth, newsCreate);
router.post('/news/uploadFile', checkAuth, newsUploadFile);
router.get('/news/:newsId', newsGetById);
router.patch('/news/:newsId', checkAuth, newsUpdateById);
router.delete('/news/:newsId', checkAuth, newsDeleteById);

export default router;
