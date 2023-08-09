// npm init : package.json => Defines this is a node project
// npm i express : expressJs package install hoga. => project came to know that we are using express

const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const playlistRoutes = require("./routes/playlist");
require("dotenv").config();
const cors = require("cors");
const app = express();
// const port = 8080;

app.use(cors());
app.use(express.json());

// connect mongodb to our node app.

mongoose.connect(
        process.env.MONGO_PASSWORD , 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then((x) => {
    console.log("Connected to Mongo!");
})
.catch((err) => {
    console.log("Error while connecting to Mongo");
});



// setup passport-jwt
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({_id: jwt_payload.identifier}, function (err, user) {
            // done(error, doesTheUserExist)
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    })
);




// API : GET type : / : return text "Hello World"
app.get("/", (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    res.send("Hello World");
});



app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// Now we want to tell express tht our server will run on localhost:8080
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});