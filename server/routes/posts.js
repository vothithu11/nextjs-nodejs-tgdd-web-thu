import express from 'express';
import { getPosts, getIdPosts} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getIdPosts);



export default router;

