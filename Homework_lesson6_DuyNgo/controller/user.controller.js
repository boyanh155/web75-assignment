import UserModel from '../model/user.model.js'

const getUser = async (req,res) =>{
    try {
        const user = await UserModel.find({})
        if(!user) throw {
            status: 404,
            message: 'User not found'
        }
        res.status(200).send({
            data: user,
            message: "Get data successfully",
            success: true
        })
    } catch (error) {
        res.status(error.status || 500).send(error.message || "Internal server error")
    }
}

const postUser = async (req,res) =>{
    try {
        const user = await UserModel.create(req.body)
        res.status(200).send({
            data: user,
            message: "Create new user successfully",
            success: true
        })
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const putUser = async (req,res) =>{
    try {
        const field = req.query
        const user = await UserModel.findAndUpdate(field,req.body)
        res.status(200).send({
            data: user,
            message: "Update users successfully",
            success: true
        })
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const deleteUsers = async (req,res) =>{
    try {
        const field = req.query
        const user = await UserModel.deleteMany(field)
        res.status(200).send({
            message: "Delete users successfully",
            success: true
        })
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

/*********************************************************************** */
//by id
const getUserById = async (req,res) =>{
    try {
        const user = await UserModel.find({_id: req.params.id})
        if(!user) throw {
            status: 404,
            message: 'User not found'
        }
        res.status(200).send({
            data: user,
            message: "Get data successfully",
            success: true
        })
    } catch (error) {
        res.status(error.status || 500).send(error.message || "Internal server error")
    }
}

const putUserById = async (req,res) =>{
    try {
        const id = req.params.id
        if(!id) throw {
            status: 404,
            message: 'User not found'
        }
        const user = await UserModel.updateOne({_id: id})
        res.status(200).send({
            data: user,
            message: "Update user successfully",
            success: true
        })
    } catch (error) {
        res.status(error.status || 500).send(error.message || "Internal server error")
    }
}

const deleteUserById = async (req,res) =>{
    try {
        const id = req.params.id
        if(!id) throw {
            status: 404,
            message: 'User not found'
        }
        const user = await UserModel.deleteOne({_id: id})
        res.status(200).send({
            message: "Delete user successfully",
            success: true
        })
    } catch (error) {
        res.status(error.status || 500).send(error.message || "Internal server error")
    }
}

export {getUser,postUser,putUser,deleteUsers,getUserById,putUserById,deleteUserById}  

