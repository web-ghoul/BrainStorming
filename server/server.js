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
const path = require('path');
var fs = require('fs')
const morgan = require('morgan');
const xss = require('xss-clean');
const multer = require('multer');

const uploadImage = require("./utils/uploadImage");
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const privateRoutes = require('./routes/privateRoutes')
const publicRoutes = require('./routes/publicRoutes')
const logger = require("./logger/index")
const Routes = require('./routes/authRoutes')



// logger.error("hello error")
// logger.debug("heelo debug")
// logger.warn("hello warn")
// logger.info("ghello info")
//app.use(express.static("public"));
const corsOptions = {
  origin: [
    'http://localhost:3001',
    'http://localhost:4000',
    "http://127.0.0.1:5500"

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
        url: "http://localhost:3000/api"
      }
    ],
    //apis: ["./routes/*.js"]

  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsDoc(options);


var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use("/api-docs" , swaggerUI.serve , swaggerUI.setup(openapiSpecification));

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", 'http://localhost:4000' , "http://127.0.0.1:5500"]
    }
  }
}));
app.use(xss());
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, __dirname + '/uploads');
  },
  // Sets file(s) to be saved in uploads folder in same directory
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
  // Sets saved filename(s) to be original filename(s)
})

// Set saved storage options:
const upload = multer({ storage: storage })


app.post("/api", upload.array("files"), (req, res) => {
// Sets multer to intercept files named "files" on uploaded form data

    console.log(req.body); // Logs form body values
    console.log(req.files); // Logs any files
    
    uploadImage(req.files[0])
    .then((url) =>  console.log(url))
    .catch((err) => res.status(500).send(err));
});

app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

app.post("/uploadMultipleImages", upload.array("files"), (req, res) => {
  console.log("hello")
  
  uploadImage
    .uploadMultipleImages(req.files)
    .then((urls) => {
      console.log(urls)
      res.send(urls)
    })
    .catch((err) => res.status(500).send(err));
});


app.get('/', (req, res, next) => {
  // Imagine you're serving a secret treasure map to your users!
  const treasureMap = {
    message: "🗺️ Welcome to the Treasure Hunt API! 🏴‍☠️",
    clues: [
      "🌴 Follow the path of 'api/' to start the journey.",
      "🦜 Look out for the 'X marks the spot' at each endpoint!",
      "⚓ More treasures await as you navigate the API seas!",
    ],
    disclaimer: "Remember, only true adventurers can unlock the secrets...",
    documentation: "/api-docs"
  };

  res.status(200).json(treasureMap);
});

app.use("/api" , privateRoutes)
app.use("/api" , publicRoutes)
app.use("/api" , Routes)
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
