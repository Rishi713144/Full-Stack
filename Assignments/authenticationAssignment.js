const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "iamarpanmondal";
const app = express();
app.use(express.json());

const users = [];

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// })

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed in"
    })

    console.log(users);
})

app.post("/signin", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i = 0; i < users.length; i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username : foundUser.username
        }, JWT_SECRET);
        //foundUser.token = token;
        res.json({
            token : token
        })
    }else{
        res.status(403).send({
            message : "Invalid credentials"
        })
    }
    console.log(users);
})

function auth(req, res, next){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    if(decodedInfo.username){
        req.username = decodedInfo.username;
        next();
    } else {
        res.json({
            message : "You're not logged in"
        })
    }
}

app.get("/me", auth, (req, res) => {
    let foundUser = null;
    for(let i = 0; i < users.length; i++){
        if(users[i].username === req.username){
            foundUser = users[i];
        }
    }
    if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
        //res.header("jwt", token);
        //res.header("random", "nigga");
    }else{
        res.json({
            message : "Token invalid"
        })
    }
})

app.listen(3000);