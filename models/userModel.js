const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userdetails=new Schema({
    firstName:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    },
    mobileNumber:{
        type:Number,
        default:''
    },
    countryCode:{
        type:Number,
        default:''
    },
    createdOn:{
        type:Date,
        default:Date.now()
    }
})

mongoose.model('User',userdetails)