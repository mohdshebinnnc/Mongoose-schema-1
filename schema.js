const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({

    username:{
        type: String,
        required:[true,"Please fill the username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Please fill the email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please fill the password"]
    },
    roles:{
        type:[String]
    },

    Profile:{
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        age:{
            type:Number
        }
    },

    lastLogin:{
        type:Date
    },
},
{
    timestamps: true
}
)

const Users=mongoose.model("Users",userSchema)
module.exports=Users
