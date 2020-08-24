import Router from 'express';
import controller from '../controllers/postsController.mjs';

const router = new Router()

console.log("postsRoute körs")

router.get('/posts', controller.getPostsController)
router.get('/posts/:id', controller.getSinglePostController)
router.post('/posts', controller.postPostController)
router.delete('/posts/:id', controller.deletePostController)
router.patch('/posts/:id', controller.patchPostController)

export default router;