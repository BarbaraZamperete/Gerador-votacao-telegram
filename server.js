const express = require('express');
const path = require('path');
const app = express();
const { engine } = require('express-handlebars');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const flash = require("connect-flash");


//settings
app.set('port', process.env.PORT || 4000);

app.engine('.hbs', engine({ extname: '.hbs', runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
} }));
app.set('view engine', '.hbs');
app.set('views', './views');

//middlewares
app.use(express.static(path.join(__dirname, 'public'))); //seta onde ta a pasta public

app.use(express.urlencoded({extended: false}));


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

app.use(flash());


//global variables
app.use((req, res, next) => {
    //o nome da variavel global é success_msg
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.user = req.user || null;
    next();
})


//routes
app.use(require('./routes/index.routes'));


//static files
module.exports = app;
