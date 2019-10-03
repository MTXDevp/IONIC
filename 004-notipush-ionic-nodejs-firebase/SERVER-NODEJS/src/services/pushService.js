admin = require('firebase-admin');

module.exports = class pushService
{	//pass array of tokens for multicast
	constructor(mobileTokens, titulo, mensaje)
	{
		try{

		var serviceAccount = require("./ionicpushnotifire-firebase-adminsdk-qrag1-c708400f16.json");
		admin.initializeApp({ credential: admin.credential.cert(serviceAccount), });

		}catch (err){

			console.log("La App ya esta inicializada");

		}
		//dont notification in payload, so bugged
		var payload = {

			data: {
			  title: titulo,
			  body: mensaje
			}
		  };

			admin.messaging().sendToDevice(mobileTokens, payload)
				.then((response) => {
				console.log('Notificacion enviada con exito:', response);
				}).catch((error) => {
				console.log('ERROR:', error);
				})
		}
	}//final constructor----------------------------------------->
