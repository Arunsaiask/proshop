import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        const conn = mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`mongodb connected`.cyan.underline)
    } catch (error) {
        console.log(`Error:${error.message}`.red.underline.bold)
        process.exit(1)
    }
   
}

export default connectDB