import express from 'express';
const router = express.Router();
import controller from '../controllers/post.controller';

router.get('/', controller.getAllPosts);
router.post('/', controller.createPost);
router.delete('/:id', controller.deletePost);

export default router;