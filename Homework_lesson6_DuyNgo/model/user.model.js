import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})

const UserModel = mongoose.model('user', userSchema);
export default UserModel