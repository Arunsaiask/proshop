import mongoose from "mongoose"
import products from "./data/products.js"
import users from "./data/users.js"
import dotenv from "dotenv"
import colors from "colors"
import User from "./models/UserModel.js"
import Product from "./models/ProductsModel.js"
import Order from "./models/OrderModel.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () =>{
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        const  createdUsers = await User.insertMany(users)
        const adminUser =  createdUsers[0]._id
        const sampleProducts = products.map((product)=>{
            return { ...product , user:adminUser}
        })
        await Product.insertMany(sampleProducts)
        console.log("Data Imported".green.inverse);
        process.exit()
    } catch (err) {
        console.log(`${err}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async ()=>{
    try {
      await User.deleteMany()
      await Order.deleteMany()
      await Product.deleteMany()
       console.log("Destroyed Data".red.inverse)
       process.exit()
    } catch (err) {
        console.log(`${err}`.red.inverse);
        process.exit(1)
    }
}

if(process.argv[2]=="-d"){
    destroyData()
}else{
    importData()
}

