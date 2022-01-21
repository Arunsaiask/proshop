import mogooose, { mongo } from "mongoose"
import { boolean } from "webidl-conversions"

const UseSchema = mogooose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:boolean,
        required:true,
        default:false,
    }
},{
   timestamps:true
})

const User = mongoose.model("User",UseSchema)

export default User
