import PostModel from '../model/post.model.js'

const getPost = async (req,res) =>{
    try {
        const user = await PostModel.find({})
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

const postPost = async (req,res) =>{
    try {
        const user = await PostModel.create(req.body)
        res.status(200).send({
            data: user,
            message: "Create new user successfully",
            success: true
        })
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const putPost = async (req,res) =>{
    try {
        const field = req.query
        const user = await PostModel.findAndUpdate(field,req.body)
        res.status(200).send({
            data: user,
            message: "Update users successfully",
            success: true
        })
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const deletePosts = async (req,res) =>{
    try {
        const field = req.query
        const user = await PostModel.deleteMany(field)
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
const getPostById = async (req,res) =>{
    try {
        const user = await PostModel.find({_id: req.params.id})
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

const putPostById = async (req,res) =>{
    try {
        const id = req.params.id
        if(!id) throw {
            status: 404,
            message: 'User not found'
        }
        const user = await PostModel.updateOne({_id: id})
        res.status(200).send({
            data: user,
            message: "Update user successfully",
            success: true
        })
    } catch (error) {
        res.status(error.status || 500).send(error.message || "Internal server error")
    }
}

const deletePostById = async (req,res) =>{
    try {
        const id = req.params.id
        if(!id) throw {
            status: 404,
            message: 'User not found'
        }
        const user = await PostModel.deleteOne({_id: id})
        res.status(200).send({
            message: "Delete user successfully",
            success: true
        })
    } catch (error) {
        res.status(error.status || 500).send(error.message || "Internal server error")
    }
}

export {getPost,postPost,putPost,deletePosts,getPostById,putPostById,deletePostById}  

