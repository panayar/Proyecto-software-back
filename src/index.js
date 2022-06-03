const express = require('express');
const app = express();
const morgan = require('morgan');


//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.use(express.static(__dirname + '/public'));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Paths 
const user_path = "/api/user";

//Routes
app.use(user_path, require('./routes/user.routes'));


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


