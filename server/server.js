const express = require("express");
const app = express();
require("dotenv").config();
const ip = "localhost";
const Port = process.env.PORT || 3000 ;
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const session = require('express-session')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')

const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const teamController = require("./controllers/teamControllers")
const ideaController = require("./controllers/ideasControllers")
//app.use(express.static("public"));
const corsOptions = {
  origin: [
    'http://localhost:3001'
    
    

    // your origins here
  ],
  credentials: true,
  exposedHeaders: ['set-cookie'],
};


app.use(express.json()) //can remove
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", 'http://localhost:3001' ]
    }
  }
}));

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));



app.get("/Teams" , teamController.displayTeams )
app.post("/Teams" , teamController.createTeam)

app.get("/Ideas", ideaController.displayIdeas )
app.post("/Ideas", ideaController.postIdeas)

// app.use(express.static(path.join(__dirname , '../client/build')))
// app.get("*" , function (req,res) {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))
  
// }
// )


app.use(notFound);
app.use(errorHandler);


mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(Port, () => {
      console.log(`App listening at http://${ip}:${Port}`);
      console.log("Database Connected : " , result.connection.host,result.connection.name)
        let val = "Amr006" ;
    });
  })
  .catch((err) => {
    console.log(err);
  });


//last to catch any wrong url ( needs cool 404 page :) ) 
