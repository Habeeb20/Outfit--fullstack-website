const Good = require("../models/goodmongo");
const Client = require("../models/mongodb");
const Admin = require("../models/adminmongo");
const { findById } = require("../models/mongodb");

const securePassword =(async(password) => {
    try {
        const passwordHash = await bcyrpt.hash(password,10)

        return passwordHash;
        
    } catch (error) {
        console.log(error)
        
    }

});

const profile =(async(req, res) => {
    try {
        res.render('profile')
    } catch (error) {
        console.log(error)
        
    }
})




const AddPost  = (async(req, res) => {
    try{
        const post = new Admin({
            title: req.body.title,
            content:req.body.content,
            password:req.body.password
        });

        const postData = await Admin.save();
        res.send({msg:"post successfully added"})
    }catch(error){
        console.log(error)

    }
});
const deletePost = (async(req, res) => {
    try {
        await Good.deleteOne({_id:req.params.id})
    } catch (error) {
        console.log(error)
        
    }
});

const geteditpost = (async(req,res) => {
    try {
        const admindata = await Good.findById({_id:req.params.id});
        if (admindata) {
            res.render('editpost',{admin:admindata});
            
        } else {
            console.log("not properly set")
            
        }
        
        
    } catch (error) {
        console.log(error)
        
    }
})


const loadedit =(async(req, res)=> {
    try {
        const editdetails = await Good.findByIdAndUpdate({_id:req.params.id}, {
            $set:{
                color:req.body.color,
            }
        });

        if (editdetails) {
            console.log("successful")
            
        } else {
            console.log('error')
            
        }
    } catch (error) {
        console.log(error)
        
    }
})



module.exports= {
 
    profile,
    securePassword,
    geteditpost,
    loadedit,
    AddPost,
    deletePost,
    
}
