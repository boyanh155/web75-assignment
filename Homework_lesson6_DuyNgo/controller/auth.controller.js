import UserModel from "../model/user.model.js";

const login = async (req, res) => {
    try {
        //check user co ton tai khong
        const user = await UserModel.findOne({email: req.body.email})
        if(!user) throw {
            status: 401,
            message: "User not found",
        }
        // check password (pass + salt => hash jwt bcrypt password)

        //create token =. header
    /*  const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET_KEY, {expiresIn: '1 hour'}) */

        //response
        res.status(200).send("Login successful")
    } 
    catch (error) {
    res.status(error.status || 500).send({
        message: error.message || 'Internal Server Error',
        success: false
    })
    }
}

const register = async (req,res) => {
    try {
        const user = await UserModel.findOne({
            email: req.body.email
        })
        if(user) throw {
            status: 400,
            message: "user is already registered"
        }
        //const salt = await bcrypt.genSalt(10);
        //const password = await bcrypt.hash(req.body.password, salt);

        const newUser = await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        // password: password (the hashed one)
        role: user
        })

        res.status(200).send({
            message: "Register successful",
            success: true,
            data: newUser
        })
    } catch (error) {
        res.status(error.status || 500).send(error.message || "Internal Server Error");
    }
}

export {login, register}