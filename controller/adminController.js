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

const profile = (async(req, res) => {
    
    const detaildata = await Good.find();
    if(detaildata.length)
    console.log(detaildata)
    try {
        res.render('profile', {  
            _id: req.params.id,
            
            title:req.body.title,
            kinds:req.body.kinds,
            color:req.body.color,
            detaildata: detaildata,
            message:"goods added to cart successfully",
         })
    } catch (error) {
        console.log(error)
        
    }
});



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
            let id = req.params.id;
            const delet = await Good.findByIdAndRemove(id.trim());

            if(delet){
                try {
                    res.redirect('/profile')
                    console.log("successful")
                    
                } catch (error) {
                    console.log(error)
                    
                }
            }
                
         
       
        
        } catch (error) {
        console.log(error)
        
        }

    


});

const geteditpost = (async(req,res) => {
    try {
        let id = req.params.id;
        const admindata = await Good.findById(id);
        if(admindata){
            try {
                res.render('editpost', {
                    _id:req.params.id,

                    detaildata:admindata
                })
                
            } catch (error) {
                console.log(error)
                
            }
        }
    
           
        
        
    } catch (error) {
        console.log(error)
        
    }
})


const loadedit =(async(req, res)=> {
    let id = req.params.id;
    const editdetails = await Good.findByIdAndUpdate(id, {
        title:req.body.title,
        kinds:req.body.kinds,
        color:req.body.color,
    });
    try { 
        const detaildata =  await editdetails.save()

        if (detaildata) {
          
            res.redirect("/profile")
            console.log("successful")
            
        } else {
            console.log('error')
            
        }
    } catch (error) {
        console.log(error)
        
    }
});



module.exports= {
 
    profile,
    securePassword,
    geteditpost,
    loadedit,
    AddPost,
    deletePost,
    
}
