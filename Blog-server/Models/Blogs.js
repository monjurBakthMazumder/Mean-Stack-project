const mongoose=require("mongoose");
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    authorName:{
        type:String,
        required:[true,"Author Name is required"]
    },
    authorEmail:{
        type:String,
        required:[true,"Author Email is required"]
    },
    keywords:{
        type:String,
        required:[true,"Keywords is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    category:{
        type:String,
        required:[true,"Category is required"]
    },
    status:{
        type:String,
        required:[true,"status is required"]
    },
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    date:{
        type:String,
        required:[true,"Date is required"]
    },
})
const BlogsModel= mongoose.model('blog', blogSchema);

module.exports=BlogsModel;