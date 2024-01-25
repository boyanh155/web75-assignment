import mongoose from 'mongoose';
import UserModel from '../model/user.model.js';  // use for verify the jwt token (findOne)
const auth = {

     isAuthenticated : async  (req,res,next) => {
        try {
            //get the token in the headers Check isTOken
            const authentication = req.headers['authentication'] //token in headers['authentication']
            const token = authentication.split(' ')[0] === 'Bearer' ? authentication.split(' ')[1] :authentication.split(' ')[0]
            if(!token) res.status(401).send('Unauthenticated')
            // Verify Token with jwt token
            
            //req.user = user // 
            // const userid = jwt.verify(token).body.data
            const user = await UserModel.find({})
            req.user = user // lưu user vào req.user tái sử dụng ở authority
            next()

        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
    },
    isAuthorized: async  (req,res,next) => {
        try {
            //req.user verified in authentication -> use it
            const {user} = req
            const role = user.role //admin, user, guest
            // Check the role
            if(role !== 'admin') res.status(403).send('User Forbidden')
            //next()
            next()

        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
    }
}

export {auth}