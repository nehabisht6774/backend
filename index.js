import express from 'express';
import { connectDB } from './config/dbConnection.js';
import notesRouter from "./routes/notes.route.js";

const app = express();
import cors from 'cors'

const port=3200

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectDB();

app.get('/' ,function(req,res){
    res.send("my first node")
});

app.use('./api/note', notesRouter)


app.use('/api/note', notesRouter);
app.listen(port,function(){
    console.log(`Server is running port${port}`)
})