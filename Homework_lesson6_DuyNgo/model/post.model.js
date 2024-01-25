import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const PosstModel = mongoose.model('post', postSchema);
export default PosstModel