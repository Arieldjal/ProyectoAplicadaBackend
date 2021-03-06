const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Inicio del BackEnd" });
});

app.use(require('./src/routes/Router'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});