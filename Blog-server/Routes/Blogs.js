const BlogsModel=require("../Models/Blogs");
function blogs(app){
    app.post("/blogs", async (req, res) => {
        try {
          const newBlog = new BlogsModel({
            title: req.body.title,
            authorName: req.body.authorName,
            authorEmail: req.body.authorEmail,
            keywords: req.body.keywords,
            description: req.body.description,
            category: req.body.category,
            status: req.body.status,
            image: req.body.image,
            date: req.body.date,
          });
    
          const blogData = await newBlog.save();
          res.status(201).send({ blogData });
        } catch (error) {
          res.status(500).send({ message: error.message });
        }
      })
app.get("/blogs",async (req, res)=>{
  try {
    const readData=await BlogsModel.find();
    if(readData)
    {
      res.status(200).send({readData})
    }
    else
    {
      res.status(404).send({
        message:"Blog is Not Found"
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})
app.delete("/blogs/:id", async(req, res)=>{
  try {
      const id = req.params.id;
      const blog=await BlogsModel.deleteOne({_id:id})
      if(blog){
        res.status(200).send({blog})
      }
      else{
        res.status(404).send({
          message:"Blog is Not Deleted"
        })
      }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})
app.put("/blogs/:id", async(req, res)=>{
  try {
    const id = req.params.id;
    const updateBlog=await BlogsModel.updateOne({_id:id},{
      $set:{
        title: req.body.title,
        authorName: req.body.authorName,
        authorEmail: req.body.authorEmail,
        keywords: req.body.keywords,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status,
        image: req.body.image,
        date: req.body.date,
      }
    })
    if(updateBlog){
      res.status(201).send({updateBlog})
    }
    else{
      res.status(404).send({
        message:"Blog is Not updated"
      })
    }
} catch (error) {
  res.status(500).send({ message: error.message });
}
})
app.get("/blog/:id",async (req,res)=>{
  try {
    const id=req.params.id;
    const readData=await BlogsModel.findOne({_id:id});
    if(readData){
      res.status(200).send({readData})
    }
    else{
      res.status(404).send({
        message:"Blog is Not Found"
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})
app.get("/blogs/search/:search",async(req, res)=>{
  try {
    const data=await BlogsModel.find({
      $or:[
        {
          title:{$regex:req.params.search}
        },
        {
          authorName:{$regex:req.params.search}
        },
        {
          authorEmail:{$regex:req.params.search}
        },
        {
          keywords:{$regex:req.params.search}
        },
        {
          description:{$regex:req.params.search}
        },
        {
          category:{$regex:req.params.search}
        },
        {
          date:{$regex:req.params.search}
        },
      ]
    })
    if(data){
      res.status(200).send(data);
    }
    else{
      res.status(404).send({
        message:"Blog is Not Found"
      })
    }
} catch (error) {
  res.status(500).send({ message: error.message });
}
})
}

module.exports=blogs;