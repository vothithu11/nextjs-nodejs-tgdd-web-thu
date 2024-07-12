import express from 'express';
import { getPosts } from '../controllers/posts.js';
const router = express.Router();
router.get('/', getPosts);
export default router;
// import express from 'express';
// import { getPosts, getSamsungPosts } from '../controllers/posts.js';

// const router = express.Router();

// router.get('/iphone', getPosts);
// router.get('/samsung', getSamsungPosts);

// export default router;
