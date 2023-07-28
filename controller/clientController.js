const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')
const rand = require('randomstring');
const config = require('../config/config');
const Client = require('../models/mongodb');
const Goods = require('../models/goodmongo');
const logger = require('./logger')



const securePassword =(async(password) => {
    try {
        const passwordHash = await bcrypt.hash(password,10)

        return passwordHash;
        
    } catch (error) {
        console.log(error)
        
    }

});




const loadlogin = (async(req, res)=>{
    try {
        res.render('login')
    } catch (error) {
        console.log(error)
        
    }
});

const signup = (async(req, res)=>{
    try {
        res.render('signup')
    } catch (error) {
        console.log(error)
        
    }
});

const verifysignup = (async(req, res) => {
    try {
        const email = req.body.email;
        const password = await securePassword (req.body.password);

        const newclient = new Client({
    
            email:email,
            password:password,
            
        });

        const clientDat = await newclient.save()
        if(clientDat){
            res.render('goodselection',{email:email})
        }
    } catch (error) {
        
    }
})

const profile = (async(req, res) => {
    let id = req.params.id;
    const detaildata = await Goods.find();
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

const goodDetails =(async(req, res)=> {
    try {
        res.render('goodDetails')
    } catch (error) {
        console.log(error)
        
    }
});

const details = (async(req, res)=> {
    try {
        const title = req.body.title;
        const kinds = req.body.kinds;
        const color = req.body.color;

        const detailsgood = new Goods({
            title:title,
            kinds:kinds,
            color:color
        });

        const detaildata = await detailsgood.save();
        if (detaildata) {
            const detaildata = await Goods.find()
            res.render('profile', {
                _id: req.params.id,
                title:req.body.title,
                kinds:req.body.kinds,
                color:req.body.color,

                detaildata : detaildata,
                title:title,
                kinds:kinds,
                color:color,
                message:"goods added to cart successfully",
             
            })
            
        } else {
            
        }
        
    } catch (error) {
        console.log(error)
        
    }

})



const sendResetPasswordMail = async(name, email, token) => {


    try {
        const transporter= nodemailer.createTransport({
            host:'smtp.forwardemail.net',
            port:465,
            secure:false,
            requireTLS:true,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASSWORD
            }
        }) ;

        const mailOptions = await transporter.sendMail ({
            from:'cineflix support<support@cineflix.com>',
            to:email,
            subject:'reset password',
            html: '<p>Hi, '+name+', please click here to <a href="http://127.0.0.1:3000/reset-password?token= ' +token+'">Reset</a>Your password'


        })
        console.log("message sent:%s", info.messageId);
     

       await transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }
            else {
                console.log('email has been sent:-', info.response);
            }
            logger.customerLogger.log('info', 'successfully got list')

        })
    } catch (error) {
        console.log(error)

        logger.customerLogger.log('error', 'sorry, an error occurred')
    }

}


const verifyLogin = (async(req, res) =>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const clientData = await Client.findOne({email: email})

        if (clientData) {
            console.log(clientData)
            const passwordMatch = await bcrypt.compare(password, clientData.password)


            if (passwordMatch) {
                req.session.user_id = clientData._id;
                req.session.is_admin = clientData.is_admin;


                if(clientData.is_admin = 1){
                    res.render('goodselection', {
                        email:req.body.email,
                        email:email
                    })
                }else {
                    res.redirect('/login', {message: "login details does not match,create an account instead"})
                }
                
            } else {
                res.redirect("/login")
                console.log("incorrect password")
             
                
            }
            
        } else {
           
            if (!clientData) {
                console.log("no email is found")
                res.render("signup")

                
            } else {
                console.log(err2)
                
            }

            // res.status(500).json({mesaage:"error"})
            
        }
    } catch (error) {
        console.log(error)
        
    }
});

 
const logout = (async(req, res)=> {
    try {
        req.session.destroy();
        res.redirect('/login')
        
    } catch (error) {
        console.log(error)
        
    }
});

const forgetpass = (async(req, res)=>{
    try {
        res.render('forgetpassword')
    } catch (error) {
        console.log(error)
        
    }
});

const forgetPasswordVerification = (async(req, res)=> {
    try {
        const email = req.body.email;
        const clientData = await Client.findOne({email:email})

        if(clientData){
            var randomstring=  rand.generate();

            await Client.updateOne({email:email}, {$set :{token:randomstring}});
            sendResetPasswordMail(clientData.name, clientData.email, randomstring);
            res.render('forgetpassword', {message:"please check your mail to reset your password"});

            logger.customerLogger.log('info', 'successfully got list')

        } else {
            res.render('forgetpassword', {message:"User's email is incorrect"})
            

            logger.customerLogger.log('error', 'error occured')
        }
       
        
    } catch (error) {
        console.log(error)
        logger.customerLogger.log('error', 'error occured')
        
    }
})

const goodselection = async(req, res) => {
    try {
        const email= req.body.email;
        res.render('goodselection', { email:email})
    } catch (error) {
        console.log(error)
    }
};

const availablegoods = async(req, res) => {
    try {
        res.render('availablegoods')
    } catch (error) {
        console.log(error)
        
    }
}



const Loadresetpassword = (async(req, res)=> {
    try {
        const token = req.query.token;
        const tokenData = await Client.findOne({token:token})
        
        
        if(tokenData){
            res.render('resetpassword',{user_id:tokenData._id})
        }

        else{
            res.render('404')
        }
    } catch (error) {
        console.log(error)
        
    }
});

const resetPassword = (async(req, res) => {
    try {
        const password = req.body.password;
        const user_id = req.body.user_id;


        const securePassword = await adminController.securePassword(password);
        Client.findByIdAndUpdate({_Id:user_id}, {$set:{password:securePassword, token: ""}})

        logger.customerLogger.log('info', 'successfully got list')

        res.redirect('/login')
    } catch (err) {
        console.log(error)

        logger.customerLogger.log('error', 'error occured')
        
    }
});




module.exports= {
    loadlogin,
    signup,
    profile,
    goodDetails,
    details,
    verifyLogin,
    verifysignup,
    logout,
    goodselection,
    availablegoods,
    forgetpass,
    forgetPasswordVerification,
    Loadresetpassword,
    resetPassword
}