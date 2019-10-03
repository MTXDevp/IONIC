const bodyParse = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const app = express();
//opciones
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(bodyParse.json());

//routes
require("./routes/routes")(app);

app.listen(app.get('port'), () => {
    console.log("server on port 3000");
});
