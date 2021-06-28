const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcryptjs = require("bcryptjs");
const User = require('../schemas/UserSchema');

app.set("view engine", "pug");
app.set("views","views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/",(req,res,next)=> {

    res.status(200).render("login",);
})
router.post("/",async (req,res,next)=> {

    var payload = req.body;

    if(req.body.logUsername && req.body.logPassword){
        var user = await User.findOne({
            $or: [
                { username: req.body.logUsername },
                { email: req.body.logUsername }
            ]
        })
        .catch((error) => {
            console.log(error);
            payload.errorMessage = "Something went wrong.";
            res.status(200).render("login", payload);
        });

        if(user != null){
            var result = await bcryptjs.compare(req.body.logPassword, user.password);

            // var result = await req.body.logPassword;
            // if(result == user.password){
            //     req.session.user = user;
            //     return res.redirect("/");
            // }

            if(result === true){
                req.session.user = user;
                return res.redirect("/");
            }
    
        }
        payload.errorMessage = "login credentials incorrect.";
        return res.status(200).render("login", payload);


    }
    payload.errorMessage = "Make sure each field has a valid value.";
    res.status(200).render("login",);
})

module.exports=router;