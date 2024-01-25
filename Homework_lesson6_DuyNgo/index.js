import express from 'express';
import mongoose from 'mongoose';
import {routesFunction} from './routes/index.js'

const server = express();

mongoose.connect('mongodb+srv://baoduyd17:BaoDuy%402010@cluster0.n4ddvre.mongodb.net/Lesson6?retryWrites=true&w=majority')

server.use(express.json());
const db = mongoose.connection
db.on('error', err => console.log(err));
db.once('open', ()=>{console.log('MongoDb is connected successfully')})

//Router
routesFunction(server)

server.listen(3000, ()=> {
    console.log('listening on port 3000');
})