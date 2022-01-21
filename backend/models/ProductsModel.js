import mogooose, { mongo } from "mongoose"
import { boolean } from "webidl-conversions"


const reviewsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


const ProductsSchema = mogooose.Schema({
    user:{
        type:mongoose.Schema.Types.objectId,
        require:true,
        ref:"User"
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    reviews:[reviewsSchema],
    rating:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true,
      
    },
    numReviews:{
        type:Number,
        required:true,
      
    }
},{
   timestamps:true
})

const Product = mongoose.model("Product",ProductsSchema)

export default Product
