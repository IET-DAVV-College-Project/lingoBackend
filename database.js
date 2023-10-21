import mongoose from "mongoose"
const Connection= async(username,password)=>{
        const url=`mongodb+srv://admin_sahaj:9tqc9ZJDw49pslU3@cluster0.wrfpvze.mongodb.net/?retryWrites=true&w=majority`
        try{
            await mongoose.connect(url,{useNewUrlParser:true});
            console.log(`db connected`)
        }catch(error){
            console.log(`${error}`)
        }
}

export default Connection;

