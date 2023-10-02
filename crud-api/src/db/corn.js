// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://rohit:2001Rohitjat@cluster0.xghpelg.mongodb.net/?retryWrites=true&w=majority",{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=> {console.log("connection start")})
// .catch((e)=> {console.log("No connection start")})

const mongoose = require("mongoose");

const DB="mongodb+srv://rohit:2001Rohitjat@cluster0.xghpelg.mongodb.net/crud-api"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(() => console.log("connection start"))
.catch((e)=> console.log("No connection "));