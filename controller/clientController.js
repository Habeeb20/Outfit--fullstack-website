const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')
const randomstring = require('randomstring');
const config = require('../config/config');
const Client = require('../models/mongodb');



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


const sendResetPasswordMail = async(name, email, token) => {


    try {
        const transport= nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:config.emailUser,
                pass:config.emailPassword
            }
        }) ;
        
        const mailOptions = {
            from:config.emailUser,
            to:email, 
            subject:'Reset password',
            html: '<p>Hi, '+name+', please click here to <a href="http://127.0.0.1:3000/reset-password?token= ' +token+'">Reset</a>Your password'
        }

        transport.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }
            else {
                console.log('email has been sent:-', info.response);
            }

        })
    } catch (error) {
        console.log(error)
        
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
                    res.redirect('/goodselection')
                }else {
                    res.redirect('/login', {message: "login details does not match,create an account instead"})
                }
                
            } else {
                console.log("incorrect password")
                res.redirect("/login", {message:"your password does not match"})
                
            }
            
        } else {
            console.log("err")
            res.redirect('/login')
            if (!clientData) {
                const email = req.body.email;
                const  password = await securePassword (req.body.password);

                const newclient = new Client({
            
                    email:email,
                    password:password,
                    
                });
        
                const clientDat = await newclient.save()
                if(clientDat){
                    res.render('goodselection')
                }
                
            } else {
                console.log(err2)
                
            }

            // res.status(500).json({mesaage:"error"})
            
        }
    } catch (error) {
        console.log(error)
        
    }
});


        // if(clientData){
        //     console.log(clientData)
        //     const passwordMatch = await bcrypt.compare(password, clientData.password)

        //     if(passwordMatch){
        //         req.session.user_id = clientData._id;
        //         req.session.is_admin = clientData.is_admin

        //         if(clientData.is_admin = 1){
        //             res.redirect('/dashboard')
        //         }else {
        //             res.redirect('/login', {message: "login details does not match,create an account instead"})
        //         }
        //     }
        //     else {
        //         res.send("error")
        //     }
        // if(!clientData){

        //     const newData = new newInfo({
        //         email:email,
        //         passsword:password
        //     })

        //     const Data = await newData.save()
            

        // }
        // else{
        //     res.redirect('login', {message: "login details does not match,create an account instead"})
        // }
        // }
        
 
const logout = (async(req, res)=> {
    try {
        req.session.destroy();
        res.redirect('/login')
        
    } catch (error) {
        console.log(error)
        
    }
});

const goodselection = async(req, res) => {
    try {
        res.render('goodselection')
    } catch (error) {
        console.log(error)
    }
}


const forgetLoad =(async(req, res)=> {
    try {
        res.render('forget-password')
    } catch (error) {
        console.log(error)
        
    }
});

const forgetPasswordVerify = (async(req, res)=> {
    try {
        const email = req.body.email;
        const clientData = await Client.findOne({email:email})

        if(clientData){
            const randomstring= randomstring.generate();

            await Client.updateOne({email:email}, {$set :{token:randomstring}});
            sendResetPasswordMail(clientData.name, clientData.email, randomstring);
            res.render('forget-password', {message:"please check your mail to reset your password"})

        } else {
            res.render('forget-password', {message:"User's email is incorrect"})
        }
    } catch (error) {
        console.log(error)
        
    }
});

const resetPasswordLoad = (async(req, res)=> {
    try {
        const token = req.query.token;
        const tokenData = await Client.findOne({token:token})
        
        
        if(tokenData){
            res.render('reset-password',{user_id:tokenData._id})
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

        res.redirect('/login')
    } catch (err) {
        console.log(error)
        
    }
});

module.exports= {
    loadlogin,
    verifyLogin,
    logout,
    goodselection,
    forgetLoad,
    forgetPasswordVerify,
    resetPasswordLoad,
    resetPassword
}