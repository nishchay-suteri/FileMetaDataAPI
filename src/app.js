const path = require('path')
// Packages installed
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const fileAnalyseRouter = require('./routes/FileAnalyse')

const app = express();
dotenv.config();

// MIDDLEWARES
app.use(cors({optionsSuccessStatus: 200}))
app.use(express.static(path.join(__dirname,'../public'))); // To Serve Static contents
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies (as sent by HTML forms)

app.use('/api', fileAnalyseRouter);

// PORT
const SERVER_PORT = process.env.PORT || 3000;

// Root Route
app.get('/', (req, res) => {
    res.render('index');
});

// Server Start
app.listen(SERVER_PORT , () => console.log(`Server is listening on Port ${SERVER_PORT}`));