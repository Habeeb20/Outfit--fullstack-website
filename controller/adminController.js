const Good = require("../models/goodmongo");
const Client = require("../models/mongodb");
const Admin = require("../models/adminmongo")

const securePassword =(async(password) => {
    try {
        const passwordHash = await bcyrpt.hash(password,10)

        return passwordHash;
        
    } catch (error) {
        console.log(error)
        
    }

});


const login= (async(req, res) => {
    res.send("hi")
});

const goodSetUp = (async(req, res) => {
    try{
        var good = await Good.find({});
        if (good.length > 0) {
            
        } else {
            res.render('landingPage')
            
        }

    }catch(err){
        console.log(err)
    }
});



const goodsSetUpSave = (async(req, res) => {
    try {
        const title = req.body.title;
        const kinds = req.body.kinds;
        const email = req.body.email;
        const password = await securePassword(req.body.password);
        
        const good = new Good({
            title:title,
            kinds:kinds,

        });

        await Good.save();

        const client = new Client({
            
            email:email,
            password:password,
            
        });

        const clientData = await client.save()
        if (clientData){
            res.render('/avaliablegoods')
        }else {
            req.render ('login', {message:'not properly set up'})
        }
        
        
    } catch (error) {
        console.log(error)
        
    }


});

const dashboard =(async(req, res) => {
    try {
        const allpost = await Admin.find({})
        req.render("admin/dashboard", {posts:allpost})
    } catch (error) {
        console.log(error)
        
    }
});

const loadPostDashboard = (async(req, res) => {
    try {
        res.render('admin/postdashboard');
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
        await Admin.deleteOne({_id:req.params.id})
    } catch (error) {
        console.log(error)
        
    }
});


const updatePost = async(req, res) => {
    try {
       const editData= await Admin.findByIdAndUpdate({_id:req.params.id}, {
            $set: {
                title:req.body.title,
                content:req.body.content,
            }
        })
    } catch (error) {
        console.log(error)
        
    }
}
module.exports= {
    goodSetUp,
    goodsSetUpSave,
    login,
    securePassword,
    dashboard,
    loadPostDashboard,
    AddPost,
    deletePost,
    updatePost
}
