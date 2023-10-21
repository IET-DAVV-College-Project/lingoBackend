import express from 'express'
import Connection from './database.js'
import dotenv from 'dotenv'
import Router from './routes/questionRoute.js'
import Router1 from './routes/blogRoute.js'
import Router2 from './routes/companyRoute.js'
import cors from 'cors'
import bodyParser from 'body-parser'
dotenv.config();
const app=express()
app.use(cors());
app.use(bodyParser.json({extended:false}))
app.use(express.urlencoded({extended:true}))

app.use('/',Router1);
app.use('/q/',Router);
app.use('/api/',Router2);

app.listen(process.env.PORT,()=>{
    console.log(`started`)
})

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

