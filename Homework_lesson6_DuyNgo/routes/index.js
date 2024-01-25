import {userRouter} from './user.route.js'
import { postRouter } from './post.route.js'
import { authRouter } from './auth.route.js'
import { auth } from '../middleware/auth.middleware.js'
const routes = [
    {
        path: '/user',
        router: userRouter
    },
    {
        path: '/post',
        router: postRouter
    },
    {
        path: '/auth',
        router: authRouter
    }
    // {
    //     path: '/',
    //     router: 'router'
    // },
]
const routeFcn = (server) => {

    routes.forEach(route => {
        if (route.path === '/auth')
        (server.use(route.path, route.router))
        else if (route.path === '/post')
        (server.use(route.path, auth.isAuthenticated, route.router))
        else if (route.path === '/user')
        (server.use(route.path, auth.isAuthenticated, auth.isAuthorized, route.router))
    })
}

export {routeFcn as routesFunction}