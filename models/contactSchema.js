const { default: mongoose } = require("mongoose");
const validator = require('validator')
const userSchema = mongoose.Schema({
    name:{
        type: String,
       
        
    },

    email:{
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Please Enter A Valid Email Addres")
            }
        },
        required:true
        
    },

    phoneNo:{
        type:Number,
      
        required:true
    },
    message:{
        type:String,
    }
})

const UserModel = mongoose.model("UserModel" , userSchema)
module.exports = UserModel