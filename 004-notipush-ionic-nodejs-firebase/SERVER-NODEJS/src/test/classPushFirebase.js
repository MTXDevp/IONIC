//https://firebase.google.com/docs/cloud-messaging/send-message
admin = require('firebase-admin');

class test
{
	constructor(mobileTokens, titulo, body)
	{
	serviceAccount = require("./ionicpushnotifire-firebase-adminsdk-qrag1-c708400f16.json.js");
	//posiblemente sea necesario sepàrar ,la conexion a un script aparte
	admin.initializeApp({
	credential     : admin.credential.cert(serviceAccount),
	});

		var message   = {
			notification : {
			title        : titulo,
			body         : body
			},
			token        : mobileTokens
			};//final mensaje

		admin.messaging().send(message)
  		.then((response) => {
  		console.log('OK:', response);
  		}).catch((error) => {
  		console.log('ERROR:', error);
  		})
	}//final constructor


}