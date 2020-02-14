import { Router } from 'express';

import usersLogin from './controllers/users/usersLogin';
import usersCreate from './controllers/users/usersCreate';

const router = Router();

router.post('/signup', usersCreate);
router.post('/login', usersLogin);

export default router;
