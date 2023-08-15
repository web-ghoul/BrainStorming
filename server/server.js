const express = require("express");
const app = express();
require("dotenv").config();
const ip = "localhost";
const Port = process.env.PORT || 3000 ;
const mongoose = require("mongoose");

const session = require('express-session')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')


const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const routes = require('./routes/mainRoutes')
const logger = require("./logger/index")
const morgan = require('morgan');

// logger.error("hello error")
// logger.debug("heelo debug")
// logger.warn("hello warn")
// logger.info("ghello info")
//app.use(express.static("public"));
const corsOptions = {
  origin: [
    'http://localhost:3001'
    
    

    // your origins here
  ],
  credentials: true,
  exposedHeaders: ['set-cookie'],
};

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      description: " A simple Express library api"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ],
    //apis: ["./routes/*.js"]

  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsDoc(options);



app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({extended: true  , limit: "25mb" }));
app.use(morgan('combined'))
app.use("/api-docs" , swaggerUI.serve , swaggerUI.setup(openapiSpecification));

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

app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

app.use("/api" , routes)


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
