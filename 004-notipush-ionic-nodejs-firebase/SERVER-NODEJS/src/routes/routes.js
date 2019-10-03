const firebasePush = require('../services/pushService');

module.exports = function (app){


app.all("/*", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

app.get('/', (req, res) => {
	res.send('PAGINA CENTRAL');
});

//test_token = "fT5WLt5uwlg:APA91bG3HIJ2wZG9BH7CCfd1e9j2NEOKYr-ROxhf21hyvic4Iz5Iw0njE9MiZZWkhQes"
//	+ "BacrgN1Z7KXuw8FjXfS8JohO0pDQ3vKsc6PvvB_DeR3xBUdTi69VAo8h4oCMmYHokSwY_Mzp"

//GUARDAR TOKEN EN BASE DATOS Y EJECUTAR EL PUSH EN SCRIP INDEPENDIENTE
app.post("/send", (req, res) => {
	var token = req.body.token;
	var titulo = "titulo";
	var mensaje = "mensaje";
	res.send(token);

		try{

			new firebasePush(token,titulo,mensaje);

		}catch (err){

			console.log(err);
		}
  });

}