import express from 'express';
import {getPost,postPost,putPost,deletePosts,getPostById,putPostById,deletePostById}    from '../controller/post.controller.js'

const router = express.Router();

router
            .route('/')
            .get(getPost)
            .post(postPost)
            .put(putPost)
            .delete(deletePosts)

router
            .route('/:id')
            .get(getPostById)
            .post()
            .put(putPostById)
            .delete(deletePostById)

export {router as postRouter}