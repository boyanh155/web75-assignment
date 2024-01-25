import express from 'express';
import {getUser,postUser,putUser,deleteUsers,getUserById,putUserById,deleteUserById}  from '../controller/user.controller.js'

const userRouter = express.Router();

userRouter
            .route('/')
            .get(getUser)
            .post(postUser)
            .put(putUser)
            .delete(deleteUsers)

userRouter
            .route('/:id')
            .get(getUserById)
            .post()
            .put(putUserById)
            .delete(deleteUserById)

export {userRouter}