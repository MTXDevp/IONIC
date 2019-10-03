var admin = require('firebase-admin');

var serviceAccount = require("./ionicpushnotifire-firebase-adminsdk-qrag1-c708400f16.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

console.log(admin.app().name);

var registrationToken = 'cNATGOR77po:APA91bFlSCCXHBRFVt3g0muDTVvlohe53mMVYvNUAlEq2wr7x8lvyyhbwnihlD0mS0SpkjmPwNQN_GI1L2v9_eIuaeBfikk4l6TYbzq3NwtX03qy4YzXaWknqbsqbqAk0Dk7WHe4NsQW';

var message = {
	notification: {
		title: "Node es facil",
		body: "El contenido"
	},
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

admin.messaging().send(message)
  .then((response) => {
    console.log('OK:', response);
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })