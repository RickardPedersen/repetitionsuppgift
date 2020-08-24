import Router from 'express';
import controller from '../controllers/commentsController.mjs';

const router = new Router()

console.log("commentsRoute körs")

router.get('/comments', controller.getCommentsController)
router.get('/comments/:id', controller.getSingleCommentController)
router.post('/comments', controller.postCommentController)
router.delete('/comments/:id', controller.deleteCommentController)
router.patch('/comments/:id', controller.patchCommentController)

export default router;