import express, { Router } from 'express';
const router: Router = express.Router();

import postRoute from './post.route';

router.use('/post', postRoute);

export default router;